import React from "react";
import { CheckoutContainer, CheckoutNav } from "./CheckoutStyles";
import Check1 from "./Check1";
import Check2 from "./Check2";
import Check3 from "./Check3";
import { CheckoutImages } from "./CheckoutImages";
import { BiLock } from "react-icons/bi";

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
