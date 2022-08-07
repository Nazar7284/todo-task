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

    const [visibleCreateTask, setVisibleCreateTask] = useState(false);

    const createNewPost = (newPost) => {
        setPosts([...posts, newPost])
        setVisibleCreateTask(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const reloadPage = () => {
        window.location.reload();
    }
    return (
        <div>
            <Header reload={reloadPage} />
            <Modal visible={visibleCreateTask} setVisible={setVisibleCreateTask}>
                <PostForm create={createNewPost} />
            </Modal>
            {/* <button onClick={() => setVisibleCreateTask(true)}>Create</button> */}
            <div className='app'>
                <UserInfo visible={visibleCreateTask} setVisible={setVisibleCreateTask} />
                {posts.length
                    ?
                    <PostList remove={removePost} posts={posts} />
                    :
                    <div className='noTask-h1'><h1>No task, add something to do</h1></div>
                }
            </div>
        </div >
    );
}


export default Task;