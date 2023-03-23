import React from 'react'

import DealsCard from '../../components/DealsCard';

function Deal() {
  return (
    <div className='container-fluid deal-component sm-hide' >
      <div className='row'>
        <div className='col-2 offset-1'><DealsCard card={{title:'Plywood, MDF & boards',label:'up to',amount:'50'}}/></div>
        <div className='col-2'><DealsCard card={{title:'Fabric Micro',label:'from',amount:'493'}}/></div>
        <div className='col-2'><DealsCard card={{title:'Screws & nails',label:'up to',amount:'30'}}/></div>
        <div className='col-2'><DealsCard card={{title:'Solid square & Icorean',label:'up to',amount:'65'}}/></div>
        <div className='col-2'><DealsCard card={{title:'Lovvels & Icorean',label:'up to',amount:'65'}}/></div>
      </div>
      <div className='row mt-5'>
        <div className='col-2 offset-1'><DealsCard card={{title:'Hardware',label:'up to',amount:'70'}}/></div>
        <div className='col-2'><DealsCard card={{title:'Veneer',label:'from',amount:'60'}}/></div>
        <div className='col-2'><DealsCard card={{title:'Highlighters',label:'up to',amount:'80'}}/></div>
        <div className='col-2'><DealsCard card={{title:'Laminates',label:'up to',amount:'55'}}/></div>
        <div className='col-2'><DealsCard card={{title:'Fevicol & Adhesives',label:'up to',amount:'30'}}/></div>
      </div>
    </div>
  )
}

export default Deal