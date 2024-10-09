import React, { Component } from 'react'

export class NewClass extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.customer_name} and Product is: {this.props.product}</h1>
      </div>
    )
  }
}

export default NewClass
