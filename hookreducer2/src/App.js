
import './App.css';
import ComponentA from './Component/ComponentA';
import ComponentB from './Component/ComponentB';
import ComponentC from './Component/ComponentC';
import React from 'react';
import { useReducer } from 'react';


export const CountContext=React.createContext()


const initialState=0;
const reducer= (state,action)=>{
  switch(action ){
    case 'increment':
      return state+1;
    case 'decrement':
      return state-1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function App() {

  const [Count,dispatch] = useReducer(reducer,initialState);

  return (
    <CountContext.Provider value={{countState: Count, countDispatch: dispatch}}>
        <div className="App">
       count-{Count} 
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
    </div>
    </CountContext.Provider>
    
  );
}

export default App;
