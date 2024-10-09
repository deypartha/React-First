import React, { Component } from 'react'

export class Login extends Component {
    constructor(){
        super();
        this.state = {
            user: '',
            pass: '',
            course: 'react',
            gender: ''
        }
        this.handleuser = this.handleuser.bind(this)
        this.handlepass = this.handlepass.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCourse = this.handleCourse.bind(this)
        this.handleGender = this.handleGender.bind(this)
    }
    handleuser = (event)=>{
        this.setState({
            user : event.target.value
        })
    }
    handlepass = (event)=>{
        this.setState({
            pass : event.target.value
        })
    }
    handleCourse = (event)=>{
        this.setState({
            course: event.target.value
        })
    }
    handleGender = (event)=>{
        this.setState({
            gender: event.target.value
        })
    }
    handleSubmit = ()=>{
        alert(`thanks for submitting ${this.state.user} you have selected ${this.state.course} and genger is ${this.state.gender}`)
    }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Enter name: </label>
                <input onChange={this.handleuser} type='text' name='user' value={this.state.user}></input>
            </div>
            <div>
                <label>Enter Password: </label>
                <input onChange={this.handlepass} type='password' name='pass' value={this.state.pass}></input>
            </div>
            <label>Choose a course</label>
            <select value={this.state.course} onChange={this.handleCourse}>
                <option value='react'>react</option>
                <option value='angular'>angular</option>
                <option value='vue'>vue</option>
            </select>
            <br/>
            <div>
                <label>Select gender: </label>
                <input type='radio' name='gender' value='male' checked={this.state.gender=='male'} onChange={this.handleGender}></input>Male
                <input type='radio' name='gender' value='female' checked={this.state.gender=='female'}  onChange={this.handleGender}></input>Female
            </div>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login
