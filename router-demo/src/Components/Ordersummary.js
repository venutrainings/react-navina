import React from 'react'
import { useNavigate } from 'react-router-dom'

function Ordersummary() {

    const navigate=useNavigate();   
  return (
      <>
        <div>Order conformed</div>
        <button onClick={()=>navigate(-1)}>Go Back</button>
      
      </>
    
  )
}

export default Ordersummary