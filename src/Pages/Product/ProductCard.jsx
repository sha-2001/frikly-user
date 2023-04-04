import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faIndianRupeeSign, faSquarePlus } from '@fortawesome/free-solid-svg-icons'


import sofa3 from '../../assets/icons/sofa3.webp'
import sofa2 from '../../assets/icons/sofa2.webp'
import sofa1 from '../../assets/icons/sofa1.webp'

function ProductCard() {

    const [img1,setImg1] = useState(sofa1)
    const [img2,setImg2] = useState(sofa2)
    const [img3,setImg3] = useState(sofa3)

    let swapImages = (index) => {
        // [imageArray[0],imageArray[index]] = [imageArray[index],imageArray[0]]
        console.log('Inside swapImages');
        if(index == 1){
            return
        }
        else if (index == 2){
            let temp = img1;
            setImg1(img2);
            setImg2(temp);
        }
        else if(index == 3){
            let temp = img1;
            setImg1(img3);
            setImg3(temp);
        }
    }

    return (
        <div className='product-card container-fluid'>
            <div className="row main-image-container" onClick={()=>{swapImages(1)}}>
                <img className='main-image' src={img1} alt="sofa" />
            </div>
            <div className="row pt-2 ps-3 mb-2">
                <div className="col-3 me-2 option-image-container" onClick={()=>{swapImages(2)}} >
                    <img className='option-image' src={img2} alt="sofa" />
                </div>
                <div className="col-3 option-image-container" onClick={()=>{swapImages(3)}} >
                    <img className='option-image' src={img3} alt="sofa" />
                </div>
            </div>
            <div className="row mb-2">
                <p className='card-title'>Ainsley Rolled Arm Sofa 74.01” by Steelside</p>
            </div>
            <div className="row ">
                <p className='mrp m-0'>MRP : <span><FontAwesomeIcon icon={faIndianRupeeSign} /> 17,999</span> <span className='text-cross p-1 ms-2'>11% off</span></p>
                <p className='m-0'><span className='per-piece-digits'><FontAwesomeIcon icon={faIndianRupeeSign} /> 15,999</span>  <span className='per-piece-text'> / piece</span></p>
            </div>
            <div className="row">
                <p className='card-delivery'><FontAwesomeIcon icon={faTruck} /> Get FREE delivery by 24 Jul, Wed</p>
            </div>
            <div className="row compare">
                <div className="col-6 offset-3 pt-2 ">
                <p><FontAwesomeIcon icon={faSquarePlus} size='lg' /> Compare </p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard