import React, { Component } from 'react'

export class UseState extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
        this.handleCount = this.handleCount.bind(this)
    }
    handleCount() {
        this.setState({
            count: this.state.count+1
        })
    }
  render() {
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <button onClick={this.handleCount}>INcrement</button>
      </div>
    )
  }
}

export default UseState
