
const Table= props =>{
    const {outputdata} = props
    console.log(outputdata)
    const {name,age} = outputdata 
    
    return(
        <tr>
                    <td>
                        {name}
                    </td>
                    <td>
                        {age}
                    </td>
                </tr>
    )
}
export default Table;