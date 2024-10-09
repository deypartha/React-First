import React from 'react'

function Func_Event() {
    function display(name){
        alert(`Hello ${name} it is a react evet . . .`)
    }
  return (
    <div>
      <button onClick={()=>display("ajay")}>Click me</button>
    </div>
  )
}

export default Func_Event
