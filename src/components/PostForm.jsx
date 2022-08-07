import React, { useState } from 'react';

function PostForm({ create }) {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        if (post.title !== '' || post.body !== '') {
            const newPost = {
                ...post, id: Date.now()
            }
            create(newPost);
            setPost({ title: '', body: '' });
        } else {
            alert('Write smt')
        }

    }

    const onKeyPressed = (e) => {
        if (e.key === 'Enter') {
            addNewPost(e);
        }
    }

    return (
        <div>
            <div className='input-box'>
                <input
                    className='input-add-task'
                    type="text"
                    value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    placeholder='Name of the task'
                    onKeyDown={onKeyPressed} />

                <input
                    className='input-add-task'
                    type="text"
                    value={post.body}
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    placeholder='Description of the task'
                    onKeyDown={onKeyPressed}
                />

                <button className='btn-add-task' onClick={addNewPost}>Submit</button>
            </div>
        </div >
    );
}

export default PostForm;