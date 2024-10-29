import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <p>Posts: {posts.length}</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 '>
                {
                    posts.map(post => <Post key={posts.id} post={post} ></Post>)
                }
            </div>

        </div>
    );
};

export default Posts;