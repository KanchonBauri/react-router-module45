import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className='border-2 p-2 m-2  flex flex-col items-center '>
            <p>Post of Id: {id} </p>
            <p>Title: {title}</p>
            <p>{body}</p>
            <Link to={`/post/${id}`} className='btn' >Show post Details</Link>
        </div>
    );
};

export default Post;