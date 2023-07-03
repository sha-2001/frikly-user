import { Fragment } from "react"
import { HeaderFirstContainer } from "./HeaderStyle"
import { HeaderFirstImages } from "./HeaderImages"
import {HiOutlineLocationMarker} from 'react-icons/hi'


const HeaderFirst = () => {
  return (
    <Fragment>
      <HeaderFirstContainer>
        <div className="pincode">
          <div className="pincode-1">
            <span className="d-none d-lg-inline-block">
              <HiOutlineLocationMarker size={20}/>
            </span> Enter Pincode
          </div>
          <div className="pincode-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Change Pincode</div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 text-start" id="exampleModalLabel">Please Provide Your Pincode</h1>
                  <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                    <img src={HeaderFirstImages.Cancel} alt="" />
                  </button>
                </div>
                <div class="modal-body">
                  <p className="text-start">Enter your address pincode</p>
                  <input class="form-control me-2" placeholder="Pincode"></input>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                  <button type="button" class="btn">Enter</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-tracking">
          <span>
            <img src={HeaderFirstImages.OrderTracking} alt="..." />
          </span> Order Tracking
        </div>
      </HeaderFirstContainer>
    </Fragment>
  )
}

export default HeaderFirst