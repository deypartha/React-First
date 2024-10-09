import React, { Component } from 'react'

export class SquareClass extends Component {
    constructor(){
        super();
        this.state = {
            result: 5
        }
        
    }
    sqrt(){
        this.setState({
            result: (this.state.result+5)
        })
        console.log(this.state.result)
    }
  render() {
    return (
      <div>
        <h1>Square is:: {this.state.result}</h1>
        <button onClick={()=>this.sqrt()}>Square</button>
      </div>
    )
  }
}

export default SquareClass
