import React from 'react'

function Props(props) {
  return (
    <div>
      <h1>Welcome {props.name}, from {props.address}</h1>
      {props.children}
    </div>
  )
}

export default Props
