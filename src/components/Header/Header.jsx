import React from 'react';
import './header.css';
import { useState } from 'react';

// importing components
import Sidebar from '../Sidebar/Sidebar';

// importing icons from react-icons package
import { SlMagnifier } from 'react-icons/sl';
import { BsCart3, BsPerson } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import {MdWorkspacePremium} from 'react-icons/md';
import {BsFillChatQuoteFill} from 'react-icons/bs';

// importing assets
import location from '../../assets/icons/location.webp';
import truck from '../../assets/icons/truck.webp';
import frikly from '../../assets/icons/frikly-logo.webp';
import Catalogue from '../../assets/icons/catalogue.gif';


function Header() {

    let [showCategory, setShowCategory] = useState(false); // keep check whether category prompt is open or not 

    const [sidebarStatus,setSidebarStatus] = useState(false);
    const toggleSidebar = () =>{
        setSidebarStatus((prevState) => !prevState)
    }

    return (
        <div className='header'>
            {/* 1 header bar //////////////////////////////////////// */}
            <div className="header-first container-fluid d-md-none d-xl-flex">
                <div className="header-first-item-1">
                    <img className='d-none d-md-inline  me-md-1' src={location} alt='location' />
                    <span className='p-0 m-0'>Enter Pincode</span> <span className='d-none d-md-inline' style={{ color: '#22333B', opacity: '0.7', fontSize: "1rem" }}>Change Pincode</span>
                </div>
                <div className="header-first-item-2 ">
                    <img className='d-none d-md-inline' src={truck} alt='truck' />
                    <span>Order Tracking</span>
                </div>
            </div>

            {/* 2 header bar ///////////////////////////////////////////*/}

            {/* Desktop view */}
            <div className="header-second d-none  d-xl-block" style={{ height: "11vh" }}>
                <div className="row gx-0" style={{ height: "100%" }}>
                    <div className=" col-md-2 d-flex justify-content-left">
                        <img className='main-logo ms-lg-3 mt-lg-1' src={frikly} alt="frikly" />
                    </div>
                    <div className="col  normal-bold d-flex align-items-center">Brands</div>
                    <div className="col  normal-bold d-flex align-items-center">About Us</div>
                    <div className="col  normal-bold me-4 d-flex align-items-center">Get Quote</div>
                    <div className="col-lg-4 col-md-3 ms-lg-5 ps-lg-4" style={{ paddingTop: "11px" }}>
                        <div className="row pt-lg-1">
                            <div className="col-10  p-0 pe-md-1 d-flex align-items-center ">
                                <input className='header-searchbar' placeholder='Search' type="text" />
                            </div>
                            <div className="col-2 search-icon d-flex justify-content-center align-items-center fw-bold">
                                <SlMagnifier className='fs-5 ' />
                            </div>
                        </div>
                    </div>
                    <div className="col-3 pt-1 pe-lg-3  d-flex justify-content-end">
                        <div className="row gx-3">
                            <div className="col ">
                                <img className='catalogue-icon mt-2 text-center' src={Catalogue} alt="" />
                                <div className='logo-text' style={{ color: 'black' }}>Catalogue</div>
                            </div>
                            <div className="col">
                                <BsCart3 className='header2-logos mt-2' />
                                <div className='logo-text mt-1'>Cart</div>
                            </div>
                            <div className="col">
                                <AiOutlineHeart className='header2-logos mt-2' />
                                <p className='logo-text mt-1'>Wishlist</p>
                            </div>
                            <div className="col">
                                <BsPerson className='header2-logos mt-2' />
                                <p className='logo-text mt-1'>Account</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Mobile View */}
            <div className=" d-md-none container">
                <div className="row" style={{ height: "7vh" }}>
                    <div className="col-2 pt-3">
                        <RxHamburgerMenu onClick={toggleSidebar} style={{ height: '30px', width: '40px' }} />
                    </div>
                    <div className="col-7">
                        <div className="col-md-2 pt-1 d-flex justify-content-center">
                            <img src={frikly} style={{ "height": "50px" }} alt="frikly" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='mt-2' >
                            <img src={Catalogue} style={{ height: '1.5rem' }} alt="" />
                        </div>
                        <p style={{ fontSize: '.7rem' }}>Catalogue</p>
                    </div>
                </div>
                <hr style={{ color: "gray", margin: "0px -10px" }} />
                <div className="row mt-2">
                    <div className="col-10  d-flex align-items-center ">
                        <input style={{ height: "3rem" }} className='header-searchbar' placeholder='Search' type="text" />
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center fw-bold"
                        style={{
                            'backgroundColor': "#22333B",
                            "color": "white",
                            "borderRadius": "50%",
                            "height": "50px",
                            "width": "50px"
                        }}>
                        <SlMagnifier className='fs-5 ' />
                    </div>
                </div>
            </div>

            {/* Tab View */}
            <div className="container-fluid pt-1 d-none d-md-block d-xl-none"
                style={{
                    backgroundColor: "#EAE0D5",
                    height: "3vh"
                }}
            >
                <div className="row">
                    <div className="col ps-3 d-flex justify-content-start">
                        <img className='d-none d-md-inline  me-md-1' src={location} alt='location' style={{ height: "24px" }} />
                        Enter Pincode
                    </div>
                    <div className="col pe-4 d-flex justify-content-end">
                        <img className='d-none d-md-inline me-2' src={truck} alt='truck' style={{ height: "20px" }} />
                        Order Tracking
                    </div>
                </div>
            </div>
            <div className="container-fluid d-none d-md-block d-xl-none">
                <div className="row" style={{ height: "5vh" }}>
                    <div className="col-1 pt-3 d-flex justify-content-start">
                        <RxHamburgerMenu onClick={toggleSidebar} style={{ height: '30px', width: '40px' }} />
                    </div>
                    <div className="col-5">
                        <div className="col-md-2 ps-5 pt-1 d-flex justify-content-center">
                            <img src={frikly} style={{ "height": "50px" }} alt="frikly" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row ps-2">
                            <div className="col-3 offset-3" >
                                <div className=' ms-1 mt-2' >
                                    <MdWorkspacePremium style={{height:"24px",width:"24px"}}/>
                                </div>
                                <p className='fw-bold text-end me-3' style={{ fontSize: '.7rem' }}>Brands</p>
                            </div>
                            <div className="col-3" >
                                <div className='mt-2 me-3' >
                                    <BsFillChatQuoteFill style={{height:"20px",width:"20px"}}/>
                                </div>
                                <p className='fw-bold text-end me-3' style={{ fontSize: '.7rem' ,marginTop:"1px"}}>Get Quote</p>
                            </div>
                            <div className="col-3">
                                <div className='mt-2 me-3' >
                                    <img src={Catalogue} style={{ height: '1.5rem' }} alt="" />
                                </div>
                                <p className='fw-bold text-end me-3' style={{ fontSize: '.7rem' }}>Catalogue</p>
                            </div>
                        </div>
                    </div>

                </div>
                <hr style={{ color: "gray", margin: "0px -10px" }} />
                <div className="row mt-2">
                    <div className="col-11  d-flex align-items-center ">
                        <input style={{ height: "3rem" }} className='header-searchbar' placeholder='Search' type="text" />
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center fw-bold"
                        style={{
                            'backgroundColor': "#22333B",
                            "color": "white",
                            "borderRadius": "50%",
                            "height": "50px",
                            "width": "50px"
                        }}>
                        <SlMagnifier className='fs-5 ' />
                    </div>
                </div>
            </div>

            {/* 3 header bar /////////////////////////////////////////////*/}
            <div className="header-third container-fluid d-none d-xl-block">
                <div className="row" style={{ "height": "100%" }}>
                    <div className="col-2 subcat subcat-hover d-flex align-items-center justify-content-center" onMouseEnter={() => setShowCategory(true)} onMouseLeave={() => { setShowCategory(false) }}>Sanitaryware & Bath</div>
                    <div className="col subcat subcat-hover d-flex align-items-center justify-content-center" onMouseEnter={() => setShowCategory(true)} onMouseLeave={() => { setShowCategory(false) }}>Hardware</div>
                    <div className="col-2 subcat subcat-hover d-flex align-items-center justify-content-center" onMouseEnter={() => setShowCategory(true)} onMouseLeave={() => { setShowCategory(false) }}>Home Appliances</div>
                    <div className="col-2 subcat subcat-hover d-flex align-items-center justify-content-center" onMouseEnter={() => setShowCategory(true)} onMouseLeave={() => { setShowCategory(false) }}>Laminates and Mica</div>
                    <div className="col subcat subcat-hover d-flex align-items-center justify-content-center" onMouseEnter={() => setShowCategory(true)} onMouseLeave={() => { setShowCategory(false) }}>Beds</div>
                    <div className="col subcat subcat-hover d-flex align-items-center justify-content-center" onMouseEnter={() => setShowCategory(true)} onMouseLeave={() => { setShowCategory(false) }}>Storage</div>
                    <div className="col subcat subcat-hover d-flex align-items-center justify-content-center" onMouseEnter={() => setShowCategory(true)} onMouseLeave={() => { setShowCategory(false) }}>Decor</div>
                    <div className="col subcat subcat-hover d-flex align-items-center justify-content-center" onMouseEnter={() => setShowCategory(true)} onMouseLeave={() => { setShowCategory(false) }}>Kitchen</div>
                </div>
            </div>
            {showCategory
                &&
                <div className="category-div container-fluid" onMouseEnter={() => setShowCategory(true)} onMouseLeave={() => setShowCategory(false)}>
                    <div className="row" style={{ height: "100%" }}>
                        <div className="col" style={{ backgroundColor: "white" }}>
                            <p className='fw-bold'>Channel & Hinges</p>
                            <ul>
                                <li>Drawer Channels</li>
                                <li>Tandem Box</li>
                                <li>Drawer System</li>
                                <li>Soft Close Channels</li>
                                <li>Auto Close & Soft Close Hinges</li>
                                <li>SS Hinges</li>
                            </ul>
                        </div>
                        <div className="col" style={{ backgroundColor: "#EAE0D580" }}>
                            <p className='fw-bold'>Locks</p>
                            <ul>
                                <li>Drawer & Cupboard Lock</li>
                                <li>Lock Bodies & Cylinder</li>
                                <li>Cylindrical Locks</li>
                                <li>Main Door and Rim Locks</li>
                                <li>Digital Locks</li>
                                <li>Padlocks</li>
                                <li>Mortise Locks</li>
                            </ul>
                        </div>
                        <div className="col" style={{ backgroundColor: "white" }}>
                            <p className='fw-bold'>Door Hardware</p>
                            <ul>
                                <li>Door Closure</li>
                                <li>Towerbolts</li>
                                <li>Aldrops / Latches</li>
                                <li>Mortise Handles</li>
                                <li>Pull Handles</li>
                                <li>Gas Pumps & Lifters</li>
                                <li>Door Accessories</li>
                            </ul>
                        </div>
                        <div className="col" style={{ backgroundColor: "#EAE0D580" }}>
                            <p className='fw-bold'>Glass Fittings & Hardware</p>
                            <ul>
                                <li>Glass Sliding Fittings</li>
                                <li>Glass Spider Fittings</li>
                                <li>Glass Accessories</li>
                                <li>Glass Patch Fittings</li>
                                <li>Floor Springs</li>
                            </ul>
                        </div>
                        <div className="col" style={{ backgroundColor: "white" }}>
                            <p className='fw-bold'>Kitchen Hardware</p>
                            <ul>
                                <li>Pull Outs</li>
                                <li>Wicker Baskets</li>
                                <li>Corner Unit</li>
                                <li>Drawer Organizer</li>
                                <li>Roller Shutter</li>
                            </ul>
                        </div>
                        <div className="col" style={{ backgroundColor: "#EAE0D580" }}>
                            <p className='fw-bold'>Wardrobe Fittigs</p>
                            <ul>
                                <li>Wardrobe Sliding System</li>
                                <li>Wardrobe Fitting</li>
                                <li>Bottom Track System</li>
                                <li>Top Track System</li>
                                <li>Wardrobe Accessories</li>
                            </ul>
                        </div>
                    </div>
                </div>
            }

            <Sidebar sidebarStatus={sidebarStatus} toggleSidebar={toggleSidebar}/>
        </div>
        
    )
}

export default Header