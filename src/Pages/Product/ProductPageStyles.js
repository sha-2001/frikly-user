import styled from "styled-components";

// Multi product page components

export const ProductName = styled.p`
  color : #0F171B;
  font-size : 1rem;
  text-transform: capitalize;
  font-weight : 500;
  text-align : start;

  @media (max-width : 768px){
    font-size : 0.8rem;
  }
`
export const MRP = styled.p`
  text-align : start;
  color : #797979;
  margin-bottom : 0px;

  @media (max-width : 768px){
    font-size : 0.8rem;
  }
`
export const MRPSpan = styled.span`
  text-decoration : line-through;
`
export const ProductPrice = styled.p`
  text-align : start;
  color : #CD1818;
  font-size : 1.5rem;
  font-weight : 500;

  @media (max-width : 768px){
    font-size : 1rem;
  }
`
export const ProductPriceSpan = styled.span`
  font-size : 0.8rem;

  @media (max-width : 768px){
    font-size : 0.6rem;
  }
`
export const Compare = styled.div`
  display : flex;
  justify-content : center;
  align-items: center;

  img{
    margin-right : 5%;
    width : 17px;
    height : 17px
  }

  p{
    margin-top : 10%;
    font-size : 1rem;
  }

  @media (max-width : 768px){
    p{
      font-size : .7rem;
      padding-top : 21%;
    }

    img{
      margin-right : 5%;
      width : 14px;
      height : 14px
  }
  }
`
export const BuyOn = styled.div`
  display : flex;
  justify-content : center;
  align-items: center;
  background-color : #22333B;
  color : white;
  border-bottom-right-radius : 4px;

  img{
    margin-right : 5%;
    width : 18px;
    height : 17px
  }

  p{
    margin-top : 10%;
    font-size : 1rem;
  }

  @media (max-width : 768px){
    p{
      font-size : .6rem;
      padding-top : 21%;
    }
    img{
      width : 14px;
      height : 14px
      }
  }
`
export const FilterNav = styled.div`
  height :  60px;
  background-color : rgba(34, 51, 59, 0.06);
  border: 1px solid rgba(34, 51, 59, 0.05);
  display : flex;
  align-items : center;
  padding-left : 4%;
  padding-right : 4%;

  .btn-1, .btn-2{
    height : 40px;
    width : 120px;
    border-radius: 4px;
    border: 1px solid rgba(34, 51, 59, 0.10);
    background: #FFF;
    font-size : 14px
  }
  .btn-1{
    margin-right : 1%;
  }
  .btn-2{
    width : 200px;
  }
  .span-1{
    margin-right : 1%;
    width : 100px;
    display : inline-block;
  }
  .span-2{
    margin-left : 43.4%;
    margin-right : 1%;
    width : 100px;
    display : inline-block;
  }

  @media (max-width : 768px){
    display : none;
  }

  @media (min-width : 768px) and (max-width : 1100px){
    .span-2,.span-1{
      width: 220px;
    }
    .span-2{
      margin-left : 30%;
    }
    .btn-1{
      width : 200px;
    }
    .btn-2{
      width : 450px;
    }
  }
`
export const CardImage = styled.div`
  width : 91%;
  height : fit-content;
  border-radius: 4px;
  background: rgba(234, 224, 213, 0.50);
  padding-left : 1rem;
  padding-right : 1rem;
  margin-bottom : .5rem;

  img{
    height : 100%;
    width : 100%;
  }
`

// Single Product Page components

export const SingleProductPageContainer = styled.div`
  margin-top : 3rem;
  margin-bottom : 3rem;
  height : fit-content;
  padding-left : 5%;
  padding-right : 4%;
  display : flex;
`
export const SingleProductImageSection = styled.div`
  width : 45%;
`
export const SingleProductDetailSection = styled.div`
  width : 55%;
`
export const MainImage = styled.div`
  width: 35.23331rem;
  height: 34.58rem;

  img{
    widht : 100%;
    height : 100%;
    border-radius : 4%;
  }
`
export const AlsoSee = styled.div`
margin-top : 2rem;
display : flex;
gap : 2%;

img{
  width : 130px;
  height : 172px;
}
`
export const SingleProductName = styled.div`
  .product-name{
    color: #22333B;
    font-size: 2rem;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 0.0625rem;
    text-align : left;
  }
  .pin img{
    width: 1.625rem;
    height: 1.625rem;
    margin-left : 1rem;
  }
  .brand-name{
    display : flex;
    gap : 1%;
  }
  .brand-name div{
    width : 6.5rem;
    height : 2.25rem;
    background-color : #EAE0D5;
    border-radius: 8px;
    color: #22333B;
    font-size: 0.75rem;
    display : flex;
    justify-content : center;
    align-items : center;
  }
`
export const SingleMRPandPrice = styled.div`
  .mrp{
    color: #797979;
    font-size: 0.91475rem;
    text-align : left;
    margin-bottom : 0px;
  }
  .mrp-1{
    text-decoration : line-through;
    font-size : 1rem;
    margin-left : .3rem;
    margin-right : .3rem;
  }
  .mrp-2{
    color: #1FAF38;
    font-size: 0.98363rem;
    font-weight: 700;
  }
  .price{
    color: #CD1818;
    font-size: 1.97731rem;
    font-weight: 500;
    text-align : left;
  }
  .price-1{
    font-size: 0.98869rem;
  }
  .add-to-cart{
    height  : 220px;
    color : #22333B;
  }
  .product-info img{
    height : 16px;
    width : 16px;
  }
  .product-info p{
    font-size : 14px;
    font-weight : 400;
    color : #001C30;
    text-align : left;
    margin-bottom : 5px;
  }
  .product-info span{
    font-weight : 500;
  }
  .buy-on-whatsapp button{
    width  : 100%;
    height : 100%;
    font-size : 18px;
    font-weight  : 600;
    color : #001C30;
    background-color  : white;
  }
  .buy-on-whatsapp img{
    width  : 23px;
    height : 23px;
    margin-right : 5px;
  }
  .buy-on-whatsapp{
    width : 366px;
    height : 50px;
    margin-bottom : 1rem;
  }
  .counter{
    display : flex;
    gap : 1rem;
    margin-bottom : 1rem;
  }
  .counter-box{
    border-radius: 0.25rem;
    border: 1px solid #D3D3D3;
    display : flex;
    height : 3.125rem;
    width : 9.25rem;
  }
  .counter-item1,.counter-item3{
    width : 35%;
    font-size : 2rem;
    display : flex;
    justify-content : center;
    align-items : center;
  }
  .counter-item2{
    width : 30%;
    display : flex;
    justify-content : center;
    align-items : center;
    border-left: 1px solid #D3D3D3;
    border-right: 1px solid #D3D3D3;
    font-weight : 500;
  }
  .add-to-cart-button{
    height : 3.125rem;
    width : 12.5rem;
  }
  .add-to-cart-button button{
    height  :100%;
    width  : 100%;
    border-radius: 0.25rem;
    background: #22333B;
    color : white;
  }
`
export const BestPrice = styled.div`
  height : fit-content;
  .best-price-1{
    color: #22333B;
    font-size: 1rem;
    font-family: Pangram;
    font-weight: 700;
    text-transform: uppercase;
    text-align : left;
  }
  .best-price-2 img{
    width: 1.25rem;
    height: 1.25rem;
  }
  .best-price-3{
    width: 24.8125rem;
    height: 2.875rem;
    text-align:left;
    margin-bottom : .4rem;
    font-size : 0.875rem;
  }
  .best-price-3 p{
    margin-bottom : 0;
    font-weight : 700;
  }
  .best-price-3 li {
    white-space: nowrap;
  }
  .best-price-4{
    color : #1FAF38;
    font-weight : 600;
  }
`
export const AddToCart = styled.div`
  margin-bottom : 2rem;
  .area{
    font-size : 14px;
    font-weight : 400;
    color : #001C30;
    background-color : #FEF8E8;
    margin-bottom : 2rem;
    width : 188px;
    height : 36px;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 2rem;
  }
  .atc-8{
    height :5.87rem;
    display : flex;
  }
  .atc-8-item-image img{
    height : 2.5rem;
    width : 2.5rem;
  }
  .atc-8-item{
    width : 19%;
  }
  .atc-8-item p{
    color: #22333B;
    text-align: center;
    font-size: 0.875rem;
  } 
  .atc-9{
    display:flex;
    height : 2.5rem;
    margin: 1.5rem 0rem;
  }
  .atc-item1{
    width : 46%;
    height  : 100%;
    border-radius: 4px 0px 0px 4px;
    background: #F0F0F0;
    padding-left : 5px;
  }
  .atc-item1 input{
    height : 100%;
    width : 93%;
    padding : 5px;
    outline : none;
    border : none;
    background: #F0F0F0;
  }
  .atc-item2{
    width : 15%;
    height : 100%;
    border-radius: 0px 4px 4px 0px;
    background: #22333B;
    color: #FFF;
    font-size: 0.875rem;
    font-weight: 500;
    display : flex;
    justify-content : center;
    align-items : center;
  }
  .atc-item1 img{
    width: 0.83719rem;
    height: 0.97919rem;
    margin-right : .3rem;
  }
`
export const Description = styled.div`
  height : fit-content;
  margin-bottom : 2rem;
  border-bottom: 2px solid #F4F4F4;

  .description-header{
    height : 4.5rem;
    display : flex;
    padding-right : 6%;
    justify-content : space-between;
    border-bottom: 2px solid #F4F4F4;
  }
  .description-header div{
    display : flex;
    align-items : center;
    justify-content : center;
    width : 25%;
    height : 70%;
  }
  .active-description{
    border-radius: 100px;
    background: #EAE0D5;
  }
  .description-container li{
    text-align : left;
  }
  .description-container{
    padding : .5rem;
    padding-right : 6%;
  }
  .description-container ul{
    padding : 2%;
    color: #22333B;
    font-size: 0.875rem;
    margin-bottom : 0;
  }
`
export const HaveAQuestion = styled.div`
  p{
    font-size: 1rem;
    color: #22333B;
    font-weight: 500;
    text-align : left;
  }
  p span{
    font-size : .8rem;
  }
  .contact-options{
    display : flex;
    gap : 1rem;
  }
  .contact-options div{
    border-radius: 4px;
    font-size: 1.125rem;
    font-weight: 500;
    text-align: center;
    width: 11.25rem;
    height: 3.125rem;
    display : flex;
    justify-content : center;
    align-items : center;
  }
  .contact-options-item1 img{
    width: 1.125rem;
    height: 1.125rem;
    margin-right : .4rem;
  }
  .contact-options-item2 img{
    width: 1.5rem;
    height: 1.5rem;
    margin-right : .4rem;
  }
  .contact-options-item1{
    background: #22333B;
    color: #EAE0D5;
  }
  .contact-options-item2{
    color: #22333B;
    border: 1.17px solid #22333B;
    
  }
`
export const NeedHelp = styled.div`
  width :16.6rem;
  height : 4.6rem;
  position : fixed;
  top : 0%;
  left :0%

  img{
    width : 100%;
    height : 100%;
  }
`