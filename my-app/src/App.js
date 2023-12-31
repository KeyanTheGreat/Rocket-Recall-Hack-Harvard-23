import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import StartGame from "./pages/StartGame";
import useToken from "./useToken";
import SageStart from "./pages/SageStart";
import CardManager from "./pages/CardManager";
import SequenceMemory from "./pages/SequenceMemory";
import SendEmail from "./pages/SendEmail";
import BackwardWords from "./pages/BackwardWords";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
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
          <Route path="/" element={<StartGame />}></Route>
          <Route path="SageStart" element={<SageStart />}></Route>
          <Route path="SageStart/CardManager" element={<CardManager />}></Route>
          <Route path="SageStart/BackwardWords" element={<BackwardWords />}></Route>
          <Route
            path="SageStart/SequenceMemory"
            element={<SequenceMemory />}
          ></Route>
          <Route
            path="SageStart/SequenceMemory/SendEmail"
            element={<SendEmail />}
          ></Route>
          <Route
            path="SageStart/CardManager/SendEmail"
            element={<SendEmail />}
          ></Route>
          <Route
            path="SageStart/BackwardWords/SendEmail"
            element={<SendEmail />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
