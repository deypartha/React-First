import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import About from './About';
import Project from './Project';
import Login from './Login';
import Registration from './Registration';
import Menu from './Menu';
import './Navbar.css';
function Navbar() {
  return (
    <div id='Nav'>
      <div className="container-fluid">
      <nav className="navbar navbar-expand-md bg">
        <div className="ddd1">
          <a className="navbar-brand" href="#">
            <img src="./image2/foodd.png" alt="" height="60px" width="70px" />
          </a>
          <h2 className="nav-h2">𝕯𝖍𝖆𝖇𝖆𝕻𝖔𝖎𝖓𝖙</h2>
        </div>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#btn"
        >
          <i className="bx bx-menu menu" />
        </button>
        <div className="collapse navbar-collapse" id="btn">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <NavLink exact to="" className="nav-link mx-3 fs-5 text" activeClassName="active-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Menu" className="nav-link mx-3 fs-5 text">Menu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About" className="nav-link mx-3 fs-5 text">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Login"
                className="nav-link mx-3 fs-5 text"
              >
                Login
              </NavLink>
            </li>
            <li><NavLink
                to="/Registration"
                className="nav-link mx-3 fs-5 text"
              >
                Registration
              </NavLink>
              </li>
          </ul>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Navbar

