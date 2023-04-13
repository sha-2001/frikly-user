import React from 'react'

import { useState } from 'react'
import './style/SingleProduct.css'

import sofa3 from '../../assets/icons/sofa3.webp'
import sofa2 from '../../assets/icons/sofa2.webp'
import sofa1 from '../../assets/icons/sofa1.webp'

import singleSofa1 from '../../assets/singleproduct/Sofa1.webp'
import singleSofa2 from '../../assets/singleproduct/Sofa2.webp'
import singleSofa3 from '../../assets/singleproduct/Sofa3.webp'
import singleSofa4 from '../../assets/singleproduct/Sofa4.webp'
import singleSofa5 from '../../assets/singleproduct/Sofa5.webp'
import singleSofa6 from '../../assets/singleproduct/Sofa6.webp'
import singleSofa7 from '../../assets/singleproduct/Sofa7.webp'
import delivery from '../../assets/singleproduct/delivery.webp'
import needHelp from '../../assets/singleproduct/need-help.webp'
import cod from '../../assets/singleproduct/cod.webp'
import truck from '../../assets/singleproduct/truck.webp'
import replacement from '../../assets/singleproduct/replacement.webp'
import comfort from '../../assets/singleproduct/extreme-comfort.webp'
import water from '../../assets/singleproduct/water-resistant.webp'
import warranty from '../../assets/singleproduct/warranty.webp'
import share from '../../assets/singleproduct/share.webp'
import whatsapp from '../../assets/singleproduct/whatsapp.webp'
import instagram from '../../assets/singleproduct/instagram.webp'
import description from '../../assets/singleproduct/description.webp'
import dimension from '../../assets/singleproduct/dimensions.webp'
import cushions from '../../assets/singleproduct/cushions.webp'


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
        <div className="product-card-main-image" onClick={() => { swapImages(1) }}>
          <img src={img1} alt="Product" />
        </div>
        <div className="product-card-option-image">
          <div onClick={() => { swapImages(2) }}>
            <img src={img2} alt="Product" />
          </div>
          <div onClick={() => { swapImages(3) }}>
            <img src={img3} alt="Product" />
          </div>
        </div>
        <p className="card-title">Ainsley Rolled Arm Sofa
          74.01” by Steelside</p>
        <div className="card-pricing">
          <p className='mrp' style={{ color: "#919191" }}>MRP : <faIndianRupeeSign /> <span style={{ textDecoration: "line-through" }}>17,999</span> <span style={{ backgroundColor: "black", color: "white", padding: "2px" }}>11% off</span> </p>
          <p><span className='card-current-price'><faIndianRupeeSign /> 15,999</span> <span style={{ fontSize: "13px", fontWeight: "400" }}>/ piece</span></p>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <button className='btn' style={{ backgroundColor: "lightgray" }}> Add to Cart</button>
        </div>
      </div>
    </>
  )

}

let SimilarProduct = () => {
  return (
    <>
      <div className="similar-products">
        <h2>Similar Products</h2>
        <div className="similar-products-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  )
}

let RecentlyViewed = () => {
  return (
    <>
      <div className="similar-products">
        <h2>Recently Viewed</h2>
        <div className="similar-products-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  )
}

function SingleProduct() {

  const [image1, setImage1] = useState(singleSofa1)
  const [image2, setImage2] = useState(singleSofa2)
  const [image3, setImage3] = useState(singleSofa3)
  const [image4, setImage4] = useState(singleSofa4)
  const [image5, setImage5] = useState(singleSofa5)
  const [image6, setImage6] = useState(singleSofa6)
  const [image7, setImage7] = useState(singleSofa7)


  let swapImages = (index) => {
    if (index == 1) {
      return
    }
    else if (index == 2) {
      let temp = image1;
      setImage1(image2);
      setImage2(temp);
    }
    else if (index == 3) {
      let temp = image1;
      setImage1(image3);
      setImage3(temp);
    }
    else if (index == 4) {
      let temp = image1;
      setImage1(image4);
      setImage4(temp);
    }
    else if (index == 5) {
      let temp = image1;
      setImage1(image5);
      setImage5(temp);
    }
    else if (index == 6) {
      let temp = image1;
      setImage1(image6);
      setImage6(temp);
    }
    else if (index == 7) {
      let temp = image1;
      setImage1(image7);
      setImage7(temp);
    }
  }

  return (
    <div className='single-product-page'>
      <p className='single-product-nav'>Home > Living Room > Sofas > Premium Leatherette Soffa 3 Seater</p>
      <div className="single-product-container">
        <div className="product-image-section ">
          <div className="main-image">
            <div><img src={image1} alt="" /></div>
          </div>
          <div className="option-images">
            <div><img src={image2} alt="frickly" /></div>
            <div><img src={image3} alt="frickly" /></div>
            <div><img src={image4} alt="frickly" /></div>
            <div><img src={image5} alt="frickly" /></div>
            <div><img src={image6} alt="frickly" /></div>
            <div><img src={image7} alt="frickly" /></div>
          </div>
        </div>
        <div className="product-details-section">
          <p className="single-product-title">
            Dorna Premium Leatherette Rolled arm Sofa, 74.01” 3 Seater, Light Brown
          </p>
          <p>
            <span className='single-mrp' >MRP : <span className='single-mrp-digit'> 17,999</span></span> <span className='single-off' >11% off</span>
            <br />
            <span className='single-price' >15,999.00</span> <span className='single-per-piece'> / piece</span>
            <br />
            <span className='single-on-sale'>ON SALE</span>
          </p>
          <p>
            <span className='single-object-key'>Brand Name :</span> <span className='single-object-value'>None</span> <br />
            <span className='single-object-key'>Size :</span> <span className='single-object-value'>8 feet x 16 feet</span> <br />
            <span className='single-object-key'>Set Available :</span> <span className='single-object-value'>150</span>
          </p>
          <button className='btn single-get-quotes'>Get Quote</button>
          <p className='single-free-delivery'> <img src={delivery} alt="frickly" /> Eligible for free 1 day delivery</p>
          <div className="need-help"><img src={needHelp} alt="frickly" /></div>
          <div className='single-compare-products mt-5'>
            <input type="checkbox" />
            <span>Comapre products</span>
          </div>
          <div className='single-share'>
            <div className='single-share-item1'>Share :</div>
            <div className='single-share-item2'> <img src={whatsapp} alt="frickly" /> Whatsapp</div>
            <div className='single-share-item3'> <img src={instagram} alt="frickly" /> Instagram</div>
            <div className='single-share-item4'> <img src={share} alt="frickly" /> Share</div>
          </div>
          <div className='single-services mt-5'>
            <div className='single-cod'> <img src={cod} alt="frickly" className='icon' /> <br /> Pay On Delivery Available</div>
            <div className='single-safe-delivery'> <img src={truck} alt="frickly" className='icon' /> <br /> Safe Delivery by Frickly</div>
            <div className='single-replacement'> <img src={replacement} alt="frickly" className='icon' /> <br /> 10 days replacement</div>
          </div>
          <div>
            <div className='single-check-pincode'>
              <input type="text" placeholder='Enter pincode' />
              <span>Check</span>
            </div>
            <p className='single-get-it-deliver'> <span className='single-get-it-deliver-item1' >Get it delivered between </span> <span className='single-get-it-deliver-item2' >Sat, Jun 18 - Mon, Jun 20</span> </p>
            <p className='single-free-shipping'>Free Shipping on all orders</p>
          </div>
          <hr className='mt-5 mb-4' />
          <h3 className='single-product-overview '>Product Overview</h3>
          <div className='single-product-overview-container'>
            <div className='single-product-overview-item1'> <img src={comfort} alt="frickly" /> Extreme Comfort</div>
            <div className='single-product-overview-item2'> <img src={water} alt="frickly" /> Water Resistant</div>
            <div className='single-product-overview-item3'> <img src={warranty} alt="frickly" /> 1 year Warranty</div>
            <div className='single-product-overview-item4'> <img src={cushions} alt="frickly" /> Removable Cushions</div>
          </div>
          <div className='single-description-container'>
            <p className='single-description-heading'> <img src={description} alt="frickly" className='me-2' /> Description</p>
            <p className='single-description-text'>This premium leather sofa is classy and minimal and enhances the aesthetic appearance of modern living rooms. It is a three-seater spacious sofa that provides a great blend of comfort and luxury. The sofa has a contemporary feel to it, and is an ideal match for most interior decor themes. This sofa is fully upholsteres with superior quality leatherette that feels soft to the touch. </p>
          </div>
          <hr />
          <div className='single-dimensions'>
            <span> <img src={dimension} alt="frickly" className='me-2' /> Dimensions</span>
          </div>
          <hr />
          <div className='single-shipping-details'>
            <span> <img src={truck} alt="frickly" style={{ widows: "25px", height: "25px" }} className='me-2' /> Shipping Details</span>
          </div>
        </div>
      </div>

      <hr className='mt-5' />

      <SimilarProduct />
      <RecentlyViewed />
    </div>
  )
}

export default SingleProduct