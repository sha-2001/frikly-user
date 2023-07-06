import styled from "styled-components";

export const CheckoutContainer = styled.div`
  height: 78.7vh;
  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }
`;
export const CheckoutNav = styled.div`
  .checkout-nav1 {
    background-color: #eae0d5;
    height: 8vh;
    padding-left: 2%;
    padding-right: 2%;
    justify-content: space-between;
    display: flex;
  }
  .secure-login{
    display: flex;
    align-items: center;
  }
  .checkout-nav2 {
    background-color: #f4f5f5;
    height: 9vh;
  }
  .logo-container {
  height: 100%;
  display: flex;
  align-items: center;
  }
  img{
    width: 7rem;
    height: 2.5rem;
  }
`;
// //////////////////////////// Checkout 1 ////////////////////////////////////////////////////////

export const Checkout1Body = styled.div`
  display: flex;
  gap: 3%;
  height: 100%;
  padding: 1% 5.3%;
  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }
`;
export const CartDescription = styled.div`
  width: 65%;
  height: 100%;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
export const PriceSummary = styled.div`
  width: 35%;
  height: 100%;
  border-radius: 0.25rem;
  border: 2px solid #f4f5f5;
  background: #fff;
  padding: 1%;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
export const OfferList = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  border: 1px solid #f4f5f5;
  height: 30%;
  padding: 0.5rem 1.5rem;
  .offerlist-heading {
    text-align: left;
    color: #001c30;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  li {
    color: #73777b;
    font-size: 0.875rem;
    font-weight: 500;
    text-align: left;
  }
  .offerlist-text {
    color: #73777b;
    font-size: 0.875rem;
    font-weight: 500;
    text-align: left;
  }
  .offerlist-text-span1 {
    font-weight: 600;
    color: #001c30;
  }
  .offerlist-text-span2 {
    font-weight: 600;
    color: #eb2606;
  }
`;
export const MyCart = styled.div`
  background-color: white;
  height: 70%;
  padding-top: 2%;
  .my-cart-heading {
    text-transform: uppercase;
    text-align: left;
    color: #001c30;
    font-size: 1.25rem;
    font-weight: 600;
  }
  .my-cart-span1 {
    color: #73777b;
    font-size: 1rem;
    font-weight: 400;
    margin-left: 86%;
  }
`;
export const CartItem = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  border-top: 1px solid #f4f5f5;
  height: 40.5%;
  display: flex;
  padding-top: 0.8rem;
  margin-bottom: 2.2%;
  table {
    width: 100%;
    border: 0.739px solid #c6ac8f;
  }
  td {
    width: 33.3%;
  }
  .count-result {
    background: white;
  }
  .cart-item-img {
    width: 20%;
  }
  .cart-item-details {
    width: 55%;
    background-color: white;
    padding-left: 1rem;
    padding-top: 1rem;
  }
  .cart-item-count {
    width: 25%;
  }
  .cart-item-count1 {
    text-align: right;
    margin-bottom: 5%;
  }
  .cart-item-count2 {
    border-radius: 0rem 0.09244rem 0.09244rem 0rem;
    background: #c6ac8f;
    height: 22%;
    width: 50%;
    display: flex;
    margin-left: auto;
    margin-bottom: 3%;
  }
  .cart-item-count3 {
    text-align: right;
    color: #001c30;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1%;
  }
  .cart-item-count4 {
    text-align: right;
    color: #001c30;
    font-size: 0.875rem;
    font-weight: 400;
    text-decoration-line: underline;
  }
  .cart-item-name {
    text-align: left;
    color: #001c30;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1%;
  }
  .cart-item-price {
    color: #001c30;
    font-size: 1rem;
    font-weight: 500;
    text-align: left;
    margin-bottom: 1%;
  }
  .cart-item-price-span1 {
    margin-left: 2%;
    color: #73777b;
    font-weight: 400;
    text-decoration: line-through;
  }
  .cart-item-price-span2 {
    margin-left: 2%;
    color: #eb2606;
    font-weight: 400;
  }
  .cart-item-delivery {
    text-align: left;
    font-size: 14px;
    color: #001c30;
    font-weight: 400;
  }
  .cart-item-delivery-span {
    margin-left: 3%;
    color: #10a728;
  }
`;
export const Coupons = styled.div`
  height: 12%;
  position: relative;
  .coupons-heading {
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 1%;
  }
  .coupons-text {
    color: #73777b;
    font-size: 0.875rem;
    font-weight: 500;
    text-align: left;
  }
  .coupons-text-span1 {
    color: #001c30;
  }
  .coupons-apply {
    display: flex;
    width: 6.25rem;
    height: 2.125rem;
    padding: 0rem 2.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    border: 1px solid #001c30;
    color: #001c30;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: capitalize;
    position: absolute;
    top: 20%;
    right: 0%;
  }
`;
export const PriceDetails = styled.div`
  border-top: 2px solid #f4f5f5;
  height: 35%;
  padding-top: 2%;
  table {
    width: 100%;
  }
  tr {
    height: 2rem;
  }
  .price-details-heading {
    text-align: left;
    color: #001c30;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  .price-details-key {
    text-align: left;
    color: #001c30;
    font-size: 0.875rem;
    font-weight: 400;
  }
  .price-details-value {
    text-align: right;
    color: #001c30;
    font-size: 0.875rem;
    font-weight: 400;
  }
  .not-applied {
    color: #c6ac8f;
  }
  .change-pin {
    color: #eb2606;
    text-decoration: underline;
  }
`;
export const Pincode = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 4%;
  div {
    height: 100%;
  }
  input {
    border-radius: 0.5rem;
    border: 2px solid #f4f4f4;
    background: #fff;
    height: 70%;
    padding: 0.25rem 1rem;
    width: 100%;
  }
  .input-div {
    width: 60%;
    display: flex;
    align-items: center;
  }
  .enter-pin-code {
    width: 35%;
    display: flex;
    height: 70%;
    padding: 0.25rem 1rem;
    align-items: center;
    border-radius: 6.25rem;
    background: rgba(34, 51, 59, 0.1);
    color: #22333b;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;
export const TotalAmount = styled.div`
  height: 20%;
  border-top: 2px solid #f4f5f5;
  padding-top: 1%;
  table {
    width: 100%;
  }
  .total-amount-key {
    text-align: left;
    color: #001c30;
    font-size: 0.875rem;
    font-weight: 600;
  }
  .total-amount-value {
    text-align: right;
    color: #001c30;
    font-size: 0.875rem;
    font-weight: 600;
  }
  .checkout-btn {
    background: #22333b;
    color: white;
    height: 60%;
    display: flex;
    padding: 0rem 2.5rem;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin-top: 4%;
  }
  span {
    font-weight: 600;
  }
`;
export const PaymentMethods = styled.div`
  height: 15%;
  padding-top: 5%;
  img {
    width: 3.5rem;
    height: 2rem;
  }
  table {
    width: 60%;
  }
  p {
    text-align: left;
    color: #73777b;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.0625rem;
    text-transform: uppercase;
  }
`;

// //////////////////////////// Checkout 2 ////////////////////////////////////////////////////////////

export const Checkout2Body = styled(Checkout1Body)`
  height: 105vh;
  text-align: start;
`;
export const Shipping = styled.div`
  width: 65%;
  label {
    color: #001c30;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0.0625rem;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  .row {
    margin-bottom: 2%;
  }
  input {
    color: #001c30;
    font-family: Montserrat;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  input::placeholder {
    color: #c8c9cb;
    font-family: Montserrat;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  h5 {
    color: #001c30;
    font-family: Montserrat;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    border-bottom: 2px solid #f4f5f5;
    padding: 0.5rem;
  }
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
export const PriceSummaryCheck2 = styled(PriceSummary)`
  height: 75%;
`;

// /////////////////////////// Checkout 3 //////////////////////////////////////////////////////////////

export const Checkout3Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .phone-number-text {
    color: #001c30;
    text-align: center;
    font-family: Montserrat;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
  .container {
    width: 40%;
    height: 35vh;
    padding: 1rem;
  }
  .signin-terms {
    color: #717378;
    font-family: Montserrat;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }
  .signin-terms span {
    color: #001c30;
    font-weight: 500;
  }
  button {
    background-color: #001c30;
    height: 90%;
    width: 100%;
  }
  #basic-addon1 {
    background-color: white;
  }
  .phone-input {
    border-radius: 0.25rem 0.25rem 0.25rem 0.1905rem;
    border: 1px solid #001c30;
    height: 90%;
  }
`;
