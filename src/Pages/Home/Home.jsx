import React from 'react'

import './home.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div>
        <Header/>
        
        <div style={{
            height:'100vh',
            margin:'50px',
            backgroundColor:'gray',
            borderRadius:'20px',
            }}></div>

        <Footer/>
    </div>
  )
}

export default Home