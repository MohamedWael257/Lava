import React, { useContext, useEffect, useState } from 'react'
import './Profilenav.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { collection, deleteDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { ordershistory } from '../../../redux/slice/orderslice';
import Loader from '../../loader/Loader'
import { bookingshistory } from '../../../redux/slice/bookingslice';
const Profilenav = ({ setActiveside }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    // const [activeside, setActiveside] = useState(false)
    const { currentUser } = useContext(AuthContext)
    const getorders = useSelector(ordershistory)
    const getbooking = useSelector(bookingshistory)
    const [orders, setOrders] = useState(false)
    const [booking, setBooking] = useState(false)

    useEffect(() => {
        if (getorders) {
            const res = getorders.filter(ele => ele.uid === currentUser?.uid)
            setOrders(res)
        }
    }, [getorders])
    useEffect(() => {
        if (getbooking) {
            const res = getbooking.filter(ele => ele.uid === currentUser?.uid)
            setBooking(res)
        }
    }, [getbooking])

    console.log('booking', booking);
    const auth = getAuth();
    const user = auth.currentUser;
    const logouthandler = () => {
        setLoading(true)
        signOut(auth).then(() => {
            navigate("/");
            toast.success("logout succeessful...")
            setLoading(false)
        }).catch((error) => {
            toast.error(error.message)
            setLoading(false)
        });
    }
    const deleteaccount = () => {
        setLoading(true)
        user.delete().then(async () => {
            try {
                const usersQuery = query(
                    collection(db, "users"),
                    where("uid", "in", [currentUser?.uid]),
                );
                const usersSnapshot = await getDocs(usersQuery);
                const deleteUser = usersSnapshot.docs.map((doc) =>
                    deleteDoc(doc.ref)
                );
                await Promise.all(deleteUser);

                const chatsQuerySender = query(
                    collection(db, "chats"),
                    where("senderId", "in", [currentUser?.uid])
                );
                const chatsSnapshotSender = await getDocs(chatsQuerySender);
                const deleteChatsSender = chatsSnapshotSender.docs.map((doc) =>
                    deleteDoc(doc.ref)
                );
                await Promise.all(deleteChatsSender);

                const chatsQueryReceiver = query(
                    collection(db, "chats"),
                    where("receiverId", "in", [currentUser?.uid])
                );
                const chatsSnapshotReceiver = await getDocs(chatsQueryReceiver);
                const deleteChatsReceiver = chatsSnapshotReceiver.docs.map((doc) =>
                    deleteDoc(doc.ref)
                );
                await Promise.all(deleteChatsReceiver)

                orders.map(async (ele) => {
                    await fetch(`https://lava-11a9b-default-rtdb.firebaseio.com/orders/${ele.id}.json`, {
                        method: "DELETE",
                    })
                    dispatch(getorders())
                })

                booking.map(async (ele) => {
                    await fetch(`https://lava-11a9b-default-rtdb.firebaseio.com/booking/${ele.id}.json`, {
                        method: "DELETE",
                    })
                    dispatch(getbooking())
                })
                toast.success("delete accout succeessful...")
                setLoading(false)
            } catch (error) {
                toast.error("Error clearing messages:", error.message);
                setLoading(false)
            }
        });
    }
    const activelink = ({ isActive }) => (isActive ? `active` : `links`)
    const activeside = ({ isActive }) => (isActive ? setActiveside(true) : setActiveside(false))
    return (
        <>
            {loading ? <Loader />
                : <div className='nav'>
                    <div className='user'>
                        {currentUser?.photoURL ?
                            <img src={currentUser?.photoURL} className='icon inline-block' width={60} />
                            :
                            <FaUserCircle className='icon inline-block' size={60} color="#fff" />
                        }
                        {/* <img src={currentUser?.photoURL} alt="" /> */}
                        <h4>{currentUser?.displayName}</h4>
                    </div>
                    <div className='listcontainer'>
                        <ul className='list'>
                            <li>
                                <NavLink className={activelink} to='/profile/orders'>
                                    history
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={activelink} to='/profile/security'>
                                    security
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={activelink} to='/'>
                                    notification
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={activeside} to='/profile/chat'>
                                    chat
                                </NavLink>
                            </li>
                            <li>
                                <button onClick={logouthandler}>Logout</button>
                            </li>
                            <li>
                                <button onClick={deleteaccount}>delete accout</button>
                            </li>
                        </ul>
                    </div>
                </div>

            }

        </>
    )
}

export default Profilenav