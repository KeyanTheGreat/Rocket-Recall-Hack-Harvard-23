import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Startup from './pages/Startup'
import Login from './pages/Login'
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route path="login" element={<Login />}/>
      <Route path="/" element={<Startup />}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
