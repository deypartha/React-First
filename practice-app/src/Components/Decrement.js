import React, { Component } from 'react'

export class Decrement extends Component {
    constructor(){
        super();
        this.state = {
            result: "0"
        }
    }
    dec(){
        this.setState({
            result: this.state.result-1
        })
        console.log(this.state.result)
    }
  render() {
    return (
      <div>
        <h1>Count: {this.state.result}</h1>
        <button onClick={()=>this.dec()}>DEC</button>
      </div>
    )
  }
}

export default Decrement
