import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../App'


function ComponentD() {

    const countContext =useContext(CountContext)
  return (
    <div>ComponentD<br /> 
      <button onClick={()=>countContext.countDispatch('increment')}>increment</button>
      <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>


    </div>
  )
}

export default ComponentD