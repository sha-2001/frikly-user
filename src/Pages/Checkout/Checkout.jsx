import React from "react";
import {
  CheckoutContainer,
  CheckoutNav,
} from "./CheckoutStyles";
import Check1 from "./Check1";
import Check2 from "./Check2";



const Checkout = ({ handleCheckout }) => {
  handleCheckout(false);
  return (
    <>
      <CheckoutContainer>
        <CheckoutNav>
          <div className="checkout-nav1"></div>
          <div className="checkout-nav2"></div>
        </CheckoutNav>
        {false && <Check1/>}
        {/* <Check1/> */}
        {false && <Check2/>}
        <Check2/>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
