import React from 'react'
import { useParams } from 'react-router-dom'

function Userdetails() {

    const params=useParams();
    const userId=params.userId
  return (
    <div>Details about user {userId}</div>
  )
}

export default Userdetails