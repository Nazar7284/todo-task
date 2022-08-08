import React from 'react';

function UserInfo({ visible, setVisible }) {
    const user = { name: 'Nazar', email: 'nazar7284n@gmail.com', imageUrl: 'https://lh3.googleusercontent.com/a-/AFdZucrO4xl-bfb4ebBX6UZ41G7ysuYRJYT_kIQt_0LHIg=s96-c' }

    return (
        < div className='user-info' >
            <div className='user'>
                <div className='user-icon'><img src={user.imageUrl} alt="" /></div>
                <h2>{user.name}</h2>
                <h3>{user.email}</h3>
                <button className='create-task-btn' onClick={() => setVisible(true)}>Create New Task</button>
            </div>

        </div >
    );
}

export default UserInfo;