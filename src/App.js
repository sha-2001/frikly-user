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


function App() {

  const [onPayment, setOnPayment] = useState(true)

  let paymentOpen = () => { setOnPayment(false) }
  let paymentClose = () => { setOnPayment(true) }

  return (
    <div className="App">
      <BrowserRouter>
        {(onPayment) ? <Header /> : console.log('hello')}
        <Routes>
          <Route exact path='/' element={<Home paymentClose={paymentClose} />} />
          <Route exact path='/state' element={<State/>} />
          <Route exact path='/products' element={<Products/>} />
          <Route exact path='/singleproduct' element={<SingleProduct/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
