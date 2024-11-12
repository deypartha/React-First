import React,{useEffect, UseEffect, useState} from 'react'

function UserEffectDemo() {
    let [count, setCount] = useState(0);
    useEffect(()=>{
        alert("Use effect called")
        document.title = `clicked ${count} times`
    },[count]); 
  return (
    <div>
        <input type='text' value={name} onChange={(event)=>setName(event.target.value)}></input>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UserEffectDemo
