import React from 'react'
import './payment.css'

import frickly from '../../assets/icons/frikly.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLock, faCartShopping, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import cartPhoto from '../../assets/icons/cart-summart.png'

let PersonalDetails = () => {
  return (
    <>
      <div className="row">

        <div className="col offset-2 ps-4" style={{ textAlign: "start" }}>
          <h4>Personal Details</h4>
          <div className="row mt-4">
            <label htmlFor="name">Name</label>
            <input class="form-control ms-2" type="search" name='name' ></input>
          </div>
          <div className="row mt-3">
            <label htmlFor="phone">Phone Number</label>
            <input class="form-control ms-2" type="search" name='phone' ></input>
          </div>
          <div className="row mt-3">
            <label htmlFor="whatsapp">Whatsapp Number</label>
            <input class="form-control ms-2" type="search" name='whatsapp' ></input>
          </div>
          <div className="row mt-3">
            <div className="col-1">
              <input class="form-check-input" type="checkbox" />
            </div>
            <div className="col p-0" style={{ textAlign: "start", fontWeight: "300" }}>
              Whatsapp number Same as phone number
            </div>
          </div>
          <button className='btn mt-5 mb-5 p-2' style={{
            backgroundColor: "#EAE0D5"
          }}>Continue &nbsp; <FontAwesomeIcon icon={faArrowRight} /> &nbsp;</button>
        </div>
      </div>

    </>
  )
}

let ShippingDetails = () => {
  return (
    <div className='row'>
      <div className="col-6 offset-1 ps-4 mt-3" style={{ textAlign: "start" }}>
        <h4>Shipping Details</h4>
        <div className="row mt-4">
          <label htmlFor="address1">Address1</label>
          <input class="form-control ms-2" type="search" name='address1' ></input>
        </div>
        <div className="row mt-3">
          <label htmlFor="address12">Address2</label>
          <input class="form-control ms-2" type="search" name='address2' ></input>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label htmlFor="city">City</label>
            <input class="form-control " type="search" name='city' ></input>
          </div>
          <div className="col">
            <label htmlFor="pincode">Pincode</label>
            <input class="form-control " type="search" name='pincode' ></input>
          </div>
        </div>
        <div className="row mt-3">
          <label htmlFor="state">State</label>
          <input class="form-control ms-2" type="search" name='state' ></input>
        </div>
        <div className="row mt-3">
          <label htmlFor="gst">GST Number</label>
          <input class="form-control ms-2" type="search" name='gst' ></input>
        </div>
        <div className="row mt-3">
          <div className="col-1">
            <input class="form-check-input" type="checkbox" />
          </div>
          <div className="col p-0" style={{ textAlign: "start", fontWeight: "300" }}>
            Billing address same as shipping address
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <button className='btn mt-5 mb-5 p-2' style={{
              // backgroundColor: "#EAE0D5"
            }}> <FontAwesomeIcon icon={faArrowLeft} /> &nbsp; Previous &nbsp;</button>
          </div>
          <div className="col" style={{ textAlign: "right" }}>
            <button className='btn mt-5  mb-5 p-2' style={{
              backgroundColor: "#EAE0D5"
            }}>Continue &nbsp; <FontAwesomeIcon icon={faArrowRight} /> &nbsp;</button>
          </div>
        </div>
      </div>
    </div>
  )
}

let PaymentInfo = () => {
  return (
    <>
      <div className='row ps-4'>
        <div className="col-4 offset-1" style={{ textAlign: "start" }}>
          <h4>Payment Info</h4>
          <div className="row mt-3 ms-1" style={{ border: "1px solid black",borderRadius:"10px",padding:"10px"}}>
            <div className="col-2">
              <input class="form-check-input mt-0 fs-4" type="radio" />
            </div>
            <div className="col ">
              <div className="row fw-bold">UPI, Debit Card or Net Banking</div>
            </div>
          </div>
          <div className="row mt-3 ms-1" style={{ border: "1px solid black" ,borderRadius:"10px",padding:"10px"}}>
            <div className="col-2">
              <input class="form-check-input mt-0 fs-4" type="radio"  />
            </div>
            <div className="col">
              <div className="row fw-bold">Pay On Delivery</div>
              <div className="row mt-2"> <p> 5% of total order value is charged upfront via online payment. <span className='fw-light p-0 text-decoration-underline'>Why do we charge 5%? </span></p> </div>
            </div>
          </div>
          <button className='btn mt-5' style={{backgroundColor:"#22333B",color:"white",padding:"10px",fontSize:"14px",width:"50%"}}>Preview & Place your Order</button>
        </div>
      </div>
    </>
  )
}

let CartSummary = () => {
  return (
    <>
      <img src={cartPhoto} alt="cart" style={{ height: "337px", width: "367px" }} />
    </>
  )
}

let PayMentHeader = () => {
  return (
    <>
      <div className="container-fluid payment-header">
        <div className="row" >
          <div className="col-1 offset-1 ps-4" style={{ textAlign: "start", paddingTop: "30px" }}>
            <Link to="/home"><img src={frickly} alt="frickly" style={{ height: "40px" }} /></Link>
          </div>
          <div className="col-4 me-5" style={{ textAlign: "center", paddingTop: "43px" }}>
            <p>Personal Details <FontAwesomeIcon icon={faGreaterThan} className='ms-1 me-2' /> Shopping Details <FontAwesomeIcon icon={faGreaterThan} className='ms-1 me-2' />Payment info </p>
          </div>
          <div className="col-2 offset-1" style={{ textAlign: "center", paddingTop: "43px" }}>
            <p><FontAwesomeIcon icon={faLock} className='me-1' /> 100% Secure Login</p>
          </div>
          <div className="col-2" style={{ textAlign: "start", paddingTop: "43px" }}>
            <p><FontAwesomeIcon icon={faCartShopping} className='me-2' /><span style={{ textDecoration: "underline" }}>Back to Cart</span> </p>
          </div>
        </div>
      </div>
    </>
  )
}


function Payment(props) {
  props.paymentOpen()
  return (
    <div style={{ height: "2000px" }}>
      <PayMentHeader />

      <div className="container-fluid">

        <div className="row mt-5">
          <div className="col">
            <PersonalDetails />
          </div>

          <div className="col ps-5">
            <CartSummary />
          </div>


        </div>
      </div>

      <hr style={{ width: "82%", marginLeft: "100px" }} />
      <ShippingDetails />
      <hr style={{ width: "82%", marginLeft: "100px" }} />
      <PaymentInfo />

    </div>
  )
}

export default Payment