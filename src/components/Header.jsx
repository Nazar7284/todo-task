import React from 'react';
import { Link } from 'react-router-dom'

const Header = ({ reload, setVisible }) => {

    return (
        <div className='header'>
            <div className='head'>
                <h1 onClick={reload}>What i Have  to f#*$king do</h1>
                <div className='head-link'>
                    <Link to='/' className='header-btn'><strong>Task</strong></Link>
                    <Link to='/login' className='header-btn'><strong>Login</strong></Link>
                    <Link to='/about' className='header-btn'><strong>About</strong></Link>
                </div>
                <div>
                    <button className='header-btn' onClick={() => setVisible(true)}>
                        <strong>Create new task</strong>
                    </button>
                </div>
            </div>
            <hr className='head-line' />
        </div >
    );
};

export default Header;