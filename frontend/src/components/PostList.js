import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PostList.css';

function PostList({ onSelectPost }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error('There was an error fetching the posts!', error));
    }, []);

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id} onClick={() => onSelectPost(post.id)}>
                        <h3>{post.title}</h3>
                        <p>{post.content.substring(0, 100)}...</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;
