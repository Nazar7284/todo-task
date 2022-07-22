import React from 'react';

function TodoBox(item) {
    return (
        <div className='box-task'>
            <div className=''>
                <div className='todo-box'>
                    <h3>{item.number} <strong>{item.post.title}</strong></h3>
                </div>
                <p>{item.post.body}</p>
            </div>
            <button className='btn-task-done' onClick={() => item.remove(item.post)}>
                <strong>Done</strong>
            </button>
        </div>
    );
}

export default TodoBox;