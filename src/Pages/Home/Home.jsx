import React from 'react'

import './home.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DesignedForYou from './DesignedForYou';
import FriklyWhatsapp from './FriklyWhatsApp';

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

        <FriklyWhatsapp/>
        <DesignedForYou/>
        <Footer/>
    </div>
  )
}

export default Home