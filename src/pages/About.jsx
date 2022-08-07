import React, { useState } from 'react';
import Header from '../components/Header';
import UserInfo from '../components/UserInfo';

function About() {
    const [visible, setVisible] = useState(false);


    return (
        <div>
            <Header reload={window.location.reload} visible={visible} setVisible={setVisible} />
            <div className='app'>
                <UserInfo />
            </div>
        </div>
    );
}

export default About;