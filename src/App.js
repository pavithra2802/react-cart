import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { About } from './About';
import { Spices } from './Spices';
import { Cart } from './Cart';
import { useState } from 'react';

function App() {
  const [cart,setCart] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Navbar cart={cart} setCart={setCart}></Navbar>}>


        </Route>
        <Route path='/' element={<Home></Home>}>
          
        </Route>
        <Route path='/aboutus' element={<About></About>}>
          
        </Route>
        <Route path='/spices' element={<Spices cart={cart} setCart={setCart}></Spices>}>
          
        </Route>
          
        
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}></Cart>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
