import React from 'react'

import { useState } from 'react'
import './style/SingleProduct.css'

import sofa3 from '../../assets/icons/sofa3.webp'
import sofa2 from '../../assets/icons/sofa2.webp'
import sofa1 from '../../assets/icons/sofa1.webp'

let ProductCard = () => {
  
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
            </div>
      
        </div>
    </>
)

}

let SimilarProduct = () => {
  return(
    <>
      <div className="similar-products">
        <h2>Similar Products</h2>
        <div className="similar-products-container">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </>
  )
}

let RecentlyViewed = () => {
  return(
    <>
      <div className="similar-products">
        <h2>Recently Viewed</h2>
        <div className="similar-products-container">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </>
  )
}

function SingleProduct() {
  return (
    <div>

      <p></p>

      <SimilarProduct/>
      <RecentlyViewed/>
    </div>
  )
}

export default SingleProduct