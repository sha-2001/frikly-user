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
                            'backgroundColor':"black",
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
                    <div className="col-2 d-flex align-items-center justify-content-center">Sanitaryware & Bath</div>
                    <div className="col d-flex align-items-center justify-content-center">Hardware</div>
                    <div className="col-2 d-flex align-items-center justify-content-center">Home Appliances</div>
                    <div className="col-2 d-flex align-items-center justify-content-center">Laminates and Mica</div>
                    <div className="col d-flex align-items-center justify-content-center">Beds</div>
                    <div className="col d-flex align-items-center justify-content-center">Storage</div>
                    <div className="col d-flex align-items-center justify-content-center">Decor</div>
                    <div className="col d-flex align-items-center justify-content-center">Kitchen</div>
                </div>
            </div>
        </div>
    )
}

export default Header