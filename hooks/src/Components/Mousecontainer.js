import React from 'react'
import { useState } from 'react'
import Hookmouse from './Hookmouse'

function Mousecontainer() {
    const [display,setDisplay]=useState(true)

  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toogle display</button>
        {display && <Hookmouse></Hookmouse>}
    </div>
  )
}

export default Mousecontainer