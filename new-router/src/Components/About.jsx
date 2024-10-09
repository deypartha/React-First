import React from 'react'
import './About.css'
import { useState } from 'react'
const About = () => {
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
      <div className='main' style={Mystyle}>
            <div style={Mystyle}>
                <div className='img'>
                    <img src='https://Katani-dhaba.com/assets/rest_51/img/breadcrumb.jpg' height='100%' width='100%'></img>
                    <div className='centered'><h1>About Us</h1></div>
                </div>
                <div id="btn">
                <button className='btn btn-primary'>Login</button>
                <button className='btn btn-primary' onClick={click}>{btnText}</button>
            </div>
            <div>
                <h1>Who We Are ?</h1>
                <p>We are the best quality and service restaurant.</p>
                    <div className='mid'>
                      <div><img src='https://katani-dhaba.com/assets/rest_51/img/about.jpg' className='img1'></img></div>
                      <div><p>DhabaPoint Dhaba is one of the oldest places in the city & the legendary taste of our specially prepared
                         kadai paneer still rules the town. We offer Multiple vegetarian Options. We heartily welcome you to come 
                         unwind, socialize and share good times with your family & friends at katani Dhaba or order online and
                          enjoy delicous food with comfort of home.katani Dhaba restaurant serves freshly prepared authentic Dishes
                           and we believe that Authentic Indian Cuisine is all about a balance between sweet, sour, pungent and spicy
                            food. We welcome you to experience the taste of katani Dhaba and hope that you would never forget the taste of our authentic
                         mouth-watering dishes and the overall experience at our restaurant.</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;
