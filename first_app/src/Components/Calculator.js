import React, { Component } from 'react'
export class Calculator extends Component {
    constructor(){
        super();
        this.state={
            inp1: 0,
            inp2: 0,
            result : 0
        }
    }
    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: Number(value) }); // Update the state with input values
    };
    add(){
      this.setState({
        result : this.state.inp1+this.state.inp2 
       })
    }
    sub(){
      this.setState({
        result: this.state.inp1-this.state.inp2
      })
    }
    mul(){
      this.setState({
        result : this.state.inp1*this.state.inp2
      })
    }
    div(){
      this.setState({
        result: this.state.inp1/this.state.inp2
      })
    }
    clear(){
      this.setState({
        inp1: 0,
        inp2: 0,
        result: 0
      })
    }
  render() {
    return (
      <div>
        <input name='inp1' className="inp1" value={this.state.inp1} onChange={this.handleInputChange} type='number' placeholder='inp1'></input>
        <input name='inp2' className="inp2" value={this.state.inp2} onChange={this.handleInputChange} type='number'></input>
        <br></br>
        <br></br>
        <button onClick={()=>this.add()}>+</button>
        <br></br>
        <br></br>
        <button onClick={()=>this.sub()}>-</button>
        <br></br>
        <br></br>
        <button onClick={()=>this.mul()}>*</button>
        <br></br>
        <br></br>
        <button onClick={()=>this.div()}>/</button>
        <br></br>
        <br></br>
        <h1>Result is: {this.state.result}</h1>
        <button onClick={()=>this.clear()}>clear</button>
      </div>
    )
  }
}

export default Calculator

