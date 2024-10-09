import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(){
        super();
        this.state = {
            name: "Ajay"
        }
    }
    static getDerivedStateFromProps(newProps, oldProps){
        if(newProps.name !== oldProps.name){
            return {
                name: newProps.name
            }
        }
    }
  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
      </div>
    )
  }
}

export default LifeCycle
