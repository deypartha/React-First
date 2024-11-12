import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Project from './Component/Project';
import Menu from './Component/Menu';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import Registration from './Component/Registration';
// import './App.css';
function App() {
    // const [darkMode, setDarkMode] = useState(false);
    // const toggleDarkmode=()=>{
    //     setDarkMode(prevMode=>!prevMode)
    // }
    return (
        <div>
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Project />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/About" element={<About />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Registration" element={<Registration></Registration>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
