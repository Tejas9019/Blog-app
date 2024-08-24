import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';

function App() {
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const handlePostAdded = () => {
        setRefresh(!refresh);
    };

    return (
        <div className="App">
            <Header />
            <main>
                <PostForm onPostAdded={handlePostAdded} />
                <PostList onSelectPost={setSelectedPostId} key={refresh} />
                <PostDetail postId={selectedPostId} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
