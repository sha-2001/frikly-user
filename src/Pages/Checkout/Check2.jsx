import React from "react";
import { Checkout2Body, PriceSummaryCheck2, Shipping } from "./CheckoutStyles";
import {
  Coupons,
  PaymentMethods,
  Pincode,
  PriceDetails,
  PriceSummary,
  TotalAmount,
} from "./CheckoutStyles";

import { CheckoutImages } from "./CheckoutImages";

const Check2 = () => {
  return (
    <>
      <Checkout2Body>
        <Shipping>
          <div className="container-fluid">
            <h5 className="text-start">Shipping</h5>
            <div className="row">
              <div className="col">
                <label for="firstname" class="form-label text-start">
                  FIRST NAME *
                </label>
                <input type="text" id="firstname" class="form-control" />
              </div>
              <div className="col">
                <label for="firstname" class="form-label text-start">
                  LAST NAME *
                </label>
                <input type="text" id="firstname" class="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="firstname" class="form-label text-start">
                  PHONE NUMBER *
                </label>
                <input type="text" id="firstname" class="form-control" />
              </div>
              <div className="col">
                <label for="firstname" class="form-label text-start">
                  WHATSAPP NUMBER *
                </label>
                <input type="text" id="firstname" class="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="selectaddress" class="form-label text-start">
                  Select Address *
                </label>
                <select
                  class="form-select"
                  id="selectaddress"
                  aria-label="Default select example"
                >
                  <option selected>Mumbai</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="firstname" class="form-label text-start">
                  Region *
                </label>
                <input
                  type="text"
                  id="region"
                  class="form-control"
                  placeholder="House number and street name"
                />
                <input
                  type="text"
                  id="region"
                  class="form-control mt-2"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="towncity" class="form-label text-start">
                  Town / city *
                </label>
                <input type="text" id="towncity" class="form-control" />
              </div>
              <div className="col">
                <label for="selectstate" class="form-label text-start">
                  state *
                </label>
                <select
                  class="form-select"
                  id="selectstate"
                  aria-label="Default select example"
                >
                  <option selected></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col">
                <div className="col">
                  <label for="postcode" class="form-label text-start">
                    Postcode / zip *
                  </label>
                  <input type="text" id="postcode" class="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mt-4">
            <h5 className="text-start mb-3">GST Number</h5>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  id="gstdescription"
                  class="form-control"
                  aria-labelledby="textHelpBlock"
                />
                <div id="gstdescription" class="form-text">
                  Enter GST number and save upto 18% on your invoice
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mt-4">
            <h5 className="text-start">Billing Address</h5>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Same as shipping Address
              </label>
            </div>
          </div>
        </Shipping>
        <PriceSummaryCheck2>
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
                <td className="price-details-key">Shipping</td>
                <td className="price-details-value">Mumbai</td>
              </tr>
              <tr>
                <td className="price-details-key">Discount</td>
                <td className="price-details-value">₹0.0</td>
              </tr>
              <tr>
                <td className="price-details-key">Shipping Cost</td>
                <td className="price-details-value">₹50.00</td>
              </tr>
            </table>
          </PriceDetails>
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
        </PriceSummaryCheck2>
      </Checkout2Body>
    </>
  );
};

export default Check2;
