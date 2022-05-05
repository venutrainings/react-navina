import React from 'react'

function Useeffect2(props) {

        const {userdetails}=props
        const {id,post_id,name,email,body}=userdetails

  return (
    <tr>
        <td>
            {id}
        </td>
        <td>
            {post_id}
        </td>
        <td>
            {name}
        </td>
        <td>
            {email}
        </td>
        <td>
            {body}
        </td>
    </tr>
  )
}

export default Useeffect2