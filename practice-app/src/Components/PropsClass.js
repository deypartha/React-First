import React, { Component } from 'react'

export class PropsClass extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name} from class, {this.props.address}</h1>
        {this.props.children}
      </div>
    )
  }
}

export default PropsClass
