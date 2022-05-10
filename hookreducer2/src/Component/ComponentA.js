import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../App'



function ComponentA() {
  
  const countContext =useContext(CountContext)
  return (
    <div>ComponentA<br />
      <button onClick={()=>countContext.countDispatch('increment')}>increment</button>
      <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>


    </div>
  )
}

export default ComponentA