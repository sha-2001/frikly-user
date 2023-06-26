import { Fragment } from "react"
import { HeaderFirstContainer } from "./HeaderStyle"
import { HeaderFirstImages } from "./HeaderImages"

const HeaderFirst = () => {
  return (
    <Fragment>
      <HeaderFirstContainer>
        <div className="pincode">
          <div className="pincode-1">
            <span>
              <img src={HeaderFirstImages.Pincode} alt="..." />
            </span> Enter Pincode
          </div>
          <div className="pincode-2">Change Pincode</div>
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