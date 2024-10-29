import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, username, email, adderss, id} = user;

    return (
        <div className='border-2 p-2 m-2  flex flex-col items-center ' >
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <Link class="btn btn-success" to={`/user/${id}`} >Show Details</Link>
        </div>
    );
};

export default User;