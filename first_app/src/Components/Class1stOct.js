import React, { Component } from 'react'
import {setState} from 'react'
export class Class1stOct extends Component {
    constructor(){
        super();
        this.state = {
            message : "Welcome React"
        }
    }
    click(){
        this.setState({
            message: "Thanks for subscribing . . ."
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.click()}>Subscribe Now</button>
      </div>
    )
  }
}

export default Class1stOct
