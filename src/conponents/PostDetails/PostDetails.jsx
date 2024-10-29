import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    return (
        <div>
            <p>{id}</p>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;