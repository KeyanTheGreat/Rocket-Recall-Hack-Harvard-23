import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Startup from './pages/Startup'
import Login from './pages/Login'
import Signup from './pages/Signup'
import StartGame from './pages/StartGame'
import useToken from './useToken'
import SageStart from './pages/SageStart'

function App() {
    const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    // <div >
    //   <BrowserRouter>
    //   <Routes>
    //   <Route path="login" element={<Login />}/>
    //   <Route path="/" element={<Startup />}/>
    //   <Route path="signup" element={<Signup/>}/>
    //   <Route path="StartGame" element={<StartGame/>}/>
    //   </Routes>
    // </BrowserRouter>
    // </div> 

<div className="wrapper">
<BrowserRouter>
  <Routes>
    <Route path="StartGame" element={<StartGame/>}>
    </Route>
  </Routes>
</BrowserRouter>
</div>

  );
}

export default App;
