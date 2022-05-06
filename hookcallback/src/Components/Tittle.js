import React from 'react'

function Tittle() {

    console.log("Rendering tittle")

  return (
        <h2>
            Usecallback hook
        </h2>
  )
}

export default React.memo(Tittle)