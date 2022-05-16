import React from 'react'
import { useState, useEffect } from 'react'
import './Datafetching.css'

function Datafetch2() {
    const [data, setData] = useState([]);
    const [inputData, setInputData] = useState({ naame: "", email: "", gender: "", status: "" });

    function fetchDataUrl(url){
        fetch(url)
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
    }

    useEffect(() => {
        fetchDataUrl("https://gorest.co.in/public/v2/users")
    })


    function addNow(url,inputData){
        let options={
            method:"POST",
            headers:{
                'Content-Type':"application/json",
                Accept:'application/json',
                Authorization:'Bearer 3d994cc0415291ffae62e85fd306012692c92e5faa83c6690366370521ad0942'
            },
            body:JSON.stringify(inputData)
        }
        fetch(url,options);
        setInputData({
            name:"",
            email:"",
            gender:"",
            status:""
        })
    }

    function addData(event){
        event.preventDefault();
        addNow("https://gorest.co.in/public/v2/users",inputData)
    }

    return (
        <div className='bg-container'>

            <div >
                <form onSubmit={addData} className='form-container'>
                    <label id="name">Name</label>
                    <input htmlFor="name" type="text" placeholder='name' onChange={(e) => setInputData({ ...inputData, name: e.target.value })} />

                    <label id="email">Email</label>
                    <input htmlFor="email" type="text" placeholder='email' onChange={(e) => setInputData({ ...inputData, email: e.target.value })} />

                    <label id="gender">Gender</label>
                    <input htmlFor="gender" type="text" placeholder='gender' onChange={(e) => setInputData({ ...inputData, gender: e.target.value })} />

                    <label id="status">Status</label>
                    <input htmlFor="status" type="text" placeholder='status' onChange={(e) => setInputData({ ...inputData, status: e.target.value })} />

                    <button type='submit' >
                        SUBMIT
                    </button>
                </form>
            </div>


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

                        {data.map((data, index) => (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.gender}</td>
                                <td>{data.status}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default Datafetch2