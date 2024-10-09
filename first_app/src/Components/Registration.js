import React, { Component } from 'react'

export class Registration extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      c_password: '',
      phone: '',
      errors:{
        name: '',
        email: '',
        password: '',
        c_password: '',
        phone: '',
      }
    };
  }
  handleChange = (event)=>{
    const{name,value} = event.target;
    this.setState({[name]:value})
  };
  formValidation = () => {
    const{name, email, password, c_password, phone} = this.state
    let errors = {}
    let is_valid = true;
    if(!name.trim()){
      errors.name = "Username is required"
      is_valid = false
    }
    const emailPatt =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email){
      errors.email = "email is required"
      is_valid = false
    }
    else if(!emailPatt.test(email)){
      errors.email = "email is invalid"
      is_valid = false
    }
    if(!password){
      errors.password = "password is required"
      is_valid = false
    }
    else if(password.length<6){
      errors.password = "password length must be 6"
      is_valid = false
    }
    if(!c_password){
      errors.c_password = "password is required"
      is_valid = false
    }
    else if(password !== c_password){
      errors.c_password = "password does not matched"
      is_valid = false
    }
    const numPatt = /^\d{10}$/
    if(!phone){
      errors.phone = "number is required"
      is_valid = false
    }
    else if(!numPatt.test(phone)){
      errors.phone = "phone number is invalid"
      is_valid = false
    }
    this.setState({errors})
    return is_valid
  }
  handleSubmit = (event)=>{
    event.preventDefault();
    if(this.formValidation()){
      alert("Registration successful . . .")
      console.log(this.data)

    this.setState({
      name: '',
      email: '',
      password: '',
      c_password: '',
      phone: '',
      errors:{}

    })
    } 
  }
  render() {
    let {name, email, password, c_password, phone, errors} = this.state
    return (
        <form onSubmit={this.handleSubmit}>
        <h1>Registration Form</h1>
          <div>
            <label>Enter name</label>
            <input onChange={this.handleChange} type='text' name='name' value={name} required/>
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
            </div>
          <div>
            <label>Enter email</label>
            <input onChange={this.handleChange} type='text' name='email' value={email} required></input>
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            </div>
          <div>
            <label>Enter password</label>
            <input onChange={this.handleChange} type='password' name='password' value={password} required></input>
            {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
            </div>
          <div>
            <label>Enter confirm_password</label>
            <input onChange={this.handleChange} type='password' name='c_password' value={c_password} required></input>
            {errors.c_password && <div style={{ color: 'red' }}>{errors.c_password}</div>}
          </div>
          <div>
            <label>Enter phone_number</label>
            <input onChange={this.handleChange} type='number' name='phone' value={phone} required></input>
            {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
          </div>
          <button type='submit'>Submit</button>
        </form>
    )
  }
}

export default Registration
