import React from 'react'

import './home.css';

import DesignedForYou from './DesignedForYou';
import FriklyWhatsapp from './FriklyWhatsApp';
import ReasonsToBuy from './ReasonsToBuy';
import OnTheWay from './OnTheWay';
import Deal from './Deal';
import ProMember from './ProMember';
import Testimonial from './Testimonial';
import BuyingInBulk from './BuyingInBulk';
import SellOnFrikly from './SellOnFrikly';
import HeroBanner from './HeroBanner';

function Home(props) {
  props.paymentClose()
  return (
    <div>
      {/* <HeroBanner/> */}
      {/* <Deal />
      <div style={{
        height: '100vh',
        margin: '50px',
        backgroundColor: 'gray',
        borderRadius: '20px',
      }}></div> */}

      <OnTheWay />
      {/* <ReasonsToBuy /> */}
      {/* <SellOnFrikly /> */}
      {/* <FriklyWhatsapp /> */}
      <ProMember />
      {/* <Testimonial /> */}
      {/* <BuyingInBulk /> */}
      <DesignedForYou />
    </div>
  )
}

export default Home