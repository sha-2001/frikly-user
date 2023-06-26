import React from 'react'
import './footer.css'

import Phone from '../../assets/Footer/mobile-frame.png';
import Mail from '../../assets/Footer/envelope.png';
import Telephone from '../../assets/Footer/telephone.png';
import PlayStore from '../../assets/Footer/google-play.png';
import AppStore from '../../assets/Footer/app-store.png';
import FriklyWhite from '../../assets/Footer/frikly-white.png';
import Twitter from '../../assets/Footer/twitter.png';
import Facebook from '../../assets/Footer/facebook.png';
import Instagram from '../../assets/Footer/instagram.png';
import Pinterest from '../../assets/Footer/pinterest.png';
import Whatsapp from '../../assets/Footer/logos_whatsapp-icon.png';
import RightArrow from '../../assets/Footer/right-arrow.png';


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-row1">
                <div className="footer-transform">
                    <div className="footer-row1-icons1">
                        <img src={Phone} alt="" />
                    </div>
                    <div className='footer-transform-content'>
                        <p className='footer-text1'>Transform your Home </p>
                        <p className='footer-text2'>(Coming soon)</p>
                        <div className='footer-app-platform'>
                            <div>
                                <img src={PlayStore} alt="" />
                            </div>
                            <div>
                                <img src={AppStore} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer-inbox">
                    <div className="footer-row1-icons2">
                        <img src={Mail} alt="" />
                    </div>
                    <div className='footer-inbox-content'>
                        <p className="footer-text1">Get special discount</p>
                        <p className="footer-text1">on your inbox</p>
                        <div className='email-container'>
                            <div className='email-input-container'><input type="text" name="" id="" placeholder='Email address' /></div>
                            <div className='email-arrow'>
                                <img src={RightArrow} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-contact">
                    <div className="footer-row1-icons3">
                        <img src={Telephone} alt="..." />
                    </div>
                    <div className='footer-contact-content'>
                        <p className="footer-text1">For Any Help, Contact Us</p>
                        <p className="footer-text2">(Monday to Saturday, 10AM to 7PM)</p>
                        <div>
                            <div className='footer-whatsapp'>
                                <img src={Whatsapp} alt="" />
                            </div>
                            <p className='whatsapp-text'>+91-8035388980</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-row2">
                <div className="footer-row2-brand">
                    <div className='footer-frikly-logo'>
                        <img src={FriklyWhite} alt="" />
                    </div>
                    <p className="footer-frikly-text">Frikly is a one-stop destination for <br />
                        everything a home needs and <br />
                        assists anyone, anywhere, to get <br />
                        the feel just like your home.</p>
                    <div className='footer-sm-links'>
                        <div><img src={Twitter} alt="" /></div>
                        <div><img src={Facebook} alt="" /></div>
                        <div><img src={Instagram} alt="" /></div>
                        <div><img src={Pinterest} alt="" /></div>
                    </div>
                </div>
                <div className="footer-row2-quicklink">
                    <p className="footer-quicklink-header">QUICK LINK</p>
                    <div className="footer-quicklink-container">
                        <div className='footer-quicklink1'>
                            <ul>
                                <li>Track Your Order</li>
                                <li>Shop All</li>
                                <li>About us</li>
                                <li>Blog</li>
                                <li>Terms of use</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className='footer-quicklink2'>
                            <ul>
                                <li>Hardware</li>
                                <li>Sanitaryware & Bath</li>
                                <li>Home appliances </li>
                                <li>Brands</li>
                                <li>Support</li>
                                <li>Shipping Faq</li>
                            </ul>
                        </div>
                        <div className='footer-quicklink3'>
                            <ul>
                                <li>Track Your Order</li>
                                <li>Shop All</li>
                                <li>About us</li>
                                <li>Blog</li>
                                <li>Terms of use</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className='footer-quicklink4'>
                            <ul>
                                <li>Hardware</li>
                                <li>Sanitaryware & Bath</li>
                                <li>Home appliances </li>
                                <li>Brands</li>
                                <li>Support</li>
                                <li>Shipping Faq</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-row3">
                <div className="footer-row3-container1">
                    <p>© Copyright 2023 by Malu Technologies Pvt Ltd</p>
                </div>
                <div className="footer-row3-container2">
                    <p>Privacy Policy <span>Terms & Conditions</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer