import React, { useEffect, useRef, useState } from 'react'
import { format } from 'date-fns';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';
const Chats = ({ selectedUser, currentUser }) => {
    const [messages, setMessages] = useState([]);
    const [showimg, setShowimg] = useState('');
    const [selectedImg, setSelectedImg] = useState('');
    const chatRef = useRef(null);

    useEffect(() => {
        const chatsQuery = query(
            collection(db, "chats"),
            where("senderId", "in", [selectedUser.uid, currentUser?.uid]),
            where("receiverId", "in", [selectedUser.uid, currentUser?.uid]),
            orderBy("timestamp")
        );
        const unsubscribe = onSnapshot(chatsQuery, (snapshot) => {
            const messages = snapshot.docs.map((doc) => doc.data());
            setMessages(messages);
        });
        return () => unsubscribe();
    }, [selectedUser, currentUser?.uid]);
    // useEffect(() => {
    //     if (messagess) {
    //         setMessages(messagess)
    //     } else {
    //         setMessages([])
    //     }

    // }, [messages])
    // useEffect(() => {
    //     scrollToBottom();
    // }, [messages]);
    // const scrollToBottom = () => {
    //     chatRef.current?.scrollIntoView({ behavoir: "smooth" });
    // };
    const handelImageClick = (img) => {
        setShowimg(true)
        setSelectedImg(img)
    }

    return (
        <>
            {/* <div>Chats</div> */}
            <div className="chats p-4 h-[calc(100vh-128px)] overflow-y-auto bg-slate-200 ">
                {messages &&
                    messages.map((message) => {
                        if (message.senderId === currentUser?.uid) {
                            console.log(message.senderId);
                        }
                        return (
                            <div
                                className={`relative flex ${message.senderId == currentUser.uid
                                    ? "justify-end"
                                    : "justify-start"
                                    }`}
                                // key={index}
                                key={message.timestamp}
                            >
                                {message.imageUrl ? (
                                    <div
                                        className={`shadow mb-1 p-1 px-3 rounded-lg max-w-[80%] lg:max-w-[60%] ${message.senderId == currentUser.uid
                                            ? "bg-emerald-500 text-white rounded-tr-none"
                                            : "bg-white text-black rounded-tl-none"
                                            }`}
                                    >
                                        <img
                                            src={message.imageUrl}
                                            alt="Chat Image"
                                            className="max-w-[200px] mx-auto mb-2 rounded-md"
                                            onClick={() => handelImageClick(message.imageUrl)}
                                        />
                                        {
                                            showimg &&
                                            (
                                                <div className="fixed flex items-center justify-center top-0 left-0 bg-slate-900 opacity-95 w-screen h-full z-50">
                                                    <p className="absolute z-50 text-white top-0 left-0 font-bold cursor-pointer"
                                                        style={{ fontSize: "3rem" }}
                                                        onClick={() => setShowimg(false)}
                                                    >X</p>
                                                    <img
                                                        src={selectedImg}
                                                        alt="Chat Image"
                                                        className="w-2/3 h-3/4 rounded-3xl"
                                                        style={{ border: "5px solid black" }}
                                                    />
                                                </div>
                                            )
                                        }
                                        <div className="flex justify-between items-end px-1">
                                            {message.receiverId == selectedUser.uid &&
                                                <p className="py-1 px-2">{message.message}</p>
                                            }
                                            {message.timestamp && (
                                                <p
                                                    className={`text-[11px] ${message.senderId == currentUser.uid
                                                        ? "text-slate-200"
                                                        : "text-black"
                                                        }`}
                                                >
                                                    {format(message.timestamp.toDate(), "HH:mm")}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className={`flex items-end shadow mb-1 py-1 px-2 rounded-lg max-w-[80%] lg:max-w-[60%] ${message.senderId == currentUser.uid
                                            ? "bg-emerald-500 text-white rounded-tr-none"
                                            : "bg-white text-black rounded-tl-none"
                                            }`}
                                    >
                                        <p className="py-1 px-2">{message.message}</p>
                                        {message.timestamp && (
                                            <p
                                                className={`text-[11px] ${message.senderId == currentUser.uid
                                                    ? "text-slate-200"
                                                    : "text-black"
                                                    }`}
                                            >
                                                {format(message.timestamp.toDate(), "HH:mm")}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })
                }
                <div ref={chatRef}></div>
            </div>
        </>
    )
}

export default Chats