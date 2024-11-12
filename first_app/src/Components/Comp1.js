import React, { createContext } from 'react'
import Comp2 from './Comp2'
let UserContext = createContext();
function Comp1(username) {
  return (
    <div>
        Hello [username, setUserName] from Comp1
        <UserContext.provider value = {username}>
        <Comp2 propfromcomp1 = {username}></Comp2>
    </div>
  )
}

export default Comp1
