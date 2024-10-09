import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Navbar = () => {
  const [Mystyle, setBack] = useState(
    {color: "#212121"}
)
const [btnText, setBtnText] = useState("Dark")
const click=()=>{
    if(Mystyle.color=='#212121'){
        setBack({
            color: '#fff',
            backgroundColor: '#212121',
        })
        setBtnText("Light")
    }else{
        setBack({
            color: '#212121',
            backgroundColor: '#fff',
        })
        setBtnText("Dark")
    }
}
  return (
    <div>
      <div >
        <div className='container-fluid'  style={Mystyle}>
        <div className="ddd1" style={Mystyle}><a className="navbar-brand" href="#"><img src="https://i.pinimg.com/originals/85/f0/63/85f063360f15625e86fe4d64ad00535c.png" alt="" height="60px" width="70px"></img></a><h2 className="nav-h2">𝕯𝖍𝖆𝖇𝖆𝕻𝖔𝖎𝖓𝖙</h2></div>
            <Link to='/'><li style={Mystyle}>Home</li></Link>
            <Link to='/login'><li style={Mystyle}>Login</li></Link>
            <Link to='/about'><li style={Mystyle}>About Us</li></Link>
            <Link to='/'><li style={Mystyle}>Support</li></Link>
            <div id="btn">
                <button className='btn btn-primary'>Login</button>
                <button className='btn btn-primary' onClick={click}>{btnText}</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
