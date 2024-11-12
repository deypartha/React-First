import React, { Component } from 'react'

export class NewCounter extends Component {
   
    componentDidMount(){
        console.log("inc method is created")
    }
    componentDidUpdate(prevprops, prevstate){
        if(prevprops.count !== this.props.count){
            console.log("count updated")
        }
    }
    // inc(){
    //     this.setState({
    //         count: this.state.count+1
    //     })
    // }
  render() {
    return (
      <div>
        <h1>Count: {this.props.count}</h1>
        {/* <button onClick={this.inc}>Count++</button> */}
      </div>
    )
  }
}

export default NewCounter
