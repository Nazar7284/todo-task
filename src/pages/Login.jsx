import React from 'react';
import { signupWithGoogle } from "../firebase"

function Login() {
    const reloadPage = () => {
        window.location.reload()
    }
    return (
        <div className='login-page'>
            <div className='login-block'>
                <div><h1 onClick={reloadPage}>What i Have  to f#*$king do</h1></div>
                <div><button className='login-btn' onClick={signupWithGoogle}>Sign in with Google</button></div>
            </div>
        </div >
    );
}

export default Login;