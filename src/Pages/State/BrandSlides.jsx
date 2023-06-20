import React from 'react'

import FurnitureBrands1 from '../../assets/state/Furniture-brands1.png'
import FurnitureBrands2 from '../../assets/state/Furniture-brands2.png'
import PlumbingBrands1 from '../../assets/state/Plumbing-brands1.png'
import ElectronicsBrands1 from '../../assets/state/Electronics-brands1.png'


const BrandSlides = ({ brand }) => {

    let furnitures = [FurnitureBrands1, FurnitureBrands2]
    let plumbing = [PlumbingBrands1, PlumbingBrands1]
    let electronics = [ElectronicsBrands1, ElectronicsBrands1]
    let useBrand = []

    switch (brand) {
        case 'furniture':
            useBrand = furnitures;
            break;
        case 'plumbing':
            useBrand = plumbing;
            break;
        case 'electronics':
            useBrand = electronics
            break;
    }

    return (
        <div className='brand-slide'>
            <p className='brands-head'>Popular <span>Brands</span> We deal with.</p>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={useBrand[0]} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={useBrand[1]} class="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandSlides