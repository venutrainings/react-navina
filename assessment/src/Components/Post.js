import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'

function Post() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{setData(response.data)})
    },[])

    function createPost(){
        axios.post("https://jsonplaceholder.typicode.com/posts",{
            title:"Hello world",
            body:"this is a new post"
        })
        .then((response)=>setData(response.data));
        
    }
  return (
    <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        <button onClick={createPost}>Createpost</button>
    </div>
  )
}

export default Post