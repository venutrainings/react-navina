import React from 'react'
import { useState } from 'react'

import "./Count.css"

function Count2() {
    const [count,setCount]=useState(0);
    const incrementFive = () =>{
        setCount((prevCount => count+5))
    }
  return (
    <div>
        <h1>{count}</h1>
        <div className='btn-container'>
          <button className='btn' onClick={() => setCount(prevCount => count+1)}>Increment</button>
          <button className='btn' onClick={() => setCount(prevCount => count-1)}>Decrement</button>
          <button className='btn' onClick={() => setCount(0)}>Reset</button>
          <button className='btn' onClick={incrementFive}>Increment5</button>
        </div>
    </div>
  )
}

export default Count2