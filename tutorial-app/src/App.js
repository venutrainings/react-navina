
import { Component } from 'react';
import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import Welcome from './components/Welcome';
import Hello from './components/Hello';


function App() {
  return (
    <div className="App">
      <Greetings name="Navina" lname="K"></Greetings>
      <Greetings name="Anu" lname="Sudheesh Kumar"></Greetings>
      <Greetings name="sandra" lname="saseendran"></Greetings>
      
    </div>
  );
}

export default App;
