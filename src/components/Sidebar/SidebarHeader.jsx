import React, { useState } from 'react'

import { BsArrowLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import FriklyWhite from '../../assets/icons/frikly-white.png';
import DocumentGif from '../../assets/icons/document-gif.gif';

const SidebarHeader = ({ toggleSidebar,sidebarHome,setShowOptions, setSidebarHome}) => {

    

    return (
        <div className='container-fluid sidebar-header'>
            <div className="row" style={{ height: "50%"}}>
                <div className="col-2">
                    <BsArrowLeft className='mt-3 '
                        onClick={()=>{
                            if(sidebarHome){
                                toggleSidebar();
                            }
                            else{
                                setShowOptions(true);
                                setSidebarHome(true);
                            }
                        }}
                        style={{
                            color: "white",
                            height: "30px",
                            width: "30px",

                        }}
                    />
                </div>
                <div className="col-10 d-flex justify-content-start">
                    <img src={FriklyWhite} alt="frikly"
                        style={{
                            height: "50px",
                            marginTop: "6px",
                            marginLeft: "50px"
                        }}
                    />
                </div>
            </div>
            <div className="row sidebar-cheapest-quote">
                <div className="col-2">
                    <div style={{
                        height: "45px",
                        width: "45px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        marginTop: "16px",
                        marginLeft: "7px"
                    }}>
                        <img src={DocumentGif} alt=""
                            style={{
                                height: "30px",
                                width: "30px",
                                marginTop: "5px"
                            }}
                        />
                    </div>
                </div>
                <div className="col-7 pt-3">
                    <p style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        marginBottom: "0px",
                        textAlign: "left"
                    }}>Get the cheapest quote</p>
                    <p style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        marginBottom: "0px",
                        textAlign: "left"
                    }}>Extra upto 10% off</p>
                </div>
                <div className="col-2 d-flex align-items-center ms-4">
                    <BsChevronRight
                        style={{
                            color: "#B5B5B5",
                            height: "30px",
                            width: "30px",
                        }} />
                </div>

            </div>
        </div >
    )
}

export default SidebarHeader