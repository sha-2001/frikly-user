import React from 'react'
import './state.css'
import StateCarousel from './StateCarousel'
import StateFurnitureMaterial from './StateFurnitureMaterial';
import Sasta from '../../assets/state/sasta.png';
import Whatsapp from './Whatsapp';
import FriklyVsMarket from './FriklyVsMarket';
import QandA from './QandA';
import BrandSlides from './BrandSlides';
import SastaMobile from '../../assets/state/sasta-mobile.png'
import PaintFrame from './PaintFrame';



const State = () => {

    return (
        <>
            <div className="container-fluid state">
                <div className="row" >
                    <StateCarousel />
                </div>
                <div className='row market-se-sasta'>
                    <img className='d-none d-xl-block' src={Sasta} alt="..." />
                    <img className='d-xl-none'  src={SastaMobile} alt="" />
                </div>
                <div className="row">
                    <StateFurnitureMaterial image={1}
                    heading={'Furniture material store'}
                    subHeading={'Elevate Your Home with Premium Furniture Materials'}
                    />
                    <BrandSlides brand={'furniture'}/>
                    <hr style={{ color: "#9DA5A9", height: "5px" }} />
                </div>
                <div className="row">
                    <StateFurnitureMaterial image={2}
                    heading={'Electronics material store'}
                    subHeading={'Exceptional range of electronics items.'}
                    />
                    <BrandSlides brand={'electronics'}/>
                    <hr style={{ color: "#9DA5A9", height: "5px" }} />
                </div>
                <div className="row">
                    <StateFurnitureMaterial image={3}
                    heading={'Plumbing material store'}
                    subHeading={'Discover Top-Quality Plumbing Materials for Every Project.'}
                    />
                    <BrandSlides brand={'plumbing'}/>
                    <hr style={{ color: "#9DA5A9", height: "5px" }} />
                </div>
                <div className="row">
                    <StateFurnitureMaterial
                    image={4}
                    heading={'Paints material store'}
                    subHeading={'Explore our Vibrant Wall Paint Collection.'}
                    />
                    {/* <PaintFrame/> */}
                    <hr style={{ color: "#9DA5A9", height: "5px",marginTop:"3rem" }} />
                </div>
                <div className="row mt-5">
                    <Whatsapp/>
                </div>
                <div className="row">
                    <FriklyVsMarket/>
                </div>
                <div className="row">
                    <QandA/>
                </div>
            </div>
        </>

    )
}

export default State