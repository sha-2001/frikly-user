import React from 'react'

import './home.css';

import DesignedForYou from './DesignedForYou';
import ProMember from './ProMember';

function Home(props) {
  props.paymentClose()
  return (
    <div>
      <ProMember />
      <DesignedForYou />
    </div>
  )
}

export default Home