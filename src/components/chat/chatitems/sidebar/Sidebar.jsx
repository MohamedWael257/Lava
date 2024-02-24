import React, { useState } from 'react'
import CurrentUser from './sidebaritems/CurrentUser'
import Search from './sidebaritems/Search'
import Users from './sidebaritems/Users'

const Sidebar = ({ users, selectedUser, onUserClick }) => {

    const [searchKeyword, setSearchKeyword] = useState("");

    const sortedUsers = [...users].sort((a, b) => {
        return a.displayName.localeCompare(b.displayName);
    });

    const filteredUsers = sortedUsers.filter((user) =>
        user.displayName.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const handleUserClick = (user) => {
        onUserClick(user);
        setSearchKeyword("");
    };
    return (
        <>
            {/* <div>Sidebar</div> */}
            <div className='border-e h-full flex flex-col min-h-screen'>
                <CurrentUser />
                <Search
                    searchkeyword={searchKeyword}
                    onSearchChange={(value) => setSearchKeyword(value)}
                />
                <Users
                    users={filteredUsers}
                    onUserClick={handleUserClick}
                    selectedUser={selectedUser}
                />
            </div>
            {/* <hr style={{ height: '1rem' }} /> */}
        </>
    )
}

export default Sidebar