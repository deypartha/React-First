import React from 'react'
// import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
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
              <a
                href="#"
                className="nav-link mx-3 fs-5 text"
                style={{ background: 'brown', color: '#fff' }}
                active=""
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="z.html" className="nav-link mx-3 fs-5 text">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a href="p.about.html" className="nav-link mx-3 fs-5 text">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="login.html" className="nav-link mx-3 fs-5 text">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Navbar
