import './App.css';
import Table from './Components/Table';


const Data= [{
  name:"Navina",
  age: 29
},{name:"Anu",age:17}]

function App() {

  return (
    <div className="App">
      <table>
      <tr>
                    <th>Name</th>
                    <th>Age</th>
      </tr>
      </table>
     {Data.map(eachData => (
       <Table outputdata = {eachData} />
     ))}
      
    </div>
  );
}

export default App;
