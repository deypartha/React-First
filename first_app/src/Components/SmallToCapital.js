import React, { Component } from 'react'

export class SmallToCapital extends Component {
    constructor(){
        super();
        this.state = {
            change: 0
        }
        
    }
  render() {
    return (
      <div>
        <p>After Changed: {this.state.change}</p>
        <button onClick={()=>this.change()}></button>
      </div>
    )
  }
}

export default SmallToCapital
