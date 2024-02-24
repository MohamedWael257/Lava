import React, { useContext } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { authuser } from '../../../../../redux/slice/authslice';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../../../../context/AuthContext';
const Users = ({ users, onUserClick, selectedUser }) => {
    // const currentUser = useSelector(authuser);
    const { currentUser } = useContext(AuthContext)
    const sortedUsers = [...users].sort((a, b) => {
        return a.displayName.localeCompare(b.displayName);
    });
    return (
        <div className="overflow-y-auto h-[calc(100vh-128px)]   p-2">
            {sortedUsers.map((user) => {
                // if (user.id !== currentUser?.id) {
                return (
                    <div
                        className={`${user.uid === selectedUser?.uid ? "bg-slate-200 " : ""
                            } flex items-center gap-2 p-3 cursor-pointer rounded-lg`}
                        key={user.uid}
                        onClick={() => onUserClick(user)}
                    >
                        {user.photoURL ? (
                            <img className='w-10 h-10 rounded-full' src={user.photoURL} />
                        ) : (
                            <FaRegUserCircle size={30} />
                            // <p>{user.username?.[0]}</p>
                        )}
                        <div>
                            <h4>{user.displayName}</h4>
                        </div>
                    </div>
                );
                // }
            })}
        </div>
    );
}

export default Users