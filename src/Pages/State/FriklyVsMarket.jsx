import React from 'react'

import jgaah from '../../assets/state/jgaah.webp';
import friklyMarket from '../../assets/state/frikly-market.webp';
import localMarket from '../../assets/state/local-market.webp'

const FriklyVsMarket = () => {
  return (
    <div className='frikly-vs-market'>
        <div className="market-jgah">
            <img src={jgaah} alt="" />
        </div>
        <div className="market-frikly">
            <img src={friklyMarket} alt="" />
        </div>
        <div className="market-local">
            <img src={localMarket} alt="" />
        </div>
    </div>
  )
}

export default FriklyVsMarket