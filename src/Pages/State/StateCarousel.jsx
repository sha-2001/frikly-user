import React from 'react';
// import Banner from '../../assets/state/banner.png';
import Banner2 from '../../assets/state/banner2.png';
import Banner3 from '../../assets/state/banner3.png';
import Banner4 from '../../assets/state/banner4.png';
import Banner5 from '../../assets/state/banner5.png';

import BannerMobile1 from '../../assets/state/banner-mobile1.png';
import BannerMobile2 from '../../assets/state/banner-mobile2.png';
import BannerMobile3 from '../../assets/state/banner-mobile3.png';
import BannerMobile4 from '../../assets/state/banner-mobile4.png';

const StateCarousel = () => {

    let screenWidth = window.innerWidth;
    console.log(screenWidth);
    let DesktopBanner = [Banner2,Banner3,Banner4,Banner5];
    let MobileBanner  = [BannerMobile1,BannerMobile2,BannerMobile3,BannerMobile4]
    let useBanner = []
    if(screenWidth <= 768){
        useBanner = MobileBanner;
    }
    else{
        useBanner = DesktopBanner;
    }

    return (
        <div className="state-carousel p-0 mt-2 mt-xl-0 " >
            {/* for desktop view */}
            <div id="stateCarouselIndicators" class="carousel slide " data-bs-ride="carousel" data-bs-interval="3000" >
                <div class="carousel-inner ">
                    <div class="carousel-item active">
                        <img src={useBanner[0]} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={useBanner[1]} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={useBanner[2]} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={useBanner[3]} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev corousel-btn1" type="button" data-bs-target="#stateCarouselIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next corousel-btn2" type="button" data-bs-target="#stateCarouselIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default StateCarousel