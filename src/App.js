import React from 'react';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header/Header';
import About from './Pages/About/About';
import Payment from './Pages/Payment/Payment';



import './App.css';
import Footer from './components/Footer/Footer';
import State from './Pages/State/State';
import Products from './Pages/Product/Products';


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
          <Route exact path='/about' element={<About />} />
          <Route exact path='/payment' element={<Payment paymentOpen={paymentOpen} />} />
          <Route exact path='/state' element={<State/>} />
          <Route exact path='/products' element={<Products/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
