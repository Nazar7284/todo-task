import React from 'react';
import { Link } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";

const Header = ({ reload }) => {
    const auth = getAuth();
    function SignOut() {
        signOut(auth).then(() => {
            console.log('user is sign out')
        }).catch((error) => {
            console.log('error is: ' + error)
        });
    }

    return (
        <div className='header'>
            <div className='head'>
                <h1 onClick={reload}>What i Have  to f#*$king do</h1>
                <div className='head-link'>
                    <Link to='/' className='header-btn'><strong>Task</strong></Link>
                    <Link to='/about' className='header-btn'><strong>About</strong></Link>
                </div>
                <div>
                    <button className='header-btn' onClick={SignOut}>
                        <strong>Sign Out</strong>
                    </button>
                </div>
            </div>
            <hr className='head-line' />
        </div >
    );
};

export default Header;