
import { useState } from 'react';
import './App.css';
import Bmilist from './components/Bmilist';
import Bmiscore from './components/Bmiscore';
import Form from './components/Form'

function App() {
  //let bmi=18;
  const [bmi, setbmi] = useState(18)

  const changeBmi = () =>{
    setbmi(19)
    console.log(bmi);
  }

  return (
    <div>
        <div>BMI Calculator</div>
        <div>my bmi is {bmi} </div>
        <button onClick={changeBmi}>Click</button>
        <Form/>
        <Bmiscore/>
        <Bmilist/>
    </div>
    
    
  );
}

export default App;
