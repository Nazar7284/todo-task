import React, { useState } from 'react';
import Header from '../components/Header';
import UserInfo from '../components/UserInfo';

function Login() {
    const [visible, setVisible] = useState(false);
    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <div>
            <Header reload={reloadPage} visible={visible} setVisible={setVisible} />
            <div className='app'>
                <UserInfo />
            </div>
        </div>
    );
}

export default Login;