import React, { useState } from 'react';
import axios from 'axios';
import './PostForm.css'; 

function PostForm({ onPostAdded }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/posts', {
            title,
            content,
            author
        }).then(response => {
            onPostAdded();
            setTitle('');
            setContent('');
            setAuthor('');
        }).catch(error => console.error('There was an error creating the post!', error));
    };

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <h2>Create a New Post</h2>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Content</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
            </div>
            <div>
                <label>Author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default PostForm;
