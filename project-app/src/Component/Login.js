import React, { useState } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';
import Registration from './Registration';
const Login = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [errors, setErrors] = useState({ user: '', pass: '' });

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation flags and error messages
        const validationErrors = { user: '', pass: '' };
        let isValid = true;

        // Username validation (email pattern check)
        const userPatt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!user) {
            validationErrors.user = 'Username is required';
            isValid = false;
        } else if (!userPatt.test(user)) {
            validationErrors.user = 'Username is invalid';
            isValid = false;
        }
        if (!pass) {
            validationErrors.pass = 'Password is required';
            isValid = false;
        } else if (pass.length < 6) {
            validationErrors.pass = 'Password length must be at least 6 characters';
            isValid = false;
        }

        setErrors(validationErrors);

        if (isValid) {
            // Fetch users from JSON server
            fetch('http://localhost:3001/users')
                .then(response => response.json())
                .then(users => {
                    const foundUser = users.find(u => u.email === user && u.password === pass);
                    if (foundUser) {
                        alert('Login Successful . . .');
                        window.location.href = 'project.html';
                    } else {
                        alert('Invalid Username or Password. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred while trying to log in. Please try again later.');
                });
        }
    };

    return (
        <div className="body">
            <video autoPlay loop muted playsInline>
                <source src="./image2/pageLogin.mp4" type="video/mp4" />
            </video>
            <div className="login_form">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit} id="formDemo">
                    <label htmlFor="user">Username: </label>
                    <input
                        type="text"
                        name="email"
                        id="user"
                        placeholder="Enter your name"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <div id="Uerror" style={{ color: 'red' }}>{errors.user}</div>
                    <br />
                    <label htmlFor="pass">Password: </label>
                    <input
                        type="password"
                        name="password"
                        id="pass"
                        placeholder="Enter password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <div id="Perror" style={{ color: 'red' }}>{errors.pass}</div>
                    <br />
                    <div className="remember">
                        <div>
                            <input type="checkbox" name="remember" id="check" />
                            <label htmlFor="check">Remember Me</label>
                        </div>
                        <div>
                            <label htmlFor="">
                                <a id="linkMain" href="forgot.html">
                                    Forgot Password
                                </a>
                            </label>
                        </div>
                    </div>
                    <br />
                    <button id="btnID" type="submit">
                        Submit
                    </button>
                    <br />
                    <br />
                    <div className="acc">
                        <p>
                            Don’t have any account?{" "}
                            <NavLink to="/Registration">
                                Register Here
                            </NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
