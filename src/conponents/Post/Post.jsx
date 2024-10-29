import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post;

    const navigate = useNavigate();

    const handleClickDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className='border-2 p-2 m-2  flex flex-col items-center '>
            <p>Post of Id: {id} </p>
            <p>Title: {title}</p>
            <p>{body}</p>
            <div className='flex gap-5' >
                <Link to={`/post/${id}`} className='btn' >Show post Details</Link>
                <button className='btn' onClick={handleClickDetails} >Click to see details</button>
            </div>
        </div>
    );
};

export default Post;