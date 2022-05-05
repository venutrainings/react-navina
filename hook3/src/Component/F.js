import React,{useContext} from 'react'
import {UserContext} from '../App'

function F() {
    const data = useContext(UserContext)
  return (
    <div>
      <p>{data}</p>
    </div>
  )
}

export default F