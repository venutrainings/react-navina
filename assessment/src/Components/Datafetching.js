import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import './Datafetching.css'

function Datafetching() {

    const [data, setData] = useState([]);
    const [inputData,setInputData]=useState({name:"",email:"",gender:"",status:""})
    useEffect(() => {
        axios.get("https://gorest.co.in/public/v2/users")
            .then(res => { setData(res.data) })
            .catch(err => { console.log(err) })
    }, [])
    const headers = {
        'Content-Type': 'application/json',
        Authorization: '3d994cc0415291ffae62e85fd306012692c92e5faa83c6690366370521ad0942'
      }
      

    function addData(){
        axios.post("https://gorest.co.in/public/v2/users",{inputData})
        .then((response)=>setData(response.data));
        
    }
    return (
        <div className='bg-container'>
            
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>email</th>
                                <th>gender</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data.map((data,index) => (
                                <tr key = {index}>
                                    <td key={data.id}>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.status}</td>
                                </tr>
                            ))}

                        </tbody>

                    </table>
                </div>
                <div >
                   <form onSubmit={addData} className='form-container'>
                        <label id = "name">Name</label>
                        <input htmlFor = "name" type="text" placeholder='name' onChange={(e)=>setInputData({...inputData,name:e.target.value})}/>

                        <label id = "email">Email</label>
                        <input htmlFor = "email" type="text" placeholder='email' onChange={(e)=>setInputData({...inputData,email:e.target.value})} />

                        <label id = "gender">Gender</label>
                        <input htmlFor = "gender" type="text" placeholder='gender' onChange={(e)=>setInputData({...inputData,gender:e.target.value})}/>

                        <label id = "status">Status</label>
                        <input htmlFor = "status" type="text" placeholder='status' onChange={(e)=>setInputData({...inputData,status:e.target.value})}/>

                        <button type='submit' >
                            SUBMIT
                        </button>
                   </form>
                </div>

            
        </div>


    )
}

export default Datafetching