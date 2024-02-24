import React, { useEffect, useState } from 'react'
import { auth, db, storage } from "../../firebase/config";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import './Account.css'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsGoogle } from 'react-icons/bs'
import Loader from '../loader/Loader';
import Logo from '../../assets/logo.png'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import axios from 'axios';
const Signup = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [photoimage, setPhotoimage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!firstname || !lastname || !email || !phone || !password || !photoimage) {
            setLoading(false)
            toast.error("Please fill the form")
        }
        else {
            try {
                if (photoimage) {
                    // const userId = uuid()
                    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    const user = userCredential.user;
                    const storageref = ref(storage, `photoimage/${user.uid}`)
                    await uploadBytesResumable(storageref, photoimage)
                    const downloadURL = await getDownloadURL(storageref)
                    await updateProfile(user, {
                        displayName: `${firstname}${lastname}`,
                        photoURL: downloadURL,
                    });
                    await setDoc(doc(db, 'users', user.uid), {
                        uid: user.uid,
                        fullName: '',
                        displayName: `${firstname}${lastname}`,
                        email: email,
                        address: '',
                        phoneNumber: phone,
                        photoURL: downloadURL,
                    });
                    // await sendEmailVerification(auth.currentUser);
                    // toast.success("check your Email inbox to verified your email")
                    // await signOut(auth)
                    toast.success("Signin successfully");
                    setLoading(false)
                    navigate('/login')
                }
                else {
                    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    const user = userCredential.user;
                    await updateProfile(user, {
                        displayName: `${firstname}${lastname}`,
                        photoURL: "",
                    });
                    await setDoc(doc(db, 'users', user.uid), {
                        uid: user.uid,
                        fullName: '',
                        displayName: `${firstname}${lastname}`,
                        email: email,
                        address: '',
                        phoneNumber: phone,
                        photoURL: '',
                    });
                    await sendEmailVerification(auth.currentUser);
                    await signOut(auth)
                    toast.success("check your Email inbox to verified your email")
                    setLoading(false)
                    navigate('/login')
                }
            }
            catch (error) {
                setLoading(false);
                toast.error(error.message);
            }
        }

    }

    const handleGoogleSignup = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const userCredential = await signInWithPopup(auth, provider);
            const user = userCredential.user;
            await updateProfile(user, {
                displayName: user.displayName,
                photoURL: user.photoURL,
                phoneNumber: ''
            });
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                fullName: '',
                displayName: user.displayName,
                email: user.email,
                address: '',
                photoURL: user.photoURL,
                phoneNumber: ''
                // password: user.reloadUserInfo.passwordHash,
            });
            // navigate("/");
            toast.success("Signin successfully");

        } catch (error) {
            toast.error(error);
        }
    };
    return (
        <>
            {/* <ToastContainer /> */}
            {loading ? <Loader />
                : <div className='body'>
                    {/* <div className="mb-8 -translate-y-5">
                    <div className="flex gap-4 items-center">
                        <img src={Logo} className="w-20" />
                        <h1 className="font-black text-slate-700  dark:text-white text-4xl">LavaApp</h1>
                    </div>
                </div> */}
                    <div className="wrapper">
                        <span className="icon-close">
                            <ion-icon id="close-outline" name="close-outline"></ion-icon> </span>
                        <div className="form-box register">
                            <h2>Register</h2>
                            <form onSubmit={handleRegister}>
                                <div className="input-box">
                                    <span className="icon">
                                        <ion-icon name="person"></ion-icon>
                                    </span>
                                    <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                                    <label>First Name</label>
                                </div>
                                <div className="input-box">
                                    <span className="icon">
                                        <ion-icon name="person"></ion-icon>
                                    </span>
                                    <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                                    <label>Last Name</label>
                                </div>
                                {/* <div className="input-box">
                                    <span className="erroruser error text-danger"></span>
                                    <span className="icon">
                                        <ion-icon name="person"></ion-icon>
                                    </span>
                                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    <label>Username</label>
                                </div> */}
                                <div className="input-box">
                                    <span className="erroremail error text-danger"></span>
                                    <span className="icon">
                                        <ion-icon name="mail"></ion-icon>
                                    </span>
                                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <label>Email</label>
                                </div>
                                <div className="input-box">
                                    <span className="errorphone error text-danger"></span>
                                    <span className="icon">
                                        <ion-icon name="call"></ion-icon> </span>
                                    <input type="tel" name="Phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    <label>Phone</label>
                                </div>
                                <div className="input-box">
                                    <span className="errorpassword error text-danger"></span>
                                    <span className="icon">
                                        <ion-icon name="lock-closed"></ion-icon>
                                    </span>
                                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <label>Password</label>
                                    <div className="strength"></div>
                                </div>
                                {/* <div className="input-box">
                                <span className="errorconfpassword error text-danger"></span>
                                <span className="icon">
                                    <ion-icon name="lock-closed"></ion-icon>
                                </span>
                                <input type="password" name="" id="confpassword" value={cPassword} onChange={(e) => setcPassword(e.target.value)}  />
                                <label>Confirm Password</label>
                            </div> */}
                                <label
                                    htmlFor="profile"
                                    className="cursor-pointer flex items-center gap-3 justify-center my-2"
                                >
                                    <p className='text-white'>Profile Image</p>
                                    {photoimage && (
                                        <img style={{ border: "3px solid white" }}
                                            className="w-14 h-14 rounded-full"
                                            src={URL.createObjectURL(photoimage)}
                                        />
                                    )}
                                </label>
                                <input
                                    type="file"
                                    id="profile"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={(e) => setPhotoimage(e.target.files[0])}
                                />
                                <button type="submit" id="register_btn" className="btn">
                                    Register
                                    {/* {loading?'Register....':'Register'} */}
                                </button>
                                <div className="login-register">
                                    <p>Already have an acoount ?
                                        <Link to="/Login" className="login-link"> Login</Link>
                                    </p>
                                </div>
                            </form>
                            <div className="flex items-center gap-3 my-2">
                                <hr className="w-full border-slate-300" />
                                <p className='text-white'>OR</p>
                                <hr className="w-full border-slate-300" />
                            </div>
                            <button
                                className="flex bg-[#477cff] text-white w-full justify-between py-2 px-4 rounded shadow font-semibold"
                                onClick={handleGoogleSignup}
                            >
                                {/* <GoogleIcon /> */}
                                <BsGoogle size={20} />
                                <span>Continue with Google</span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Signup