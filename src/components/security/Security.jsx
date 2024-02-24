import React, { Fragment, useContext, useEffect, useState } from 'react'
import './Security.css'
import { Link, json } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { authuser } from '../../redux/slice/authslice'
import { auth, db, storage } from '../../firebase/config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoPencil } from "react-icons/go";
import { AuthContext } from '../../context/AuthContext'
import { sendPasswordResetEmail, updateProfile } from 'firebase/auth'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytesResumable, uploadString } from 'firebase/storage'
import Loader from '../loader/Loader'
const Security = () => {
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")
    const [activeedit, setActiveedit] = useState(false)
    const { currentUser } = useContext(AuthContext)
    const [users, setUsers] = useState([])
    const [currentuser, setCurrentuser] = useState([])
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    // console.log('user', currentuser);
    // console.log('currentuser', currentUser);
    // console.log('currentUser', currentUser?.reloadUserInfo.passwordHash);
    // console.log('user', currentUser?.password);
    // useEffect(() => {
    //     if (currentUser?.reloadUserInfo.passwordHash !== currentUser?.password) {
    //         setDoc(doc(db, 'users', currentUser?.uid), {
    //             uid: currentUser?.uid,
    //             email: currentUser?.email,
    //             displayName: currentUser?.displayName,
    //             phoneNumber: currentUser?.phoneNumber,
    //             password: currentUser?.reloadUserInfo.passwordHash,
    //         });
    //         // toast.success("success")
    //     }

    // }, [currentUser, user])
    useEffect(() => {
        setFullname(currentuser?.fullName)
        setUsername(currentuser?.displayName)
        setEmail(currentuser?.email)
        setAddress(currentuser?.address)
        setPhone(currentuser?.phoneNumber)
        setPhotoUrl(currentuser?.photoURL)
    }, [currentuser])
    useEffect(() => {
        const getuser = async () => {
            const usersCollection = query(
                collection(db, "users"),
                where("uid", "in", [currentUser?.uid])
            )
            const userSnapshot = await getDocs(usersCollection);
            userSnapshot.docs.map((doc) => setCurrentuser(doc.data()));
            // setLoading(false)
        }
        getuser();
        const getusers = async () => {
            const usersCollection = collection(db, "users");
            const userSnapshot = await getDocs(usersCollection);
            const usersData = userSnapshot.docs.map((doc) => doc.data());
            setUsers(usersData);
            // setLoading(false)
        }
        getusers();
    }, [])
    const onresethandler = async (e) => {
        e.preventDefault();
        // setisLoading(true);
        try {
            await sendPasswordResetEmail(auth, currentUser?.email)
            toast.success("check your Emai l inbox")
        }
        catch (error) {
            toast.error(error.message)
        }


    }
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setPhotoUrl(reader.result)
            };
            reader.readAsDataURL(file);
        } else {
            setImage(null);
            setImagePreview(null);
        }
    };
    const save = async () => {
        try {
            setLoading(true);
            let imageUrl = null;
            if (image) {
                const storage = getStorage();
                const storageRef = ref(storage, image.name);
                await uploadString(storageRef, imagePreview, "data_url");
                imageUrl = await getDownloadURL(storageRef);
                setPhotoUrl(imageUrl)
                setImage(null);
                setImagePreview(null);

            }
            let user_EditUI = {
                uid: currentuser?.uid,
                fullName: fullname,
                displayName: username,
                email: email,
                address: address,
                phoneNumber: phone,
                photoURL: photoUrl,
            }
            // console.log('user_EditUI', user_EditUI);
            // console.log('users', users);
            const findeNEusername = users.filter((obj) => obj.displayName !== currentuser?.displayName)
            const findeusername = findeNEusername.findIndex((obj) => obj.displayName === user_EditUI.displayName)
            const findeNEemail = users.filter((obj) => obj.email !== currentuser?.email)
            const findeemail = findeNEemail.findIndex((obj) => obj.email === user_EditUI.email)
            const findeNEphone = users.filter((obj) => obj.phoneNumber !== currentuser?.phoneNumber)
            const findephone = findeNEphone.findIndex((obj) => obj.phoneNumber === user_EditUI.phoneNumber)
            if (findeusername < 0 && findeemail < 0) {
                const itemindex = users.findIndex((item) => item.uid === currentuser?.uid);
                users[itemindex] = user_EditUI;
                await setDoc(doc(db, 'users', currentuser?.uid), user_EditUI);
                await updateProfile(auth.currentUser, {
                    displayName: username,
                    email: email,
                    photoURL: imageUrl
                });
                toast.success("User Edited Successfully")
                setLoading(false)
                setActiveedit(false)
            }
            else {
                toast.error('valid')
            }
        }
        catch (error) {
            setLoading(false)
            toast.error(error.message)
        }

    }
    return (
        <>
            {loading ? <Loader />
                : <div className='security'>
                    <div className='data-profile' key={currentuser?.uid}>
                        <GoPencil className='icon' size={30} onClick={() => setActiveedit(!activeedit)} color='#1f93ff' />
                        <div className={`${activeedit ? 'active input-box' : 'input-box'}`}>
                            <label htmlFor='fullname'>Full Name </label>
                            <p> : </p>
                            <input type="text" id='fullname' disabled={activeedit ? false : true} value={fullname} onChange={(e) => setFullname(e.target.value)} />
                        </div>
                        <div className={`${activeedit ? 'active input-box' : 'input-box'}`}>
                            <label htmlFor='username'>Username </label>
                            <p> : </p>
                            <input type="text" id='username' disabled={activeedit ? false : true} value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className={`${activeedit ? 'active input-box' : 'input-box'}`}>
                            <label htmlFor='email'>Email </label>
                            <p> : </p>
                            <input type="email" id='email' disabled={activeedit ? false : true} value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={`${activeedit ? 'active input-box' : 'input-box'}`}>
                            <label htmlFor='address'>Address </label>
                            <p> : </p>
                            <input type="text" id='address' disabled={activeedit ? false : true} value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className={`${activeedit ? 'active input-box' : 'input-box'}`}>
                            <label htmlFor='phonenumber'>Phone Number </label>
                            <p> : </p>
                            <input type="tel" id='phonenumber' disabled={activeedit ? false : true} value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className={`${activeedit ? 'active input-box' : 'input-box'}`}>
                            <label htmlFor='photoUrL'>PhotoUrl </label>
                            <p> : </p>
                            {photoUrl &&
                                <img style={{ border: "3px solid white" }}
                                    className="w-16 h-16 rounded-full"
                                    src={photoUrl}
                                />
                            }
                            <input
                                type="file"
                                id="photoUrL"
                                // disabled={activeedit ? false : true}
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={handleImageChange}
                            />
                            {
                                loading && <p>loading</p>
                            }
                        </div>
                        {
                            activeedit &&
                            <div className='edit'>
                                <button className='save' onClick={save}>save</button>
                                <button className='reset-pass' onClick={onresethandler}>reset pass</button>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Security