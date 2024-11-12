import React, { useState } from 'react';
import './Registration.css';
import { NavLink } from 'react-router-dom';
import Login from './Login';
function Registration () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    c_password: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    c_password: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, password, c_password, phone } = formData;
    const newErrors = {};
    let isValid = true;

    // Name validation
    if (!name) {
      newErrors.name = 'Username is required';
      isValid = false;

    }

    // Email validation
    const emailPatt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailPatt.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password length must be at least 6 characters';
      isValid = false;
    }

    if (!c_password) {
      newErrors.c_password = 'Confirm password is required';
      isValid = false;
    } else if (password !== c_password) {
      newErrors.c_password = 'Passwords do not match';
      isValid = false;
    }

    const numPatt = /^\d{10}$/;
    if (!phone) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!numPatt.test(phone)) {
      newErrors.phone = 'Phone number is invalid';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { name, email, password, phone } = formData;
      const user = { name, email, password, phone };

      fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          alert('Registration successful!');
          setFormData({
            name: '',
            email: '',
            password: '',
            c_password: '',
            phone: '',
          });
          setErrors({});
          window.location.href = 'login.html';
        })
        .catch((error) => {
          console.error('ERROR:', error);
          alert('Registration failed.');
        });
    }
  };
  return (
    <div className='body'>
      
      <video autoPlay loop muted plays-inline>
        <source src="./image2/pageLogin.mp4" type="video/mp4" />
      </video>
      <form onSubmit={handleSubmit} className='formFull'>
        <div className='formDiv'>
        <h1>Registration Form</h1>


              <label htmlFor="Name">Username: </label>
              <input
                type="text"
                id="nameID"
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className='errors' id="nameId" style={{ color: 'red' }}>{errors.name}</div>
              <label htmlFor="Name">Email: </label>
              <input
                type="email"
                id="emailID"
                value={formData.email}
                onChange={handleInputChange}
              />
              <div className='errors' id="emailID" style={{ color: 'red' }}>{errors.email}</div>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className='errors' id="perror" style={{ color: 'red' }}>{errors.password}</div>
              <label htmlFor="name">Confirm Password: </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className='errors' id="Uerror" style={{ color: 'red' }}>{errors.name}</div>
              <label htmlFor="phone">Mobile: </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <div className='errors' id="Perror" style={{ color: 'red' }}>{errors.password}</div>
          <button type="submit">Register</button>
        </div>
        <div className='Add'><p>Already have an account! <NavLink to="/Login">Login Here!</NavLink></p></div>
      </form>
    </div>
  );
};

export default Registration;
