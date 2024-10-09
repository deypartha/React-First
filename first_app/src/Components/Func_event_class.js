import React, { Component } from 'react'
import {setState} from 'react'
export class Func_event_class extends Component {
    constructor(){
        super();
        this.state = {
            message : "Wlwcome to "
        }
        this.dispaly = this.dispaly.bind(this)
    }
    dispaly(){
        this.setState({
        message: "Nothing else"
        })
    }
    // dispaly(){
    //     alert("Hello world")
    // }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={()=>this.dispaly()}>Click Me</button> */}
        {/* <button onClick={this.dispaly.bind(this)}>Click me</button> */}
           <button onClick={this.dispaly}>Click Me</button>
      </div>
    )
  }
}

export default Func_event_class
