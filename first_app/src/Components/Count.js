import React, { Component } from 'react'

export class Count extends Component {
    constructor(){
        super();
        this.state= {
            count: 0
        }
    }
    inc(){
        this.setState({
            count:this.state.count+1
        });
    }
  render() {
    return (
      <div>
        <h1>Count:- {this.state.count} </h1>
        <button onClick={()=>this.inc()}>Increment Count</button>
      </div>
    )
  }
}

export default Count
