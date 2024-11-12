import React, { useState } from 'react'
function CounterFunc() {
    let [count, setCount] = useState(0);
    function handleCount(){
        setCount(count+1)
    }
    function handleCountDeC(){
        setCount(count-1)
    }
    function handleCountReset(){
        setCount(0)
    }
    function handleCountByFive(){
        for(let i=0;i<5;i++){
            setCount((prevState)=>prevState+1)
        }
    }
  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={handleCount}>Increment</button>
        <button onClick={handleCountDeC}>Decrement</button>
        <button onClick={handleCountReset}>Reset</button>
        <button onClick={handleCountByFive}>AddFive</button>
        {/* <button onClick={handleCount}>click</button> */}
    </div>
  )
}

export default CounterFunc
