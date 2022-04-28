import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./Useeffect2";
import Useeffect2 from './Useeffect2';
import "./Useeffect.css"

function Useeffect() {
    const [data,setData]=useState([])
    const [show,setShow]=useState(false)
    useEffect(() => {
        fetch("https://gorest.co.in/public/v2/comments")
        .then(Response => Response.json())
        .then(jsonData =>setData(jsonData))
    })
    const showData=()=>{
        setShow(true)
    }
    const close=()=>{
        setShow(false)
    }

  return (
    <div className='bg-container'>
        <div>
            <button className='btn' onClick={showData}>Show Data</button>
            <button className='btn' onClick={close}>Close table</button>
        </div>
        {show && <table >
            <thead>
                <tr >
                    <th>
                        ID
                    </th>
                    <th>
                        POST_ID
                    </th>
                    <th>
                        NAME
                    </th>
                    <th>
                        EMAIL
                    </th>
                    <th>
                        BODY
                    </th>
                </tr>
            </thead>
            <tbody>
            {data.map(eachData =>(
                <Useeffect2 userDetails={eachData} key = {eachData.id}/>
            ))}
            </tbody>
        </table>}
    </div>
  )
}

export default Useeffect