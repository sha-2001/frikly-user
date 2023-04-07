import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style/ProductCard.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faIndianRupeeSign, faSquarePlus } from '@fortawesome/free-solid-svg-icons'


import sofa3 from '../../assets/icons/sofa3.webp'
import sofa2 from '../../assets/icons/sofa2.webp'
import sofa1 from '../../assets/icons/sofa1.webp'

function ProductCard() {

    const [img1, setImg1] = useState(sofa1)
    const [img2, setImg2] = useState(sofa2)
    const [img3, setImg3] = useState(sofa3)

    let swapImages = (index) => {
        if (index == 1) {
            return
        }
        else if (index == 2) {
            let temp = img1;
            setImg1(img2);
            setImg2(temp);
        }
        else if (index == 3) {
            let temp = img1;
            setImg1(img3);
            setImg3(temp);
        }
    }

    return (
        <>
            <Link to='/singleproduct' style={{textDecoration:"none",color:"inherit"}}>
            <div className="product-card-container">
                <div className="product-card-main-image" onClick={()=>{swapImages(1)}}>
                    <img src={img1} alt="Product" />
                </div>
                <div className="product-card-option-image">
                    <div onClick={()=>{swapImages(2)}}>
                        <img src={img2} alt="Product"  />
                    </div>
                    <div onClick={()=>{swapImages(3)}}>
                        <img src={img3} alt="Product"  />
                    </div>
                </div>
                <p className="card-title">Ainsley Rolled Arm Sofa
                    74.01” by Steelside</p>
                <div className="card-pricing">
                    <p className='mrp' style={{ color: "#919191" }}>MRP : <faIndianRupeeSign /> <span style={{ textDecoration: "line-through" }}>17,999</span> <span style={{ backgroundColor: "black", color: "white", padding: "2px" }}>11% off</span> </p>
                    <p><span className='card-current-price'><faIndianRupeeSign /> 15,999</span> <span style={{ fontSize: "13px", fontWeight: "400" }}>/ piece</span></p>
                    <p className='card-free-delivery' ><faTruck/> Get FREE delivery by 24 Jul, Wed</p>
                </div>
                <hr style={{width:"100%",margin:"0",marginTop:"10px",marginBottom:"5px"}} />
                <p> <faSquarePlus/> Compare</p>
            </div>
            </Link>
        </>
    )
}

export default ProductCard