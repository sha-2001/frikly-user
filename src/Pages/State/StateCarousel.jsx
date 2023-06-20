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
    return (
        <div className="state-carousel p-0 mt-2 mt-xl-0 " >
            <div id="stateCarouselIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" >
                <div class="carousel-inner ">
                    <div class="carousel-item active">
                        <img src={Banner2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Banner3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Banner4} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Banner5} class="d-block w-100" alt="..." />
                    </div>
                </div>
                {/* <div class="carousel-inner  d-xl-none">
                    <div class="carousel-item active">
                        <img src={BannerMobile1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={BannerMobile2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={BannerMobile3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={BannerMobile4} class="d-block w-100" alt="..." />
                    </div>
                </div> */}
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