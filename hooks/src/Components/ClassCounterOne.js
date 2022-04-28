import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


function ClassCounterOne() {

    const [count,setCount]=useState(0);

    useEffect(
        () => {
            console.log("useeffect updating document tittle")
            document.title = `You clicked ${count} times`},[count]);

  return (
    <div>
        <button onClick={(prevState)=>setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default ClassCounterOne