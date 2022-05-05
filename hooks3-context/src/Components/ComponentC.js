import React, { useContext } from 'react'
import { contextobj } from '../App'
import ComponentD from './ComponentD'


function ComponentC() {
    let Data1=useContext(contextobj)
    console.log(Data1)

  return (
    <div>
        <p>Entered the ComponentC</p>
        <table>
            <thead>
                <tr>
                    <th>
                        userId
                    </th>
                    <th>
                        id
                    </th>
                    <th>
                        title
                    </th>
                    
                </tr>
            </thead>
            <tbody>
                {Data1.map(each=>
                <ComponentD Data={each} key={each.id}/>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default ComponentC