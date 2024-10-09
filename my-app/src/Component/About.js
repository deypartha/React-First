import React from 'react';
import { useState } from 'react';
import './About.css';
import foodd from './foodd.png'
function About(){
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
    return(
        <div style={Mystyle}>
            <div>
                    <div className="container-fluid"  style={Mystyle}>
                    <nav className="navbar navbar-expand-md bg" style={Mystyle}>
                    <div className="ddd1" style={Mystyle}><a className="navbar-brand" href="#"><img src="foodd.png" alt="" height="60px" width="70px"></img></a><h2 className="nav-h2">𝕯𝖍𝖆𝖇𝖆𝕻𝖔𝖎𝖓𝖙</h2></div>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#btn">
                    <i className="bx bx-menu menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="btn">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link mx-3 fs-5 text"  style={Mystyle}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link mx-3 fs-5 text" style={Mystyle}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link mx-3 fs-5 text" style={Mystyle}>Menu</a>
                        </li>
                        <li className="nav-item">
                            <a href="About.js" className="nav-link mx-3 fs-5 text" style={Mystyle}>About Us</a>
                        </li>
                        <li className="nav-item">
                        <a href="login.html" className="nav-link mx-3 fs-5 text"><i className="bx bx-user-circle icon"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link mx-3 fs-5 text"><i className="bx bx-cart icon"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link mx-3 fs-5 text"><i className="bx bx-search-alt icon"></i></a>
                    </li>
                    </ul>
                    <div id="btn">
                        <button>Login</button>
                        <button onClick={click}>{btnText}</button>
                    </div>
                </div>
                </nav>
                </div>
            </div>
            <div style={Mystyle}>
                <div className='img'>
                    <img src='https://katani-dhaba.com/assets/rest_51/img/breadcrumb.jpg' height='100%' width='100%'></img>
                    <h1>About Us</h1>
                </div>
                <div className='text'>
                    <h1>Who We Are ?</h1>
                    <p>We are the best quality and service restaurant.</p>
                    <div>
                        <img src='https://katani-dhaba.com/assets/rest_51/img/about.jpg' height="300px" width="300px"></img>
                    <p>DhabaPoint Dhaba is one of the oldest places in the city & the legendary taste of our specially prepared kadai paneer still rules the town. We offer Multiple vegetarian Options. We heartily welcome you to come unwind, socialize and share good times with your family & friends at Katani Dhaba or order online and enjoy delicous food with comfort of home.Katani Dhaba restaurant serves freshly prepared authentic Dishes and we believe that Authentic Indian Cuisine is all about a balance between sweet, sour, pungent and spicy food. We welcome you to experience the taste of Katani Dhaba and hope that you would never forget the taste of our authentic mouth-watering dishes and the overall experience at our restaurant.</p>
                
                    </div>
                    </div>
                
            </div>
        </div>
    )
}
export default About;