import React from 'react'

import plywood from '../../assets/deals/plywood.webp';
import fabric_micro from '../../assets/deals/fabric-mirco.webp';
import screws from '../../assets/deals/screws.webp';
import solid_square from '../../assets/deals/solid-square.webp';
import lovvels from '../../assets/deals/lovvels.webp';
import hardware from '../../assets/deals/hardware.webp';
import venner from '../../assets/deals/venner.webp';
import highlighters from '../../assets/deals/highlighters.webp';
import laminates from '../../assets/deals/laminates.webp';
import fevicol from '../../assets/deals/fevicol.webp';

function Deal() {
  return (
    <div className='container-fluid d-none d-md-block' >
      <h2 className='fw-bold' style={{ color: '#22333B', fontFamily: 'PT Serif' }}>Shop Top Deals</h2>
      <div className='row ps-5'>
        <div className='col-2 me-md-3 me-lg-0 offset-lg-1'><img className='deals-image' src={plywood} alt="plywood" /></div>
        <div className='col-2 me-md-3 me-lg-0'><img className='deals-image' src={fabric_micro} alt="fabric micro" /></div>
        <div className='col-2 me-md-3 me-lg-0'><img className='deals-image' src={screws} alt="screws" /></div>
        <div className='col-2 me-md-3 me-lg-0'><img className='deals-image' src={solid_square} alt="solid square" /></div>
        <div className='col-2 me-md-3 me-lg-0'><img className='deals-image' src={lovvels} alt="lovvels" /></div>
      </div>
      <div className='row ps-5 mt-3'>
        <div className='col-2 me-md-3 me-lg-0 offset-lg-1'><img className='deals-image' src={hardware} alt="hardware" /></div>
        <div className='col-2 me-md-3 me-lg-0'><img className='deals-image' src={venner} alt="venner" /></div>
        <div className='col-2 me-md-3 me-lg-0'><img className='deals-image' src={highlighters} alt="highlighters" /></div>
        <div className='col-2 me-md-3 me-lg-0'><img className='deals-image' src={laminates} alt="laminates" /></div>
        <div className='col-2 me-md-3 me-lg-0'><img className='deals-image' src={fevicol} alt="fevicol" /></div>
      </div>
    </div>
  )
}

export default Deal