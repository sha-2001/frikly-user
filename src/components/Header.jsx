import React from 'react';
import { Link } from 'react-router-dom';

// importing assets
import cartMobile from '../assets/icons/cart.webp';
import cartDesktop from '../assets/icons/card-desktop.webp'
import heart from '../assets/icons/heart.webp';
import location from '../assets/icons/location.webp';
import person from '../assets/icons/person.webp';
import truck from '../assets/icons/truck.webp';
import frikly from '../assets/icons/frikly.webp';
import lens from '../assets/icons/lens.webp';
import hamburger from '../assets/icons/hamburger.webp';

function Header() {
    return (
        <div className='header'>
            {/* 1 header bar */}
            <div className="header-first container-fluid">
                <div className="header-first-item-1">
                    <img src={truck} alt='truck' />
                    <span >Enter Pincode</span> <span className='sm-hide' style={{ color: '#22333B', opacity: '0.7' }}>Change Pincode</span>
                </div>
                <div className="header-first-item-2">
                    <img src={location} alt='location' />
                    <span>Order Tracking</span>
                </div>
            </div>
            {/* 2 header bar */}
            <div className="header-second">
                <div className='hamburger'>
                    <img src={hamburger} alt='hamburger'></img>
                </div>
                <div className="header-second-item-1">
                    <img src={frikly} alt='frikly' />
                </div>
                <div className="header-second-item-2 sm-hide">
                    <span><Link className='link' to="/">Home</Link></span>
                </div>
                <div className="header-second-item-3 sm-hide">
                    <span><Link className='link' to='/about'>About</Link></span>
                </div>
                <div className="header-second-item-4 ">
                    <input className='search-bar' type="text" placeholder='Search for products...' />
                </div>
                <div className="header-second-item-5">
                    <img src={person} className='sm-hide' alt='person' />
                    <img src={heart} className='sm-hide' alt='heart' />
                    <img className='d-none d-md-block' src={cartDesktop} alt='cart' />
                    <img className='d-block  d-md-none' src={cartMobile} alt='cart' />
                </div>
            </div>
            {/* 3 header bar */}
            <div className="header-third">
                <div className="header-third-item-1">
                    New Arrivals
                </div>
                <div className="header-third-item-2">
                    Chairs
                </div>
                <div className="header-third-item-3">
                    Sofas
                </div>
                <div className="header-third-item-4">
                    Tables
                </div>
                <div className="header-third-item-5">
                    Beds
                </div>
                <div className="header-third-item-6">
                    Storage
                </div>
                <div className="header-third-item-7">
                    Decor
                </div>
                <div className="header-third-item-8">
                    Kitchen
                </div>
                <div className="header-third-item-9">
                    Garden
                </div>
            </div>
        </div>
    )
}

export default Header