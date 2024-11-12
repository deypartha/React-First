import React, { Component } from 'react'

export class LifeCycleForUpdate extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
        this.handleCount = this.handleCount.bind(this);
    }
    handleCount(){
        this.setState({
            count: this.state.count+1
        })
    }
    shouldComponentUpdate(nextProps, nextState){
        // console.log(this)
        // return false;
        if(this.state.count !== nextState.count){
            return true;
        }else{
            return false;
        }
    }
  render() {
    return (
      <div>
        <h1>Count is : {this.state.count}</h1>
        <button onClick={this.handleCount}>Click me</button>
      </div>
    )
  }
}

export default LifeCycleForUpdate
