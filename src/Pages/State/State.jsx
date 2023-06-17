import React from 'react'
import './state.css'
import StateCarousel from './StateCarousel'
import StateFurnitureMaterial from './StateFurnitureMaterial';
import Whatsapp from '../../assets/state/Whatsapp.png'
import FriklyVsMarket from '../../assets/state/FriklyVsMarket.png';
import QandA from '../../assets/state/QandA.png';
import WhatsappMobileFrame from '../../assets/state/WhatsappMobileFrame.png';
import MarketFrame from '../../assets/state/MarketFrame.png'

const State = () => {
    return (
        <>
            <div className="container-fluid state d-none d-md-block">
                <div className="row">
                    <StateCarousel />
                </div>
                <div className="row">
                    <StateFurnitureMaterial />
                </div>
                <div className="row">
                    <hr style={{ color: "#9DA5A9", height: "5px" }} />
                    <StateFurnitureMaterial />
                </div>
                <div className="row">
                    <hr style={{ color: "#9DA5A9", height: "5px" }} />
                    <StateFurnitureMaterial />
                </div>
                <div className="row">
                    <hr style={{ color: "#9DA5A9", height: "5px" }} />
                    <StateFurnitureMaterial />
                </div>
                <div className="row" style={{
                    backgroundClip: "White",
                    height: "620px",
                    marginTop: "71px",
                    paddingLeft: "145px",
                    paddingRight: "66px",
                    marginBottom: "70px"
                }}>
                    <img src={Whatsapp} alt="" />
                </div>
                <div className="row" style={{
                    height: "750px",
                    backgroundColor: "#F1F1E6"
                }}>
                    <img src={FriklyVsMarket} alt="" />
                </div>
                <div className="row" style={{
                    height: "1108px",
                    paddingTop: "70px",
                    paddingBottom: "70px",
                    paddingLeft: "51px",
                    paddingRight: "51px"
                }}>
                    <img src={QandA} alt="" />
                </div>
            </div>

            <div className="container-fluid state-mobile d-md-none">
                <div className="row mt-3 mb-3" style={{ height: "430px", backgroundColor: "#D9D9D9" }}></div>
                <div className="row">
                    <StateFurnitureMaterial />
                    <hr style={{ color: "#9DA5A9", height: "5px" }} />
                </div>
                <div className="row">
                    <StateFurnitureMaterial />
                    <hr style={{ color: "#9DA5A9", height: "5px" }} />
                </div>
                <div className="row">
                    <StateFurnitureMaterial />
                    <hr style={{ color: "#9DA5A9", height: "5px" }} />
                </div>
                <div className="row">
                    <StateFurnitureMaterial />
                    <hr style={{ color: "#9DA5A9", height: "5px" }} />
                </div>
                <div className="row">
                    <img src={WhatsappMobileFrame} style={{
                        height:"1159px",
                        width:"352px",
                        marginLeft:"19px",
                        marginRight:"19px",
                        marginBottom:"30px"
                    }} alt="" />
                </div>
                <div className="row">
                    <img src={MarketFrame} alt="..." style={{
                        height:"1429px",
                        width:"352px",
                        marginLeft:"19px",
                        marginRight:"19px",
                        marginBottom:"30px"
                        
                    }}/>
                </div>
            </div>
        </>

    )
}

export default State