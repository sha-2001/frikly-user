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

