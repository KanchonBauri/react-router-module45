import React from 'react';

const User = ({user}) => {
    const {name, username, email, adderss} = user;
    return (
        <div className='border-2 p-2 m-2' >
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    );
};

export default User;