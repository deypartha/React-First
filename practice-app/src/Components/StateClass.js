import React, { Component } from 'react'

export class StateClass extends Component {
    constructor(){
        super();
        this.state = {
            message : "Please Subscribe This !"
        }
    }
    click(){
        this.setState({
            message: "Thanks for subscription . . ."
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.click()}>Subscribe</button>
      </div>
    )
  }
}

export default StateClass
