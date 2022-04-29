import React,{ useState,useEffect } from 'react';

import './App.css';
import ComponentA from './Components/ComponentA';

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
      <contextobj.Provider value={Data}>
      <p>Fetched data and passing data to componentA</p>
      <ComponentA/>
      </contextobj.Provider>
    </div>
  );
}

export default App;
