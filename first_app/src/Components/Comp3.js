import React from 'react'
import Comp4 from './Comp4'
function Comp3(prop) {
  return (
    <div>
        <Comp3 propfromcomp3 = {prop.propfromcomp2}></Comp3>
    </div>
  )
}

export default Comp3
