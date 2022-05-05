import React,{ useState,useEffect } from 'react';

import './App.css';
import ComponentA from './Components/ComponentA';
import Use from './Components/Use';

export const contextobj=React.createContext()

function App() {

  const [Data,setData]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(Response=>Response.json())
    .then(json=>setData(json))
  },[])

  return (
    <div className="App">
      <Use />
    </div>
  );
}

export default App;
