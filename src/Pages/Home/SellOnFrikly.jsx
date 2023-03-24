import React from 'react'

import sellOnFriklyLarge from '../../assets/icons/sell-on-frikly-large.webp';
import sellOnFriklySmall from '../../assets/icons/sell-on-frikly-small.webp';

function SellOnFrikly() {
  return (
    <div className='sell-on-frikly p-3'>
      <img className='d-none d-md-block' src={sellOnFriklyLarge} alt="Become a pro member" />
      <img className='d-block  d-md-none' src={sellOnFriklySmall} alt="Become a pro member" />
    </div>
  )
}

export default SellOnFrikly