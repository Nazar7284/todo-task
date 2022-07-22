import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Task from './pages/Task';
import About from './pages/About';
import Login from './pages/Login';
import Error from './pages/Error';
import './styles/App.css'

function App(props) {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Task />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;