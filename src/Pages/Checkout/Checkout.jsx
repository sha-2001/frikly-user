import React from "react";
import { CheckoutContainer, CheckoutMobileNav, CheckoutNav } from "./CheckoutStyles";
import Check1 from "./Check1";
import Check2 from "./Check2";
import Check3 from "./Check3";
import { CheckoutImages } from "./CheckoutImages";
import { BiLock } from "react-icons/bi";
import {BsArrowLeft} from 'react-icons/bs';

const Checkout = ({ handleCheckout }) => {
  handleCheckout(false);
  return (
    <>
      <CheckoutContainer>
        <CheckoutNav>
          <div className="checkout-nav1">
            <div className="logo-container">
              <img src={CheckoutImages.Frikly} alt="..." />
            </div>
            <div className="secure-login">
              <BiLock size={18} /> 100% Secure login
            </div>
          </div>
          <div className="checkout-nav2"></div>
        </CheckoutNav>
        <CheckoutMobileNav>
          <div className="container-fluid">
            <div className="row mobile-logo-part">
              <div className="col-2 d-flex justify-content-center align-items-center"><BsArrowLeft size={25} color="white"/></div>
              <div className="col-9"></div>
            </div>
            <div className="row mobile-progress-bar"></div>
          </div>
        </CheckoutMobileNav>
        {false && <Check1 />}
        <Check1 />
        {false && <Check2 />}
        {/* <Check2/> */}
        {false && <Check3 />}
        {/* <Check3/> */}
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
