
import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Ordersummary from './Components/Ordersummary';
import Nomatch from './Components/Nomatch';
import Product from './Components/Product';
import Featuredproduct from './Components/Featuredproduct';
import Newproduct from './Components/Newproduct';
import Users from './Components/Users';
import Userdetails from './Components/Userdetails';
import Admin from './Components/Admin';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/ordersummary' element={<Ordersummary/>}/>
      <Route path='/products' element={<Product/>}>
          <Route index element={<Featuredproduct/>}/>
          <Route path='featured' element={<Featuredproduct/>}/>
          <Route path='new' element={<Newproduct/>}/>
      </Route>
      <Route path='/users' element={<Users/>}>
        <Route path=':userId' element={<Userdetails/>}/>
        <Route path='admin' element={<Admin/>}/>
      </Route>
      <Route path='*' element={<Nomatch/>}/>
    </Routes>
    </>
    
  );
}

export default App;
