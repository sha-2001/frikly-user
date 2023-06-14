import React from 'react'
import './sidebar.css'

// importing icons
import { BsArrowLeft } from 'react-icons/bs';
import { GrDocumentText } from 'react-icons/gr';
import { BsChevronRight } from 'react-icons/bs';
import { MdOutlineCategory } from 'react-icons/md';
import { AiOutlineTags } from 'react-icons/ai';
import {TbHeartPlus} from 'react-icons/tb';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BiInfoCircle} from 'react-icons/bi';
import {BiSupport} from 'react-icons/bi';
import {FaRegHandshake} from 'react-icons/fa';
import {IoIosLogIn} from 'react-icons/io';



import FriklyWhite from '../../assets/icons/frikly-white.png';
import DocumentGif from '../../assets/icons/document-gif.gif';

function Sidebar({ sidebarStatus, toggleSidebar }) {

    return (
        <div className={sidebarStatus ? "sidebar sidebar--open  d-xl-none" : "sidebar d-md-none"}>
            <div className='container-fluid sidebar-header'>
                <div className="row" style={{ height: "100%" }}>
                    <div className="col-2">
                        <BsArrowLeft className='mt-3 '
                            onClick={toggleSidebar}
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
            </div>
            <div className="container-fluid sidebar-cheapest-quote">
                <div className="row" style={{ height: "100%" }}>
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
                                height : "30px",
                                width : "30px",
                                marginTop : "5px"
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
            </div>
            <div className="container-fluid brand-cat" >
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 pt-4">
                        <MdOutlineCategory className='ms-3' style={{ height: "22px", width: "22px" }} />
                    </div>
                    <div className="col-10 pt-4 d-flex justify-content-left" style={{ fontSize: "16px", fontWeight: "500" }}>
                        Top Categories
                    </div>
                </div>
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 pt-2">
                        <AiOutlineTags className='ms-3' style={{ height: "22px", width: "22px" }} />
                    </div>
                    <div className="col-10 pt-2 d-flex justify-content-left" style={{ fontSize: "16px", fontWeight: "500" }}>
                        Search by Brands
                    </div>
                </div>
            </div>
            <div className="container-fluid wishlist-cart">
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 pt-4">
                        <TbHeartPlus className='ms-3' style={{ height: "22px", width: "22px" }} />
                    </div>
                    <div className="col-10 pt-4 d-flex justify-content-left" style={{ fontSize: "16px", fontWeight: "500" }}>
                        Your Wishlist
                    </div>
                </div>
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 pt-2">
                        <AiOutlineShoppingCart className='ms-3' style={{ height: "22px", width: "22px" }} />
                    </div>
                    <div className="col-10 pt-2 d-flex justify-content-left" style={{ fontSize: "16px", fontWeight: "500" }}>
                        Your Cart
                    </div>
                </div>
            </div>
            <div className="container-fluid login-seller">
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 pt-4">
                        <IoIosLogIn className='ms-3' style={{ height: "22px", width: "22px" }} />
                    </div>
                    <div className="col-10 pt-4 d-flex justify-content-left" style={{ fontSize: "16px", fontWeight: "500" }}>
                        Professional Login
                    </div>
                </div>
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 pt-2">
                        <FaRegHandshake className='ms-3' style={{ height: "22px", width: "22px" }} />
                    </div>
                    <div className="col-10 pt-2 d-flex justify-content-left" style={{ fontSize: "16px", fontWeight: "500" }}>
                        Become a seller
                    </div>
                </div>
            </div>
            <div className="container-fluid about-support">
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 pt-4">
                        <BiInfoCircle className='ms-3' style={{ height: "22px", width: "22px" }} />
                    </div>
                    <div className="col-10 pt-4 d-flex justify-content-left" style={{ fontSize: "16px", fontWeight: "500" }}>
                        About Us
                    </div>
                </div>
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 pt-2">
                        <BiSupport className='ms-3' style={{ height: "22px", width: "22px" }} />
                    </div>
                    <div className="col-10 pt-2 d-flex justify-content-left" style={{ fontSize: "16px", fontWeight: "500" }}>
                        Support
                    </div>
                </div>
            </div>
            <button className='btn sidebar-signin'>Sign In</button>
        </div>
    )
}

export default Sidebar