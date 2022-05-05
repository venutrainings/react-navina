
import React ,{useState} from 'react';
import './App.css';
import C from './Component/C';

export const UserContext=React.createContext()
function App() {
  const [str] =useState('Anu')
  return (
    <div className="App">
      <p>Entered the APP Component Now</p>
      <UserContext.Provider value={str}>

          <C/>
      </UserContext.Provider>  
    </div>
  );
}

export default App;
