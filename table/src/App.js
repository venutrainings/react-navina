import './App.css';
import Table from './Components/Table';
import "./App.css"


const Data= [{
  name:"Navina",
  age: 29
},{name:"Anu",age:17},{name:"Sandra",age:21},{name:"Nived",age:26}]

function App() {

  return (
    <div className="App">
      <table className = "table-container">
        <thead>
          <tr className ="table-heading">
            <th >
              Name
            </th>
            <th>
              Age
            </th>
          </tr>
        </thead>
        {Data.map(eachData => (
          <Table outputdata = {eachData} />
        ))}
      </table>
      
    </div>
  );
}

export default App;
