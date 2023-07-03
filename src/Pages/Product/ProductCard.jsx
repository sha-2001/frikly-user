import React from "react";
import "./product.css";
import {
  CardImage,
  ProductName,
  MRP,
  MRPSpan,
  ProductPrice,
  ProductPriceSpan,
  Compare,
  BuyOn,
} from "./ProductPageStyles";
import { Images } from "./ProductImages";
import { useLocation } from "react-router-dom";
import {FiTruck} from 'react-icons/fi'

const ProductCard = () => {
  const location = useLocation();
  const url = location.pathname;
  const flag = url === "/products" ? true : false;

  return (
    <div className="product-card pt-2 pt-md-3 mb-3 mb-lg-0">
      <CardImage>
        <img src={Images.Table} alt="" />
      </CardImage>
      <div className="card-content ps-2 ps-md-3 pe-md-3 ">
        <ProductName>
          do Dorna Premium Leatherette Rolled arm Sofa, 74.01” 3 Seater, Light
          Brown{" "}
        </ProductName>
        <MRP>
          MRP <MRPSpan>₹ 17,999</MRPSpan>
        </MRP>
        <ProductPrice>
          ₹ 1999 <ProductPriceSpan>/piece</ProductPriceSpan>
        </ProductPrice>
      </div>
      {flag && (
        <div className="container-fluid">
          <div className="row">
            <Compare className="col-6">
              <img src={Images.PlusIcon} alt="" />
              <p>Compare</p>
            </Compare>
            <BuyOn className="col-6">
              <img src={Images.WhatsappIcon} alt="" />
              <p>Buy on</p>
            </BuyOn>
          </div>
        </div>
      )}
      {!flag && <p className="ps-3"  style={{width:"100%",textAlign:"left",color:'#10A728',fontSize:'0.68788rem',fontWeight:"500"}}><FiTruck/> Get FREE delivery by 24 Jul, Web</p>}
    </div>
  );
};

export default ProductCard;
