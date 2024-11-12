import React, { Component } from 'react'
export class ComponentUnmount extends Component {
    componentWillUnmount(){
        alert("the component name child is about to be mounted")
    }
  render() {
    return (
      <div>
        <h1>Child Component</h1>
      </div>
    )
  }
}

export default ComponentUnmount
