import React from 'react'

import { BsChevronDown } from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';

import Hardware from '../../../assets/icons/hardware.png';
import Bath from '../../../assets/icons/bath.png';
import Appliances from '../../../assets/icons/appliances.png';
import Laminates from '../../../assets/icons/laminates.png';

const TopCategories = () => {

  return (
    <div className='container-fluid option-topCategories'>

      <div className="row" style={{ borderBottom: "1px solid #b7b4b4" }}>
        <div className="col-2">
          <div className="image-space">
            <img src={Hardware} alt="" />
          </div>
        </div>
        <div className="col-10">
          <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseoption1" aria-expanded="false" aria-controls="collapseoptions1" className='cat-button'>Hardware <BsChevronDown className='down-arrow' style={{marginLeft : "58%"}}/></button>
        </div>
      </div>
      <div class="collapse" id="collapseoption1">
        <div class="card card-body">

          <div className='container-fluid option-topCategories2'>
            <div className="row ps-5">Channel & Hinges <AiOutlinePlus className='plus-icon' style={{marginLeft:"36%"}}/> </div>
            <div className="row ps-5">Locks  <AiOutlinePlus className='plus-icon' style={{marginLeft:"70%"}}/></div>
            <div className="row ps-5">Door Hardware  <AiOutlinePlus className='plus-icon' style={{marginLeft:"43%"}} /></div>
            <div className="row ps-5">Glass Fittings & Hardware  <AiOutlinePlus className='plus-icon' style={{marginLeft:"14%"}}/></div>
            <div className="row ps-5">Kitchen Hardware  <AiOutlinePlus className='plus-icon' style={{marginLeft:"35%"}}/></div>
            <div className="row ps-5">Wardrobe Fittings  <AiOutlinePlus className='plus-icon' style={{marginLeft:"35%"}}/></div>
          </div>

        </div>
      </div>

      <div className="row" style={{ borderBottom: "1px solid #b7b4b4" }}>
        <div className="col-2">
          <div className="image-space">
            <img src={Bath} alt="" />
          </div>
        </div>
        <div className="col-10">
          <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseoption2" aria-expanded="false" aria-controls="collapseoptions2" className='cat-button'>Sanitaryware & Bath <BsChevronDown className='down-arrow' style={{marginLeft : "30%"}} /></button>
        </div>
      </div>
      <div class="collapse" id="collapseoption2">
        <div class="card card-body">

          <div className='container-fluid option-topCategories2'>
            <div className="row ps-5">Basin <AiOutlinePlus className='plus-icon' style={{marginLeft:"71%"}}/></div>
            <div className="row ps-5">Bathroom Wellness<AiOutlinePlus className='plus-icon' style={{marginLeft:"31%"}}/></div>
            <div className="row ps-5">Toilet / Ewc<AiOutlinePlus className='plus-icon' style={{marginLeft:"55%"}}/></div>
            <div className="row ps-5">Bathroom Fittings<AiOutlinePlus className='plus-icon' style={{marginLeft:"35%"}}/></div>
            <div className="row ps-5">Bathroom Accessories<AiOutlinePlus className='plus-icon' style={{marginLeft:"24%"}}/></div>
            <div className="row ps-5">Bathroom Essentials<AiOutlinePlus className='plus-icon' style={{marginLeft:"29%"}}/></div>
            <div className="row ps-5">Showers<AiOutlinePlus className='plus-icon' style={{marginLeft:"62%"}}/></div>
            <div className="row ps-5">Kitchen Sinks<AiOutlinePlus className='plus-icon' style={{marginLeft:"48%"}}/></div>
          </div>

        </div>
      </div>

      <div className="row" style={{ borderBottom: "1px solid #b7b4b4" }}>
        <div className="col-2">
          <div className="image-space">
            <img src={Appliances} alt="" />
          </div>
        </div>
        <div className="col-10">
          <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseoption3" aria-expanded="false" aria-controls="collapseoptions3" className='cat-button'>Home Appliances<BsChevronDown className='down-arrow' style={{marginLeft : "39%"}}/></button>
        </div>
      </div>
      <div class="collapse" id="collapseoption3">
        <div class="card card-body">

          <div className='container-fluid option-topCategories2'>
            <div className="row ps-5">Air Conditioners<AiOutlinePlus className='plus-icon' style={{marginLeft:"41%"}}/></div>
            <div className="row ps-5">Washing Machines<AiOutlinePlus className='plus-icon' style={{marginLeft:"33%"}}/></div>
            <div className="row ps-5">Refrigerators<AiOutlinePlus className='plus-icon' style={{marginLeft:"50%"}}/></div>
            <div className="row ps-5">Microwave Ovens<AiOutlinePlus className='plus-icon' style={{marginLeft:"37%"}}/></div>
            <div className="row ps-5">Chimneys<AiOutlinePlus className='plus-icon' style={{marginLeft:"58%"}}/></div>
            <div className="row ps-5">Dishwasher<AiOutlinePlus className='plus-icon' style={{marginLeft:"53%"}}/></div>
            <div className="row ps-5">Showers<AiOutlinePlus className='plus-icon' style={{marginLeft:"62%"}}/></div>
            <div className="row ps-5">Kitchen Hobs & Gas Stoves<AiOutlinePlus className='plus-icon' style={{marginLeft:"12%"}}/></div>
          </div>

        </div>
      </div>

      <div className="row" >
        <div className="col-2">
          <div className="image-space">
            <img src={Laminates} alt="" />
          </div>
        </div>
        <div className="col-10">
          <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseoption4" aria-expanded="false" aria-controls="collapseoptions4" className='cat-button'>Laminates and Mica<BsChevronDown className='down-arrow' style={{marginLeft : "33%"}}/></button>
        </div>
      </div>
      <div class="collapse" id="collapseoption4">
        <div class="card card-body">

          <div className='container-fluid option-topCategories2'>
            <div className="row ps-5">Laminates And Sunmica <AiOutlinePlus className='plus-icon' style={{marginLeft:"18%"}}/></div>
            <div className="row ps-5">PVC Laminates<AiOutlinePlus className='plus-icon' style={{marginLeft:"44%"}}/></div>
            <div className="row ps-5">Acrylic Laminates<AiOutlinePlus className='plus-icon' style={{marginLeft:"37%"}}/></div>
            <div className="row ps-5">Inner mica<AiOutlinePlus className='plus-icon' style={{marginLeft:"56%"}}/></div>
          </div>

        </div>
      </div>

    </div >
  )
}

export default TopCategories