import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostDetail({ postId }) {
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (postId) {
            axios.get(`http://localhost:5000/posts/${postId}`)
                .then(response => setPost(response.data))
                .catch(error => console.error('There was an error fetching the post!', error));
        }
    }, [postId]);

    if (!post) return <div>Select a post to view details</div>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p><strong>Author: </strong>{post.author}</p>
        </div>
    );
}

export default PostDetail;
