import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function Focusinput() {

    const inputRef= useRef(null)

    useEffect(()=>{
        //focus the inputelement
        inputRef.current.focus()
    },[])
  return (
    <>
        <input ref={inputRef} type="text"/>
    
    </>
  )
}

export default Focusinput