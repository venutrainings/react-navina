
const Table= props =>{
    const {outputdata} = props
    console.log(outputdata)
    const {name,age} = outputdata 
    
    return(
        <div>
            <table>
                
                <tr>
                    <td>
                        {name}
                    </td>
                    <td>
                        {age}
                    </td>
                </tr>
                 
            </table>
        </div>
    )
}
export default Table;