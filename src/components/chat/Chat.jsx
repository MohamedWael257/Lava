import React, { useContext, useEffect, useState } from 'react'
import './Chat.css'
import Sidebar from './chatitems/sidebar/Sidebar';
import MainContent from './chatitems/maincontent/MainContent';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext'
import { useSelector } from 'react-redux';
import { authuser } from '../../redux/slice/authslice';
import { db } from '../../firebase/config';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Chat = () => {
    // const currentUser = useSelector(authuser);
    const { currentUser } = useContext(AuthContext)
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    // const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    // console.log('currentUser', currentUser);
    // console.log(users);
    useEffect(() => {
        const getusers = async () => {
            if (currentUser?.email === 'admin@gmail.com') {
                var usersCollection = query(
                    collection(db, "users"),
                    where("email", "not-in", ['admin@gmail.com'])
                );
            }
            else {
                var usersCollection = query(
                    collection(db, "users"),
                    where("email", "in", ['admin@gmail.com'])
                );
            }
            // const usersCollection = collection(db, "users");
            const userSnapshot = await getDocs(usersCollection);
            const usersData = userSnapshot.docs.map((doc) => doc.data());
            setUsers(usersData);
            // setLoading(false)
        }
        getusers();
    }, [])
    // console.log('currentUser', currentUser);
    // console.log(users);
    let admin
    users.map(ele => admin = ele)
    // useEffect(() => {
    //     if (currentUser?.uid && currentUser?.displayName && currentUser?.email && currentUser?.photoURL) {
    //         setLoading(false)
    //     }
    // }, [currentUser])
    useEffect(() => {
        if (!currentUser) {
            navigate('/')
        }
    }, [currentUser])
    const handelUserClick = (user) => {
        setSelectedUser(user)
    }
    return (
        <div className='flex min-h-screen text-center bg-slate-100 max-w-[1435px] min-w-[850px] mx-auto'>
            {/* <div className="flex min-h-screen bg-slate-100 max-w-[1435px] min-w-[850px] mx-auto"> */}
            {currentUser?.email === "admin@gmail.com" ?
                <>
                    <div className='bg-white lg:w-[400px] w-[300px] '>
                        <Sidebar
                            users={users}
                            onUserClick={handelUserClick}
                            selectedUser={selectedUser}
                        />
                    </div>
                    <div className='bg-slate-300 flex-1'>
                        <MainContent selectedUser={selectedUser} />
                    </div>
                </>
                :
                <div className='bg-slate-300 flex-1'>
                    <MainContent selectedUser={admin} />
                </div>
            }
        </div >
    )
}

export default Chat