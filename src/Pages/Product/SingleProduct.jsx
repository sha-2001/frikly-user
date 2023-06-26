import React from 'react';
import { SingleProductPageImages } from './ProductImages';
import {
  AddToCart,
  AlsoSee,
  BestPrice,
  BuyOnWhatsapp,
  Description,
  HaveAQuestion,
  MainImage,
  NeedHelp,
  SingleMRPandPrice,
  SingleProductDetailSection,
  SingleProductImageSection,
  SingleProductName,
  SingleProductPageContainer
} from './ProductPageStyles';

const SingleProduct = () => {
  return (
    <>
      <SingleProductPageContainer>

        <SingleProductImageSection>

          <MainImage>
            <img src={SingleProductPageImages.SingleProductImage} alt="..." />
          </MainImage>

          <AlsoSee>

          </AlsoSee>

        </SingleProductImageSection>

        <SingleProductDetailSection>

          <SingleProductName>
            <p className='product-name'>Dorna Premium Leatherette Rolled arm Sofa, 74.01” 3 Seater, Light Brown
              <span className="pin">
                <img src={SingleProductPageImages.Pin} alt="" />
              </span>
            </p>
            <div className="brand-name">
              <div>Brand name</div>
              <div>Brand name</div>
            </div>
            <hr />
          </SingleProductName>

          <SingleMRPandPrice>
            <p className="mrp">MRP: <span className='mrp-1'>₹ 17,999</span> <span className='mrp-2'>11% off</span></p>
            <p className="price">₹ 11,999 <span className="price-1">/ piece</span></p>
          </SingleMRPandPrice>

          <BestPrice>
            <p className='best-price-1'>BEST PRICE
              <span className='best-price-2'>
                <img src={SingleProductPageImages.BestPriceIcon} alt="" />
              </span></p>
            <div className="best-price-3">
              <p>Save ₹238</p>
              <li>On orders over ₹2500 today with coupon code <span className="best-price-4">"FRIKLY”</span></li>
            </div>
            <div className="best-price-3">
              <p>Save ₹338</p>
              <li>On orders over ₹2500 today with coupon code <span className="best-price-4">"FRIKLY”</span></li>
            </div>
          </BestPrice>

          <BuyOnWhatsapp>
            <button>
              <span>
                <img src={SingleProductPageImages.WhatsappIcon} alt="" />
              </span>
              Buy On Whatsapp
            </button>
          </BuyOnWhatsapp>

          <AddToCart>
            <div className="atc-1">
              <div className="atc-2">
                <div className="atc-3">
                  <div className="atc-3-items">-</div>
                  <div className="atc-3-itemd">1</div>
                  <div className="atc-3-items">+</div>
                </div>
                <div className="atc-4">ADD TO CART</div>
              </div>
              <p className="atc-5">
                <span>
                  <img src={SingleProductPageImages.Tick} alt="" />
                </span> Free Xpress Shipping on orders over <span className="atc-6">₹50,000</span>
              </p>
              <p className="atc-5">
                <span >
                  <img src={SingleProductPageImages.Tick} alt="" />
                </span> Orders before 12:00pm for same day dispatch
              </p>
              <p className="atc-5">
                <span>
                  <img src={SingleProductPageImages.Tick} alt="" />
                </span> Support & ordering open 6 day a week
              </p>
              <div className="atc-7">
                Safe home delivery by Frikly
              </div>
            </div>
            <div className="atc-8">
              <div className="atc-8-item">
                <div className="atc-8-item-image">
                  <img src={SingleProductPageImages.PayOnDelivery} alt="..." />
                </div>
                <p>Pay On Delivery Available</p>
              </div>
              <div className="atc-8-item">
                <div className="atc-8-item-image">
                  <img src={SingleProductPageImages.SafeDelivery} alt="..." />
                </div>
                <p>Safe Delivery by Frikly</p>
              </div>
              <div className="atc-8-item">
                <div className="atc-8-item-image">
                  <img src={SingleProductPageImages.Replacement} alt="" />
                </div>
                <p>10 days Replacement</p>
              </div>
            </div>
            <div className="atc-9">
              <div className="atc-item1">
                <span>
                  <img src={SingleProductPageImages.Location} alt="..." />
                </span>
                <input type="text" placeholder='Enter pincode' />
              </div>
              <div className="atc-item2">
                Check
              </div>
            </div>
          </AddToCart>

          <Description>
            <div className="description-header">
              <div className="description-header-item active-description">Description</div>
              <div className="description-header-item">Shipping T&C</div>
              <div className="description-header-item">Payment T&C</div>
            </div>
            <div className="description-container">
              <ul>
                <li>Dulux Velvet Touch Platinum Glo ( 1 Litre )</li>
                <li>Dulux Velvet Touch Platinum Glo is an uber premium paint with subtle platinum like glow.</li>
                <li>Moreover its superior dust & dirt resistance coupled with Class A washability makes your walls timelessly beautiful.</li>
                <li>Now with Tru Color (Dura Color Technology), Velvet Touch is made with the finest ingredients and color pigments to deliver intense rich colors and ultra-smooth finish on your walls.</li>
                <li>Finish - Mid Sheen</li>
                <li>Stainer Cost Extra</li>
                <li>Pack Size - 1 Litre, 4 Litre, 10 Litre, 20 Litre.</li>
              </ul>
            </div>
          </Description>

          <HaveAQuestion>
            <p>Have a Question ? <span>We're here to help.</span></p>
            <div className="contact-options">
              <div className='contact-options-item1'>
                <span>
                  <img src={SingleProductPageImages.WhatsappIcon} alt="..." />
                </span> WhatsApp
              </div>
              <div className='contact-options-item2'>
                <span>
                  <img src={SingleProductPageImages.Phone} alt="..." />
                </span> 8035388980
              </div>
            </div>
          </HaveAQuestion>


        </SingleProductDetailSection>

      </SingleProductPageContainer>
    </>
  )
}


export default SingleProduct