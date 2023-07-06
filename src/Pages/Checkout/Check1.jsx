import React from "react";

import {
  CartDescription,
  CartItem,
  Coupons,
  MyCart,
  OfferList,
  PaymentMethods,
  Pincode,
  PriceDetails,
  PriceSummary,
  TotalAmount,
  Checkout1Body
} from "./CheckoutStyles";

import { CiDiscount1 } from "react-icons/ci";
import { ImCancelCircle } from "react-icons/im";
import { CheckoutImages } from "./CheckoutImages";

const Check1 = () => {
  return(
  <>
    <Checkout1Body>
      <CartDescription>
        <OfferList>
          <p className="offerlist-heading">
            <CiDiscount1 size={20} /> OFFER LIST
          </p>
          <ul>
            <li>
              Whistles! Get extra 20% Cashback on prepaid orders above Rs.499.
              Coupon code - NEW20.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
          </ul>
          <p className="offerlist-text">
            Get Free <span className="offerlist-text-span1">Shipping</span> for
            orders over <span className="offerlist-text-span2">$10,000.00</span>
          </p>
        </OfferList>
        <MyCart>
          <p className="my-cart-heading">
            my cart <span className="my-cart-span1">(2)</span>
          </p>
          <CartItem>
            <div className="cart-item-img">
              <img src={CheckoutImages.CartItem} alt=".." />
            </div>
            <div className="cart-item-details">
              <p className="cart-item-name">
                Dorset Door Handles / <br /> Vitra - VIT OR HG
              </p>
              <p className="cart-item-price">
                ₹130
                <span className="cart-item-price-span1">₹160</span>
                <span className="cart-item-price-span2">50% off</span>
              </p>
              <p className="cart-item-delivery">
                Get it Tues,Jul 24
                <span className="cart-item-delivery-span">
                  FREE Fast Delivery
                </span>
              </p>
            </div>
            <div className="cart-item-count">
              <p className="cart-item-count1">
                <ImCancelCircle size={18} color={"#73777B"} />
              </p>
              <div className="cart-item-count2">
                <table>
                  <tr>
                    <td>-</td>
                    <td className="count-result">1</td>
                    <td>+</td>
                  </tr>
                </table>
              </div>
              <p className="cart-item-count3">₹130</p>
              <p className="cart-item-count4">Add to Wishlist</p>
            </div>
          </CartItem>
          <CartItem>
            <div className="cart-item-img">
              <img src={CheckoutImages.CartItem} alt=".." />
            </div>
            <div className="cart-item-details">
              <p className="cart-item-name">
                Dorset Door Handles / <br /> Vitra - VIT OR HG
              </p>
              <p className="cart-item-price">
                ₹130
                <span className="cart-item-price-span1">₹160</span>
                <span className="cart-item-price-span2">50% off</span>
              </p>
              <p className="cart-item-delivery">
                Get it Tues,Jul 24
                <span className="cart-item-delivery-span">
                  FREE Fast Delivery
                </span>
              </p>
            </div>
            <div className="cart-item-count">
              <p className="cart-item-count1">
                <ImCancelCircle size={18} color={"#73777B"} />
              </p>
              <div className="cart-item-count2">
                <table>
                  <tr>
                    <td>-</td>
                    <td className="count-result">1</td>
                    <td>+</td>
                  </tr>
                </table>
              </div>
              <p className="cart-item-count3">₹130</p>
              <p className="cart-item-count4">Add to Wishlist</p>
            </div>
          </CartItem>
        </MyCart>
      </CartDescription>
      <PriceSummary>
        <Coupons>
          <p className="coupons-heading">coupons</p>
          <p className="coupons-text">
            <span className="coupons-text-span1">Lorem </span>
            Ipsum Sit Amet
          </p>
          <div className="coupons-apply">Apply</div>
        </Coupons>
        <PriceDetails>
          <p className="price-details-heading">PRICE DETAILS ( 2 Items )</p>
          <table>
            <tr>
              <td className="price-details-key">Subtotal</td>
              <td className="price-details-value">₹130.00</td>
            </tr>
            <tr>
              <td className="price-details-key">Doscount On MRP</td>
              <td className="price-details-value">₹0.0</td>
            </tr>
            <tr>
              <td className="price-details-key">Coupon Discount</td>
              <td className="price-details-value not-applied">Not Applied</td>
            </tr>
            <tr>
              <td className="price-details-key">
                Shipping Cost <span className="change-pin">Change Pin</span>
              </td>
              <td className="price-details-value not-applied">Not Applied</td>
            </tr>
          </table>
        </PriceDetails>
        <Pincode>
          <div className="input-div">
            <input type="text" placeholder="4620233" />
          </div>
          <div className="enter-pin-code">Enter Pin Code</div>
        </Pincode>
        <TotalAmount>
          <table>
            <tr>
              <td className="total-amount-key">Total Amount</td>
              <td className="total-amount-value">₹130.00</td>
            </tr>
          </table>
          <div className="checkout-btn">
            Chekout &nbsp; | &nbsp; <span>₹130.00</span>
          </div>
        </TotalAmount>
        <PaymentMethods>
          <p>SECURE PAYMENTS PROVIDED BY</p>
          <table>
            <tr>
              <td>
                <img src={CheckoutImages.Mastercard} alt="..." />
              </td>
              <td>
                <img src={CheckoutImages.Paytm} alt="..." />
              </td>
              <td>
                <img src={CheckoutImages.HDFC} alt="..." />
              </td>
              <td>
                <img src={CheckoutImages.COD} alt="..." />
              </td>
            </tr>
          </table>
        </PaymentMethods>
      </PriceSummary>
    </Checkout1Body>
  </>
  )
};

export default Check1;
