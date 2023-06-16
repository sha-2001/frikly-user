import React from 'react'
import './footer.css'

import GooglePlay from '../../assets/Footer/google-play.png';
import AppStore from '../../assets/Footer/app-store.png';
import MobileFrame from '../../assets/Footer/mobile-frame.png';
import Enveloper from '../../assets/Footer/envelope.png';
import Telephone from '../../assets/Footer/telephone.png';
import Whatsapp from '../../assets/Footer/logos_whatsapp-icon.png';
import FriklyWhite from '../../assets/icons/frikly-white.png';
import Twitter from '../../assets/Footer/twitter.png';
import Facebook from '../../assets/Footer/facebook.png';
import Instagram from '../../assets/Footer/instagram.png';
import Pinterest from '../../assets/Footer/pinterest.png';


import { BsChevronRight } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            {/* For Desktop */}
            <div className='footer-container container-fluid d-none d-md-block'>
                <div className="row footer-row-1">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-1 pt-2 d-flex justify-content-left">
                                        <img src={MobileFrame} alt="mobileFrame"
                                            style={{
                                                height: "35px",
                                                width: "21.88px"
                                            }} />
                                    </div>
                                    <div className="col-11">
                                        <p className='text-start mb-0'
                                            style={{
                                                fontSize: "18px",
                                                fontWeight: "500",
                                                color: "#EAE0D5",
                                            }}>Transform Your Home</p>
                                        <p className='text-start'
                                            style={{
                                                fontSize: "16px",
                                                fontWeight: "400",
                                                color: "#EAE0D5"
                                            }}>(Comming Soon)</p>
                                        <div className="row">
                                            <div className="col-4 text-start">
                                                <img src={GooglePlay} alt="playstore"
                                                    style={{
                                                        height: "39px",
                                                        width: "131px"
                                                    }} />
                                            </div>
                                            <div className="col-4 text-start">
                                                <img src={AppStore} alt="appstore"
                                                    style={{
                                                        height: "39px",
                                                        width: "131px"
                                                    }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 pe-5">
                                <div className="row">
                                    <div className="col-3 pt-2 d-flex justify-content-end">
                                        <img src={Enveloper} alt="envelope" style={{
                                            height: "23.13px",
                                            width: "33.69px"
                                        }} />
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <p className='text-start'
                                                style={{
                                                    fontSize: "18px",
                                                    fontWeight: "500",
                                                    color: "#EAE0D5"
                                                }}>Get special discount <br /> on your box</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-10">
                                                <input className='footer-email-input' type="text" placeholder='Email Address' />
                                            </div>
                                            <div className="col-2 d-flex justify-content-center align-items-center" style={{
                                                backgroundColor: "#EAE0D5",
                                                marginLeft: "-3px",
                                                borderTopRightRadius: "4px",
                                                borderBottomRightRadius: "4px"
                                            }}>
                                                <BsChevronRight />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 ps-4 pe-5">
                                <div className="row">
                                    <div className="col-3 ">
                                        <img src={Telephone} alt="" style={{
                                            width: "28px",
                                            hight: "30.8px",
                                            marginLeft: "40px"
                                        }} />
                                    </div>
                                    <div className="col-9">
                                        <div className="row">
                                            <p className='text-start mb-0'
                                                style={{
                                                    fontSize: "18px",
                                                    fontWeight: "500",
                                                    color: "#EAE0D5"
                                                }}>For Any Help, Contack Us</p>
                                            <p className='text-start'
                                                style={{
                                                    fontSize: "16px",
                                                    fontWeight: "400",
                                                    color: "#EAE0D5"
                                                }}>(Monday to Saturday, 10AM to 7pm)</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-1">
                                                <img src={Whatsapp} alt="" style={{
                                                    width: "20px",
                                                    height: "20px"
                                                }} />
                                            </div>
                                            <div className="col-11">
                                                <p className='text-start'
                                                    style={{
                                                        fontSize: "16px",
                                                        fontWeight: "400",
                                                        color: "#EAE0D5"
                                                    }}>+91-8035388980</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer-row-2 ps-5">
                    <div className="container-fluid row">
                        <div className="col-4">
                            <div className="row">
                                <img src={FriklyWhite} alt="" style={{
                                    height: "51px",
                                    width: "173px"
                                }} />
                            </div>
                            <div className="row">
                                <p className='text-start ms-2  '
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        color: "#EAE0D5"
                                    }}>Frikly is a one-stop destination for <br />
                                    everything a home needs and <br />
                                    assists anyone, anywhere, to get <br />
                                    the feel just like your home.</p>
                            </div>
                            <div className="row">
                                <div className="col-2 d-flex justify-content-start ms-2">
                                    <img className='footer-sm-icons' src={Twitter} alt="twitter" />
                                </div>
                                <div className="col-2 d-flex justify-content-start">
                                    <img className='footer-sm-icons' src={Facebook} alt="" />
                                </div>
                                <div className="col-2 d-flex justify-content-start">
                                    <img className='footer-sm-icons' src={Instagram} alt="" />
                                </div>
                                <div className="col-2 d-flex justify-content-start">
                                    <img className='footer-sm-icons' src={Pinterest} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row">
                                <p className='text-start'
                                    style={{
                                        fontWeight: "600",
                                        fontSize: "20",
                                        color: "#EAE0D5"
                                    }}>QUICK LINK</p>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="row"><p className='footer-page-links text-start'>Track Your Order</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>Shop All</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>About us</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>Blog</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>Terms of use</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>Careers</p></div>
                                </div>
                                <div className="col">
                                    <div className="row"><p className='footer-page-links text-start'>Track Your Order</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>Shop All</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>About us</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>Blog</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>Terms of use</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>Careers</p></div>
                                </div>
                                <div className="col">
                                    <div className="row"><p className='footer-page-links text-start'>Track Your Order</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>Shop All</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>About us</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>Blog</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>Terms of use</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>Careers</p></div>
                                </div>
                                <div className="col">
                                    <div className="row"><p className='footer-page-links text-start'>Track Your Order</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>Shop All</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>About us</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>Blog</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>Terms of use</p></div>
                                    <div className="row"><p className='footer-page-links text-start'>Careers</p></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer-row-3">
                    <hr style={{
                        color: "#9B9B9B"
                    }} />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <p className='footer-btm-text1 text-start ps-5'>© Copyright 2023 by Malu Technologies Pvt Ltd</p>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col-3 offset-5"><p className='footer-btm-text2'>Privacy Policy</p></div>
                                    <div className="col-3"><p className='footer-btm-text2'>Terms & Conditions</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* For Mobile */}
            <div className="container-fluid footer-container-mobile d-md-none">
                <div className="row footer-row-mobile-1">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-1  pt-2 d-flex justify-content-left">
                                <img className='ms-2' src={MobileFrame} alt="mobileFrame"
                                    style={{
                                        height: "35px",
                                        width: "21.88px"
                                    }} />
                            </div>
                            <div className="col-11 ps-5 pe-5">
                                <p className='text-start mb-0'
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        color: "#EAE0D5",
                                    }}>Transform Your Home</p>
                                <p className='text-start'
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        color: "#EAE0D5"
                                    }}>(Comming Soon)</p>
                                <div className="row">
                                    <div className="col-6 text-start">
                                        <img src={GooglePlay} alt="playstore"
                                            style={{
                                                height: "39px",
                                                width: "131px"
                                            }} />
                                    </div>
                                    <div className="col-6 text-start">
                                        <img src={AppStore} alt="appstore"
                                            style={{
                                                height: "39px",
                                                width: "131px"
                                            }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "44px" }}>
                            <div className="col-2 d-flex justify-content-start">
                                <img src={Enveloper} alt="envelope" style={{
                                    height: "23.13px",
                                    width: "33.69px",
                                    marginTop: "5px"
                                }} />
                            </div>
                            <div className="col-9">
                                <div className="row">
                                    <p className='text-start'
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            color: "#EAE0D5"
                                        }}>Get special discount <br /> on your box</p>
                                </div>
                                <div className="row">
                                    <div className="col-9">
                                        <input className='footer-email-input-mobile' type="text" placeholder='Email Address' />
                                    </div>
                                    <div className="col-3 d-flex justify-content-center align-items-center" style={{
                                        backgroundColor: "#EAE0D5",
                                        marginLeft: "17px",
                                        borderTopRightRadius: "4px",
                                        borderBottomRightRadius: "4px",
                                        width: "50px",
                                        height: "51px",
                                        borderLeft: "none"
                                    }}>
                                        <BsChevronRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "44px" }}>
                            <div className="col-2 ">
                                <img src={Telephone} alt="" style={{
                                    width: "28px",
                                    hight: "30.8px",
                                    marginRight: "40px"
                                }} />
                            </div>
                            <div className="col-9">
                                <div className="row">
                                    <p className='text-start mb-0'
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            color: "#EAE0D5"
                                        }}>For Any Help, Contack Us</p>
                                    <p className='text-start'
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: "400",
                                            color: "#EAE0D5"
                                        }}>(Monday to Saturday, 10AM to 7pm)</p>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                        <img src={Whatsapp} alt="" style={{
                                            width: "20px",
                                            height: "20px"
                                        }} />
                                    </div>
                                    <div className="col-11">
                                        <p className='text-start'
                                            style={{
                                                fontSize: "16px",
                                                fontWeight: "400",
                                                color: "#EAE0D5"
                                            }}>+91-8035388980</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer-row-mobile-2">
                    <div className="container-fluid">
                        <div className="row">
                            <img src={FriklyWhite} alt="" style={{
                                height: "51px",
                                width: "173px"
                            }} />
                        </div>
                        <div className="row">
                            <p className='text-start ms-2  '
                                style={{
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    color: "#FFF"
                                }}>Frikly is a one-stop destination for <br />
                                everything a home needs and <br />
                                assists anyone, anywhere, to get <br />
                                the feel just like your home.</p>
                        </div>
                        <div className="row">
                            <div className="col-2 d-flex justify-content-start ms-2">
                                <img className='footer-sm-icons' src={Twitter} alt="twitter" />
                            </div>
                            <div className="col-2 d-flex justify-content-start">
                                <img className='footer-sm-icons' src={Facebook} alt="" />
                            </div>
                            <div className="col-2 d-flex justify-content-start">
                                <img className='footer-sm-icons' src={Instagram} alt="" />
                            </div>
                            <div className="col-2 d-flex justify-content-start">
                                <img className='footer-sm-icons' src={Pinterest} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid" style={{marginTop:"44px",color:"#FFF"}}>
                        <div className="row">
                            <p className='text-start ms-2'
                             style={{
                                fontSize:"20px",
                                fontWeight:"600"
                            }}>QUICK LINK</p>
                        </div>
                        <div className="row mt-3">
                            <div className="col-5">
                                <div className="row">
                                    <p className="ms-2 text-start">Track Order</p>
                                </div>
                                <div className="row">
                                    <p className="ms-2 text-start">Shop All</p>
                                </div>
                                <div className="row">
                                    <p className="ms-2 text-start">About Us</p>
                                </div>
                                <div className="row">
                                    <p className="ms-2 text-start">Blog </p>
                                </div>
                                <div className="row">
                                    <p className="ms-2 text-start">Terms Of Use</p>
                                </div>
                                <div className="row">
                                    <p className="ms-2 text-start">Career</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <p className="text-start">Hardware</p>
                                </div>
                                <div className="row">
                                    <p className="text-start">Sanitaryware & Bath</p>
                                </div>
                                <div className="row">
                                    <p className="text-start">Home appliances </p>
                                </div>
                                <div className="row">
                                    <p className="text-start">Brands </p>
                                </div>
                                <div className="row">
                                    <p className="text-start">Support</p>
                                </div>
                                <div className="row">
                                    <p className="text-start">Shipping Faq</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer-row-mobile-3" style={{paddingTop:"15px"}}>
                    <hr style={{color:"#9B9B9B"}}/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4"><p className='mb-2' style={{color:"#FFFFFF",fontSize:"14px",fontWeight:"400"}}>Privacy Policy</p></div>
                            <div className="col-5"><p className='mb-2' style={{color:"#FFFFFF",fontSize:"14px",fontWeight:"400"}}>Terms & Conditions</p></div>
                            <div className="col-3"><p className='mb-2' style={{color:"#FFFFFF",fontSize:"14px",fontWeight:"400"}}>Lorem</p></div>
                        </div>
                        <div className="row">
                            <p style={{color:"#FFFFFF",fontSize:"14px",fontWeight:"400"}}>© Copyright 2023 by Malu Technologies Pvt Ltd</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer