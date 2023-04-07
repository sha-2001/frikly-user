import React from 'react'
import { useState } from 'react'

import frickly from '../../assets/icons/frikly.webp'
import './style/payment.css'
import './style/paymentHeader.css'
import './style/personalDetails.css'
import './style/shippingDetails.css'
import Lock from '../../assets/icons/Lock.webp'
import Cart from '../../assets/icons/cart.webp'
import CartSummary from '../../assets/icons/cart-summart.png'


let PaymentHeader = () => {
  return (
    <>
      <div className="payment-header">
        <div className="frickly-logo">
          <img src={frickly} alt="frickly" />
        </div>
        <div className="payment-nav">
          <p>Payment Details > Shopping Details > Payment Info</p>
        </div>
        <div className="secure-login">
          <p> <img src={Lock} alt="lock" /> <span className="secure-login-text">100% secure login</span> </p>
        </div>
        <div className="back-to-cart">
          <p> <img src={Cart} alt="cart" /> <span className="back-to-cart-text">Back to Cart</span> </p>
        </div>
      </div>
    </>
  )
}

let PersonalDetails = (props) => {
  return (
    <>
      <div className="personal-details">
        <h3>Personal Details</h3>
        <div className="personal-details-container">
          <div>
            <label htmlFor="personal-name">Name</label>
            <input class="form-control me-2" type="search" name='personal-name'></input>
          </div>
          <div>
            <label htmlFor="phone-number">Phone Number</label>
            <input class="form-control me-2" type="search" name='phone-number'></input>
          </div>
          <div>
            <label htmlFor="whatsapp-number">Whatsapp Number</label>
            <input class="form-control me-2" type="search" name='whatsapp-number'></input>
          </div>
          <div className="wtsp-same-as">
            <div>
              <input type="checkbox" name="" id="" />
            </div>
            <div>
              <p>Whatsapp number Same as phone number</p>
            </div>
          </div>
          <button className='btn continue-button'
            onClick={
              () => {
                props.togglePersonalDetails()
              }
            }
          >Continue</button>
        </div>
      </div>
    </>
  )
}

let PersonalDetailsReceit = () => {
  return (
    <>
      <div className="personal-details-receit">
        <div>
          <h3>Personal Details</h3>
        </div>
        <div style={{ textDecoration: "underline" }}>
          Change
        </div>
      </div>
      <p style={{ textAlign: "left", margin: "0" }}>Arpit Chandak</p>
      <p style={{ textAlign: "left" }}>+91 8017555192</p>
    </>
  )
}

let ShippingDetails = (props) => {
  return (
    <>
      <hr />
      <div className="shipping-details">
        <h3>Shipping Details</h3>

        <div className="shipping-details-container">
          <div>
            <label htmlFor="address1">Address 1</label>
            <input class="form-control me-2" type="search" name='address1'></input>
          </div>
          <div>
            <label htmlFor="address2">Address 2</label>
            <input class="form-control me-2" type="search" name='address2'></input>
          </div>
          <div className="city-pincode">
            <div>
              <label htmlFor="city">City</label>
              <input class="form-control me-2" type="search" name='city'></input>
            </div>
            <div>
              <label htmlFor="pincode">Pincode</label>
              <input class="form-control me-2" type="search" name='pincode'></input>
            </div>
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input class="form-control me-2" type="search" name='state'></input>
          </div>
          <div>
            <label htmlFor="gst">GST Number</label>
            <input class="form-control me-2" type="search" name='gst'></input>
          </div>
          <div className="wtsp-same-as">
            <div>
              <input type="checkbox" />
            </div>
            <div>
              <p>Billing address same as shipping address </p>
            </div>
          </div>
        </div>

        <h3 style={{ marginTop: "50px" }}>Billing Details</h3>

        <div className="shipping-details-container">
          <div>
            <label htmlFor="address1">Address 1</label>
            <input class="form-control me-2" type="search" name='address1'></input>
          </div>
          <div>
            <label htmlFor="address2">Address 2</label>
            <input class="form-control me-2" type="search" name='address2'></input>
          </div>
          <div className="city-pincode">
            <div>
              <label htmlFor="city">City</label>
              <input class="form-control me-2" type="search" name='city'></input>
            </div>
            <div>
              <label htmlFor="pincode">Pincode</label>
              <input class="form-control me-2" type="search" name='pincode'></input>
            </div>
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input class="form-control me-2" type="search" name='state'></input>
          </div>

        </div>

        <div className="navigation-buttons mt-3">
          <div>
            <button className='btn p-0'>Previous</button>
          </div>
          <div>
            <button className='btn ' style={{ backgroundColor: "#EAE0D5" }} onClick={() => { props.togggleShippingDetails() }}>Continue</button>
          </div>
        </div>


      </div>
    </>
  )
}

let ShippingDetailsReceit = () => {
  return (
    <>
      <hr />
      <div className="personal-details-receit">
        <div>
          <h3>Shipping Details</h3>
        </div>
        <div style={{ textDecoration: "underline" }}>
          Change
        </div>
      </div>
      <p style={{ textAlign: "left", margin: "0" }}>Arpit Chandak</p>
      <p style={{ textAlign: "left" }}>+91 8017555192</p>
    </>
  )
}

let PaymentInfo = () => {
  return (
    <>
      <hr />
      <div className="payment-info">
        <h3>Payment Info</h3>
        <div style={{ border: "1px solid black", borderRadius: "5px", padding: "10px", display: "flex", alignItems: "center" }}>
          <div>
            <input type="radio" name='upi' style={{ marginRight: "10px", height: "20px", width: "20px" }} />
          </div>
          <p style={{ display: "inline-block", margin: "0", fontWeight: "500" }} name="upi">UPI, Debit Card or Net Banking</p>
        </div>
        <div style={{ border: "1px solid black", borderRadius: "5px", padding: "10px", display: "flex", alignItems: "top", marginTop: "20px" }}>
          <div>
            <input type="radio" name='upi' style={{ marginRight: "10px", height: "20px", width: "20px"}} />
          </div>
          <div style={{ display: "inline-block", margin: "0" }} name="upi">
            <p style={{ fontWeight: "500" }}>Pay On Delivery</p>
            <p style={{ fontSize: "12px" }}>5% of total order value is charged upfront via online payment. <span style={{ textDecoration: "underline" }}> Why do we charge 5%?</span> </p>
          </div>
        </div>

      </div>
      <buttton className="btn place-order m-3" style={{backgroundColor:"#22333B", color:"white"}}>
        Preview & place your order
      </buttton>
    </>
  )
}

function Payment(props) {

  const [personalDetails, setPersonalDetails] = useState(true)
  const [shippingDetails, setShippingDetails] = useState(true)

  let togglePersonalDetails = () => {
    if (personalDetails) {
      setPersonalDetails(false)
    }
    else {
      setPersonalDetails(true)
    }
  }

  let togggleShippingDetails = () => {
    if (shippingDetails) {
      setShippingDetails(false)
    }
    else {
      setShippingDetails(true)
    }
  }

  props.paymentOpen()
  return (
    <>
      <div className="payment">
        <PaymentHeader state={{personalDetails:personalDetails, shippingDetails:shippingDetails}}/>
        <div className="payment-container">
          <div className="payment-data">
            {
              (personalDetails)
                ? (< PersonalDetails togglePersonalDetails={togglePersonalDetails} />)
                : (<PersonalDetailsReceit />)
            }
            {
              (shippingDetails && !personalDetails)
                ? (<ShippingDetails togggleShippingDetails={togggleShippingDetails} />)
                : (
                  (personalDetails)
                    ? (<>
                      <hr />
                      <h3 style={{ textAlign: "left", marginTop: "20px" }}>Shipping Details</h3>
                    </>
                    )
                    : (<ShippingDetailsReceit />)
                )
            }

            {
              (!personalDetails && !shippingDetails)
                ? (<PaymentInfo />)
                : (<>
                  <hr />
                  <h3 style={{ textAlign: "left", marginTop: "20px" }}>Payment Info</h3>
                </>)
            }
          </div>
          <div className="cart-info">
            <img src={CartSummary} alt="Cart Summry" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment