import React, { Component } from 'react'

export class ComponentDidUp extends Component {
    constructor(){
        super();
        this.state  = {
            favfood : 'rice'
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({favfood: 'pizza'})
        }, 2000);
    }
    getSnapshotBeforeUpdate(prevprops, prevstate){
        document.getElementById('p1').innerHTML = `Before the update, my favourite food was `+ prevstate.favfood
    }
    componentDidUpdate(){
        document.getElementById('p2').innerHTML = `after update`+this.state.favfood
    }
  render() {
    return (
      <div>
        <h1>My favourite food is: {this.state.favfood}</h1>
        <p id='p1'></p>
        <p id='p2'></p>
      </div>
    )
  }
}

export default ComponentDidUp
