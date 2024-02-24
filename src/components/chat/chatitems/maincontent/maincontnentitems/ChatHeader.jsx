import React, { useEffect, useState } from 'react'
import { BsTelephone, BsCameraVideo } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'
import { db } from '../../../../../firebase/config';
import { collectionGroup, deleteDoc, getDocs, query, where } from 'firebase/firestore';
const ChatHeader = ({ selectedUser, currentUser }) => {
    const [toggleMore, setToggleMore] = useState(false);
    const handleClearMessages = async () => {
        try {
            const messagesQuery = query(
                collectionGroup(db, "chats"),
                where("senderId", "in", [selectedUser?.uid, currentUser?.uid]),
                where("receiverId", "in", [selectedUser?.uid, currentUser?.uid])
            );
            const messagesSnapshot = await getDocs(messagesQuery);
            const deletePromises = messagesSnapshot.docs.map((doc) =>
                deleteDoc(doc.ref)
            );
            await Promise.all(deletePromises);
            setToggleMore(false);
            // localStorage.removeItem('chats')
        } catch (error) {
            console.error("Error clearing messages:", error);
        }
    };
    return (
        <>
            {/* <div>{currentUser.username}</div> */}
            <div className="h-16 flex py-2 px-6 justify-between items-center bg-slate-100   border-b dark:border-stone-700">
                <div className="flex items-center gap-3">
                    {selectedUser?.photoURL ? (
                        <img className='w-12 h-12 rounded-full' src={selectedUser?.photoURL} />
                    ) : (
                        <p className='bg-slate-400 p-4 h-8 w-8 grid place-content-center rounded-full'>{selectedUser?.displayName?.[0]}</p>
                    )}
                    <h4 className="font-semibold" >{selectedUser?.displayName}</h4>
                </div>
                <div className="flex items-center gap-8">
                    <BsTelephone size={25} />
                    <BsCameraVideo size={25} />
                    <div>
                        <div
                            className={`cursor-pointer p-2 ${toggleMore ? "bg-slate-200  " : ""
                                } rounded-full`}
                            onClick={() => setToggleMore(!toggleMore)}
                        >
                            <FiMoreHorizontal size={25} />
                        </div>
                        {toggleMore && (
                            <div className="absolute top-14 right-4 w-48 bg-white  py-2 rounded shadow border z-10">
                                <div
                                    className="cursor-pointer hover:bg-slate-100  py-2 px-5 text-slate-700  flex gap-2 items-center"
                                    onClick={handleClearMessages}
                                >
                                    Clear messages
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatHeader