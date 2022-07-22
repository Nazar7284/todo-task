import React, { useState } from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import UserInfo from '../components/UserInfo';
import '../styles/App.css'

function Task() {

    const [posts, setPosts] = useState([
        {
            id: 1, title: 'bla', body: 'bla bla'
        },
        {
            id: 2, title: 'blq', body: 'blq blq'
        }
    ]);

    const [visible, setVisible] = useState(false);

    const createNewPost = (newPost) => {
        setPosts([...posts, newPost])
        setVisible(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const reloadPage = () => {
        window.location.reload();
    }

    const class_box = ['box-of-task'];
    class_box.push('center');
    return (
        <div>
            <Header reload={reloadPage} setVisible={setVisible} />
            <Modal visible={visible} setVisible={setVisible}>
                <PostForm create={createNewPost} />
            </Modal>
            <div className='app'>
                <UserInfo />
                {posts.length
                    ?
                    <PostList remove={removePost} posts={posts} />
                    :
                    <h1 className='noTask-h1'>No task, add something to do</h1>
                }
            </div>
        </div >
    );
}

export default Task;