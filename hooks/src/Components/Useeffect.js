import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Useeffect2 from './Useeffect2'
import './Useeffect.css'

function Useeffect() {
    const [data,setData]=useState([])
    const [state,setState]=useState(false)

    useEffect(() => {
        fetch("https://gorest.co.in/public/v2/comments")
        .then(Response=>Response.json())
        .then(jsonData =>setData(jsonData))
    },[])

    const show=()=>{
        setState(true)
    }
    const hide=()=>{
        setState(false)
    }

  return (
    <div className='bg-container'>
        <h1 className='h'>Data</h1>
        <div>
            <button className='btn' onClick={show}>Show table</button>
            <button className='btn' onClick={hide}>Hide table</button>
        </div>
        {state && <table>
            <thead>
                <tr>
                    <th>
                        id
                    </th>
                    <th>
                        post_id
                    </th>
                    <th>
                        name
                    </th>
                    <th>
                        email
                    </th>
                    <th>
                        body
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map(eachData => (
                    <Useeffect2 userdetails={eachData} key={eachData.id}></Useeffect2>
                ))}
            </tbody>
        </table>}
    </div>
  )
}

export default Useeffect