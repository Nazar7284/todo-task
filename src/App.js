import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Task from './pages/Task';
import About from './pages/About';
import Login from './pages/Login';
import Error from './pages/Error';
import './styles/App.css'


function App() {
  const [isUserSignedIN, setIsUserSignIn] = useState(true);

  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     return setIsUserSignIn(true)
  //   }
  //   setIsUserSignIn(true)
  // });


  if (isUserSignedIN === true) {
    console.log('user is login')
    return (
      <Routes>
        <Route path='/' element={<Task />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    );
  } else {
    console.log('user isn`t login')
    return (
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    );
  }

}

export default App;