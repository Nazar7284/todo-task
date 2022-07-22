import React from 'react';
import TodoBox from './TodoBox';

function PostList({ posts, remove }) {
    return (
        <div className='post-list'>
            <h2 className='post-list-h2'>In progress</h2>
            <div>
                {posts.map((post, index) =>
                    <TodoBox remove={remove} post={post} number={index + 1} key={post.id} />
                )}
            </div>
        </div>
    );
}

export default PostList;