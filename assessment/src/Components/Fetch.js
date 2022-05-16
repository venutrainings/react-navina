import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';

import "./Fetch.css"

function Fetch() {

    const [data,setData]=useState([]);
    const [post,setPost]=useState(null);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{setData(res.data)})
        .catch(err=>{console.log(err)})
    },[])

    function updatePost(){
        axios.put("https://jsonplaceholder.typicode.com/posts/1",{
            title: "Hello World!",
             body: "This is an updated post."
        })
        .then((response) => {
            setPost(response.data);
            console.log(post)
        });

    }
  return (
      <>

        <div>
            <button onClick={updatePost}>UpdatePost</button>
        </div>
        
        <div>
             <ul>
                 {data.map(data=>(
                    <li className='list-type' key={data.id}>{data.title}</li>
                 ))}
             </ul>
        </div>
        
        
      </>
    
    
  )
}

export default Fetch