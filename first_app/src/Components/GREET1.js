import React from 'react'

function GREET1() {
    let {name, address, mobile} = props
  return (
    <div>
      <h1>Welcome {name} {address} {mobile}</h1>
    </div>
  )
}

export default GREET1
