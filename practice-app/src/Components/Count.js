import React, { Component } from 'react'
import NewCounter from './NewCounter';

export class Count extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    inc(){
        this.setState({
            count: this.state.count+1
        })
    }
    dec(){
      this.setState({
        count: this.state.count-1
      })
    }
  render() {
    return (
      <div>
        <NewCounter count = {this.state.count}></NewCounter>
        <button onClick={()=>this.inc()}>Increment</button>
        <button onClick={()=>this.dec()}>Decrement</button>
      </div>
    )
  }
}

export default Count
