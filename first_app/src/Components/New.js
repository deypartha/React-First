import React from 'react'

function New(props) {
    // let name = "Ram"
  return (
    <div>
      {/* <h1>Welcome {name}</h1> */}
      <h1>Welcome {props.name} From {props.address}</h1>
    </div>
  )
}
New.defaultProps = {
  name: "Radha",
  address: "India"
}
export default New
