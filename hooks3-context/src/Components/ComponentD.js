import React from 'react'

function ComponentD(props) {

    const {Data}=props
    const {userId,id,title,completed}=Data
  return (
    <tr>
        <td>{userId}</td>
        <td>{id}</td>
        <td>{title}</td>
        <td>{completed}</td>
    </tr>
 )
}

export default ComponentD