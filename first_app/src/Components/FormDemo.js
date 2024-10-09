import React, { Component } from 'react'

export class FormDemo extends Component {
    constructor(){
        super();
        this.state = {
            user: '',
            comment: ''
        }
        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
        this.commentChange = this.commentChange.bind(this)
    }
    change = (event)=>{
        this.setState({
            user : event.target.value
        })
    }
    commentChange = (event)=>{
        this.setState({
            comment: event.target.value
        })
    }
    handleCourse = (event)=>{
        this.setState({
            course: event.target.value
        })
    }
    submit = ()=>{
        alert(`Hello ${this.state.user} your comment are ${this.state.comment}`)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
            <div>
                <label>Enter name: </label>
                <input onChange={this.change} type='text' name='user' value={this.state.user}></input>
            </div>
            <div>
                <label>Enter comment: </label>
                <textarea onChange={this.commentChange} type='text' name='comment' value={this.state.comment}></textarea>
            </div>
            <label>Choose a course</label>
            <select value={this.state.course} onChange={this.handleCourse}>
                <option value='react'>react</option>
                <option value='angular'>angular</option>
                <option value='vue'>vue</option>
            </select>
            <br></br>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default FormDemo
