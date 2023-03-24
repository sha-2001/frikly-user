import React from 'react'

import heroBannerOne from '../../assets/icons/hero-banner-1.webp';
import heroBannerTwo from '../../assets/icons/hero-banner-2.webp'
import heroBannerThree from '../../assets/icons/hero-banner-3.webp';
import heroBannerFour from '../../assets/icons/hero-banner-4.webp';
import heroBannerFive from '../../assets/icons/hero-banner-5.webp';

function HeroBanner() {
    return (
        <>
            {/* For medium and large screen */}
            <div className='container-fluid hero-banner p-lg-5 d-none d-md-block'>
                <div className="row ">
                    <div className="col-7 ps-lg-5">
                        <img className='hero-banner-1' src={heroBannerOne} alt="Frikly" />
                    </div>
                    <div className="col-5 ps-lg-3">
                        <div className="row mb-4 ">
                            <div className="col d-flex justify-content-start">
                                <img className='hero-banner-2' src={heroBannerTwo} alt="Frikly" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-start">
                                <img className='hero-banner-3' src={heroBannerThree} alt="Frikly" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* For small screen */}
            <div className="container-fluid hero-banner d-block d-md-none mt-2">
                <div className="row p-2">
                    <div className="col">
                        <img className='hero-banner-4' src={heroBannerFour} alt="Frikly" />
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col">
                        <img className='hero-banner-5' src={heroBannerFive} alt="Frikly" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBanner