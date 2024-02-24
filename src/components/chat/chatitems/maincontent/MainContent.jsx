import React, { useContext } from 'react'
import ChatHeader from './maincontnentitems/ChatHeader';
import Chats from './maincontnentitems/Chats';
import Input from './maincontnentitems/Input';
import { useSelector } from 'react-redux';
import { authuser } from '../../../../redux/slice/authslice';
import { AuthContext } from '../../../../context/AuthContext';

const MainContent = ({ selectedUser }) => {

    // let admin_user = localStorage.getItem("admin")
    // let account_user = localStorage.getItem("account")
    // let currentUser;
    // // let currentUser = JSON.parse(admin_user)

    // if (admin_user) {
    //     currentUser = JSON.parse(admin_user)
    // }
    // else if (account_user) {
    //     currentUser = JSON.parse(account_user)
    // }
    // else {
    // const currentUser = useSelector(authuser);
    const { currentUser } = useContext(AuthContext)


    // }
    // console.log(selectedUser);
    return (
        <>
            {/* <div>MainContent</div> */}
            {selectedUser ? (
                <div className="relative">
                    {/* <p>{selectedUser.username}</p> */}
                    <ChatHeader currentUser={currentUser} selectedUser={selectedUser} />
                    {/* <p>Input</p> */}
                    <Chats currentUser={currentUser} selectedUser={selectedUser} />
                    <Input currentUser={currentUser} selectedUser={selectedUser} />
                    {/* <ChatPartnerHeader user={selectedUser} />
      <Chats selectedUser={selectedUser} />
      <Input selectedUser={selectedUser} /> */}
                </div>
            ) : (
                <div className="bg-slate-200  h-full flex justify-center items-center text-center flex-col">
                    {/* <Logo /> */}
                    <p className="mt-8">Click on the user to start chatting...</p>
                </div>
            )}
        </>)
}

export default MainContent