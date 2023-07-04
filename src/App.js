import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './Pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import State from './Pages/State/State';
import Products from './Pages/Product/Products';
import SingleProduct from './Pages/Product/SingleProduct';
import Brand from './Pages/Brand/Brand';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  const [showHeader, setShowHeader] = useState(true);
  let handleCheckout = (flag) => {
    if (flag === false) setShowHeader(false);
  }
  return (
    <div className="App">
      <BrowserRouter>
        {showHeader && <Header />}
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/state' element={<State/>} />
          <Route exact path='/products' element={<Products/>} />
          <Route exact path='/singleproduct' element={<SingleProduct/>} />
          <Route exact path='/brands' element={<Brand/>}/>
          <Route exact path='/checkout' element={<Checkout handleCheckout = {handleCheckout}  />}/>
        </Routes>
        {showHeader && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
