import React from "react";
import { Checkout3Body } from "./CheckoutStyles";

const Check3 = () => {
  return (
    <>
      <Checkout3Body>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="phone-number-text">Enter your phone number to sign in or to create an account</p>
            </div>
          </div>
          <div className="row ps-5 pe-5">
            <div className="col-8">
              <div class="input-group mb-3 phone-input">
                <span class="input-group-text" id="basic-addon1">
                  +91
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="col-4">
              <button type="button" class="btn btn-dark">
                Send Code
              </button>
            </div>
          </div>
          <div className="row ps-5 pe-5">
            <div className="col-8">
              <div class="input-group mb-3 phone-input">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter OTP"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="col-4">
              <button type="button" class="btn btn-dark">
                Verify
              </button>
            </div>
          </div>
          <div className="row">
            <p className="signin-terms">By continuing, you agree to Frikly's <span>Terms & Conditions</span> and <span>Privacy Policy</span></p>
          </div>
        </div>
      </Checkout3Body>
    </>
  );
};

export default Check3;
