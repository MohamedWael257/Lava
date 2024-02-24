import React, { useEffect, useState } from 'react'
import './Profile.css'
import Profilenav from './profilenav/Profilenav'
import { Route, Routes } from 'react-router-dom'
import OrdersPage from '../../pages/orderspage/OrdersPage'
import SecurityPage from '../../pages/securitypage/SecurityPage'
import ChatPage from '../../pages/chatpage/ChatPage'

const Profile = () => {
    const [activeside, setActiveside] = useState(false)
    return (
        <>
            {/* <div className='profile'> */}
            <div className={`${activeside ? 'active profile' : 'profile'}`} >
                <div className='navbar'>
                    {/* <div className={`${activeside ? 'navabr hidden' : 'navbar'}`}> */}
                    < Profilenav setActiveside={setActiveside} />
                </div>
                <div className='content'>
                    <Routes>
                        <Route path="orders" element={<OrdersPage />} />
                        <Route path="security" element={<SecurityPage />} />
                        {/* <Route path="profile" element={<ProfilePage />} /> */}
                        <Route path="chat" element={<ChatPage />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Profile