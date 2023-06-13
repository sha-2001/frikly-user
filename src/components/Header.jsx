import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import MainMenu from './MainMenu';
import Cart from './Cart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {SlMagnifier} from 'react-icons/sl';
import { BsCart3 , BsPerson} from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

// importing assets
import cartMobile from '../assets/icons/cart.webp';
import cartDesktop from '../assets/icons/card-desktop.webp'
import location from '../assets/icons/location.webp';
// import person from '../assets/icons/person.webp';
import truck from '../assets/icons/truck.webp';
import frikly from '../assets/icons/frikly-logo.webp';
import Catalogue from '../assets/icons/catalogue.gif';


function Header() {

    const [cartShow, setCartShow] = useState(false);
    let [showCategory, setShowCategory] = useState(false); // keep check whether category prompt is open or not 

    // const handleHover = () => {
    //     // function to show category prompt
    //     setShowCategory(!showCategory);
    // }

    let cartOpen = () => setCartShow(true);
    let cartClose = () => setCartShow(false);

    return (
        <div className='header'>
            {/* 1 header bar */}
            <div className="header-first container-fluid">
                <div className="header-first-item-1">
                <img src={location} alt='location' />
                    <span >Enter Pincode</span> <span className='sm-hide' style={{ color: '#22333B', opacity: '0.7',fontSize : "1rem" }}>Change Pincode</span>
                </div>
                <div className="header-first-item-2 ">
                    <img src={truck} alt='truck' />
                    <span>Order Tracking</span>
                </div>
            </div>
            {/* 2 header bar */}
            <div className="header-second container-fluid">
                <div className="col-md-2 d-flex justify-content-center">
                    <img src={frikly} style={{ "height": "80px" }} alt="frikly" />
                </div>
                <div className="col  normal-bold">Brands</div>
                <div className="col  normal-bold">About Us</div>
                <div className="col  normal-bold me-5">Get Quote</div>
                <div className="col-4 ">
                    <div className="row ">
                        <div className="col-10 p-1 d-flex align-items-center ">
                            <input className='header-searchbar' placeholder='Search' type="text" />
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center fw-bold"
                         style={{
                            'backgroundColor':"#22333B",
                            "color":"white",
                            "borderRadius" : "50%",
                            "height" : "50px",
                            "width" : "50px"
                            }}>
                            <SlMagnifier className='fs-5 '/>
                        </div>
                    </div>
                </div>
                <div className="col-3 ps-5 d-flex justify-content-end">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="row header2-logos d-flex align-items-center ">
                                    <img className='ms-3' src={Catalogue} style={{"height" : "35px"}}  alt="" />
                                </div>
                                <div className="row">
                                    <p className='logo-text' style={{color:'black'}}>Catalogue</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row d-flex justify-content-center">
                                    <BsCart3 className='header2-logos' />
                                </div>
                                <div className="row">
                                    <p className='logo-text'>Cart</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row d-flex justify-content-center">
                                    <AiOutlineHeart className='header2-logos'/>
                                </div>
                                <div className="row">
                                    <p className='logo-text'>Wishlist</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row d-flex justify-content-center">
                                    <BsPerson className='header2-logos' />
                                </div>
                                <div className="row">
                                    <p className='logo-text'>Account</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            {/* 3 header bar */}
            <div className="header-third container-fluid">
                <div className="row" style={{"height":"100%"}}>
                    <div className="col-2 subcat subcat-hover d-flex align-items-center justify-content-center"  onMouseEnter={()=>setShowCategory(true)} onMouseLeave={()=>{setShowCategory(false)}}>Sanitaryware & Bath</div>
                    <div className="col subcat subcat-hover d-flex align-items-center justify-content-center" onMouseEnter={()=>setShowCategory(true)} onMouseLeave={()=>{setShowCategory(false)}}>Hardware</div>
                    <div className="col-2 subcat subcat-hover d-flex align-items-center justify-content-center" onMouseEnter={()=>setShowCategory(true)} onMouseLeave={()=>{setShowCategory(false)}}>Home Appliances</div>
                    <div className="col-2 subcat subcat-hover d-flex align-items-center justify-content-center" onMouseEnter={()=>setShowCategory(true)} onMouseLeave={()=>{setShowCategory(false)}}>Laminates and Mica</div>
                    <div className="col subcat subcat-hover d-flex align-items-center justify-content-center" onMouseEnter={()=>setShowCategory(true)} onMouseLeave={()=>{setShowCategory(false)}}>Beds</div>
                    <div className="col subcat subcat-hover d-flex align-items-center justify-content-center" onMouseEnter={()=>setShowCategory(true)} onMouseLeave={()=>{setShowCategory(false)}}>Storage</div>
                    <div className="col subcat subcat-hover d-flex align-items-center justify-content-center" onMouseEnter={()=>setShowCategory(true)} onMouseLeave={()=>{setShowCategory(false)}}>Decor</div>
                    <div className="col subcat subcat-hover d-flex align-items-center justify-content-center" onMouseEnter={()=>setShowCategory(true)} onMouseLeave={()=>{setShowCategory(false)}}>Kitchen</div>
                </div>
            </div>
            {showCategory 
            &&  
            <div className="category-div container-fluid" onMouseEnter={()=>setShowCategory(true)} onMouseLeave={()=>setShowCategory(false)}>
                <div className="row" style={{height:"100%"}}>
                    <div className="col"  style={{backgroundColor:"white"}}>
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
                    <div className="col" style={{backgroundColor:"#EAE0D580"}}>
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
                    <div className="col" style={{backgroundColor:"white"}}>
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
                    <div className="col" style={{backgroundColor:"#EAE0D580"}}>
                        <p className='fw-bold'>Glass Fittings & Hardware</p>
                        <ul>
                            <li>Glass Sliding Fittings</li>
                            <li>Glass Spider Fittings</li>
                            <li>Glass Accessories</li>
                            <li>Glass Patch Fittings</li>
                            <li>Floor Springs</li>
                        </ul>
                    </div>
                    <div className="col" style={{backgroundColor:"white"}}>
                        <p className='fw-bold'>Kitchen Hardware</p>
                        <ul>
                            <li>Pull Outs</li>
                            <li>Wicker Baskets</li>
                            <li>Corner Unit</li>
                            <li>Drawer Organizer</li>
                            <li>Roller Shutter</li>
                        </ul>
                    </div>
                    <div className="col" style={{backgroundColor:"#EAE0D580"}}>
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
        </div>
    )
}

export default Header