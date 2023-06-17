import React from 'react'

import Furniture1 from '../../assets/state/Furniture1.png';
import Furniture2 from '../../assets/state/Furniture2.png';
import Furniture3 from '../../assets/state/Furniture3.png';
import Furniture4 from '../../assets/state/Furniture4.png';
import Furniture5 from '../../assets/state/Furniture5.png';
import Brands from '../../assets/state/Brands.png';

import MobileFurnitureFram from '../../assets/state/Mobile Funiture Frame.png'

const StateFurnitureMaterial = () => {
    return (
        <>
            <div className='state-furniture-material d-none d-md-block'>
                <div className="row">
                    <p className='text-center mb-0' style={{ fontSize: "32px", color: "#22333B", fontWeight: "400"}}>Our <span style={{ fontWeight: "500" }}>Loream</span></p>
                    <p className='text-center' style={{ fontSize: "18px", fontWeight: "500", color: "#22333B"}}>Lorem ipsum dolor sit amet, consectetur , sed do <span style={{ color: "#473C27" }}>eiusmod tempor</span></p>
                </div>
                <div className="row ps-5">
                    <div className="col-4 ps-4 ">
                        <img
                            style={{
                                width: "459px",
                                height: "622px"
                            }}
                            src={Furniture1} alt="..." />
                    </div>
                    <div className="col">
                        <div className="row mb-3">
                            <div className="col-6  d-flex justify-content-start">
                                <img style={{
                                    width: "490px",
                                    height: "303px"
                                }} src={Furniture2} alt="..." />
                            </div>
                            <div className="col-5">
                                <img style={{
                                    width: "400px",
                                    height: "303px"
                                }} src={Furniture4} alt="..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 d-flex justify-content-start">
                                <img style={{
                                    width: "490px",
                                    height: "303px"
                                }} src={Furniture3} alt="..." />
                            </div>
                            <div className="col-5">
                                <img style={{
                                    width: "400px",
                                    height: "303px"
                                }} src={Furniture5} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="row">
                        <p className='text-center ps-5 ms-4' style={{
                            fontSize: "28px",
                            fontWeight: "400",
                            color: "#22333B"
                        }} >Popular <span style={{ fontWeight: "600", color: "#22333B" }}>Brands</span> We deal with.</p>
                    </div>
                    <div className="row">
                        <img
                            style={{
                                width: "1009px",
                                height: "93px",
                                marginLeft: "12%",
                                marginTop: "1%"
                            }}
                            src={Brands} alt="..." />
                    </div>

                </div>
            </div>

            <div className="container-fluid mb-3">
                <img style={{
                    height:"1168px"
                }} src={MobileFurnitureFram} alt="..." />
            </div>
        </>
    )
}

export default StateFurnitureMaterial