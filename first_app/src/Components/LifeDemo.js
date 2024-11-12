import React, { Component } from 'react'
import ComponentUnmount from './ComponentUnmount'
export class LifeDemo extends Component {
    constructor(){
        super();
        this.state = {
            showCamp : true
        }
        this.handleCheck = this.handleCheck.bind(this)
    }
    handleCheck(){
        this.setState({
            showCamp: false
        })
    }
  render() {
    return (
      <div>
        {this.state.showCamp && <ComponentUnmount></ComponentUnmount>}
        <button onClick={this.handleCheck}>Click</button>
      </div>
    )
  }
}

export default LifeDemo
