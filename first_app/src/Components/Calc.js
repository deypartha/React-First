import React, { Component } from 'react'

export class Calc extends Component {
    constructor(){
        super();
        this.state = {
            num1: 0,
            num2: 0,
            result: 0
        }
    }

    Opr(name){
        let {num1, num2, result} = this.state
    }
  render() {
    const{num1, num2, result} = this.state
    return (
      <div>
        <br/>
        <input type='text' name='num1' value ={num1} onChange={()=>this.setval1()}></input>
        <input type='text' name='num2' value ={num2} onChange={()=>this.setval2()}></input>
        <br></br>
        <button>add</button>
        <button>sub</button>
        <button>mul</button>
        <button>sub</button>
        <br/>
        <h1>result is : {this.result}</h1>
      </div>
    )
  }
}

export default Calc
