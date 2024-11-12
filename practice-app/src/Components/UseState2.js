import React,{useState} from 'react'

function UseState2() {
    let [name, setName] = useState({fname:"", lname:""})
    function handlefname(event){
        setName({...name,fname:event.target.value})
    }
    function handlelname(event){
        setName({...name, lname:event.target.value})
    }
  return (
    <div>
        <h1>React Function Form</h1>
      <form>
        <div>
            <lable>Enter first name: </lable>
            <input type='text' value={name.fname} onChange={handlefname}></input>
        </div>
        <div>
            <lable>Enter last name: </lable>
            <input type='text' value={name.lname} onChange={handlelname}></input>
        </div>
      </form>
      <h1>first-name: {name.fname}</h1>
      <h1> last-name: {name.lname}</h1>
    </div>
  )
}

export default UseState2
