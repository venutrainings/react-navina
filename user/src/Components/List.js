import React, { useState } from 'react'

function List() {

    const [value,setValue]=useState("");

  return (
    <div>
        <input value={value} onChange={e => setValue(e.target.value)}></input>
    </div>
  )
}

export default List