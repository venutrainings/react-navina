

function Useeffect2(props) {

    const {userDetails}=props
    const {id,post_id,name,email,body}=userDetails;
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