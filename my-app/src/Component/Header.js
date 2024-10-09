import React, { useState } from 'react'
import './Header.css'
function Header(){
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
            
            <div className="container-fluid"  style={Mystyle}>
                <nav className="navbar navbar-expand-md bg" style={Mystyle}>
                <div className="ddd1" style={Mystyle}><a className="navbar-brand" href="#"><img src="https://i.pinimg.com/originals/85/f0/63/85f063360f15625e86fe4d64ad00535c.png" alt="" height="60px" width="70px"></img></a><h2 className="nav-h2">𝕯𝖍𝖆𝖇𝖆𝕻𝖔𝖎𝖓𝖙</h2></div>
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
                        <a href="About" className="nav-link mx-3 fs-5 text" style={Mystyle}>About Us</a>
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

            <div  style={Mystyle}>
            <div className='img1'>
                {/* <h1 className='h1'>Welcome  to  DhabaPoint </h1> */}
                <img src='https://i.ytimg.com/vi/etOScxvsw2g/maxresdefault.jpg' height='500px' width='100%'></img>
            </div>
            <div className='Box-main'>
                <div className='box1'>
                    <img src='https://biztory-wordpress-img.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2020/10/20160536/payment-term-featured-image.jpg' height='200px' width='200px'></img>
                    <h3>Easy payment</h3>
                    <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                </div>
                <div className='box1'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KpdHhlJj2-lA34sEolHPFLXRHvhqangBUw&s' height='200px' width='200px'></img>
                    <h3>Quick Delivary</h3>
                    <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                </div>
                <div className='box1'>
                    <img src='https://www.foodiv.com/wp-content/uploads/2022/07/Best-Online-Food-Ordering-System.png' height='200px' width='200px'></img>
                    <h3>Order Online</h3>
                    <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                </div>
            </div>

            <div className='main-two'  style={Mystyle}>
                <div className='boxx1'>
                    <h1>Enjoy With Food</h1>
                    <p>Did you know the potato was the first fruit planted in zero gravity? Food is both a basic human requirement and the fuel for sustenance. It’s critical that kids and the younger generation recognize the significance of food in our lives. Acknowledging its significance will not only aid in appreciating its worth but also help in decreasing food waste.  In order to help schoolchildren comprehend the value of food and develop healthy eating habits for a quality life, in this blog we will be providing an essay on food in 100, 200, and 300 words. Continue reading to know more.</p>
                    <button>Read More</button>
                </div>
                <div className='boxx2'>
                    <img src='https://recipes.net/wp-content/uploads/2024/01/how-to-eat-at-a-fast-food-restaurant-1706070902.jpg' height='400px' width='600px'></img>
                </div>
            </div>
        </div>
            <div className='fff'>
            <div className='footer'>
                <div className='footer1'>
                    <div><h1>DhabaPoint</h1></div>
                </div>
                <div className='footer2'>
                    <h1>Address</h1>
                    <p>96 East central park road,</p>
                    <p> New York, USA </p>
                </div>
                <div className='footer2'>
                    <h1>Details</h1>
                    <p>Menu</p>
                    <p>Reservation</p>
                    <p>Timing</p>
                </div>
                <div className='footer2'>
                    <h1>Contact Us</h1>
                    <p>+198-0125754</p>
                    <p>dhabapoint123@gmail.com</p>
                </div>
            </div>
            <div className='Footer2'>
                <div><p>&copy; Copyright 2024 powered by DhabaPoint</p></div>
                <div className='icons'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                    </svg>
                </div>
            </div>
            </div> 
        </div>
        
    )
}
export default Header;