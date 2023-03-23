import React from 'react'

import './home.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DesignedForYou from './DesignedForYou';
import FriklyWhatsapp from './FriklyWhatsApp';
import ReasonsToBuy from './ReasonsToBuy';
import OnTheWay from './OnTheWay';
import Deal from './Deal';
import ProMember from './ProMember';

function Home() {
  return (
    <div>
      <Header />

      {/* Show Top Deals */}

      <div>
        <h2 className='fw-bold sm-hide' style={{ color: '#22333B', fontFamily: 'PT Serif' }}>Shop Top Deals</h2>
        <Deal />
      </div>

      <div style={{
        height: '100vh',
        margin: '50px',
        backgroundColor: 'gray',
        borderRadius: '20px',
      }}></div>

      <ReasonsToBuy />
      <OnTheWay />
      <FriklyWhatsapp />
      <ProMember/>
      <DesignedForYou />
      <Footer />
    </div>
  )
}

export default Home