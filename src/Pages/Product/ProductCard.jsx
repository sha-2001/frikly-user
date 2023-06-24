import React from 'react'
import './product.css'

import * as ProductCardStyles from './ProductStyledComponents'
import {Images} from './ProductImages';

const ProductCard = () => {
  return (
    <div className="product-card pt-2 pt-md-3 mb-3 mb-lg-0" >
      <ProductCardStyles.CardImage>
        <img src={Images.Table} alt="" />
      </ProductCardStyles.CardImage>
      <div className="card-content ps-2 ps-md-3 pe-md-3 ">
        <ProductCardStyles.ProductName>do Dorna Premium Leatherette Rolled arm Sofa, 74.01” 3 Seater, Light Brown </ProductCardStyles.ProductName>
        <ProductCardStyles.MRP>MRP <ProductCardStyles.MRPSpan>₹ 17,999</ProductCardStyles.MRPSpan></ProductCardStyles.MRP>
        <ProductCardStyles.ProductPrice>₹ 1999 <ProductCardStyles.ProductPriceSpan>/piece</ProductCardStyles.ProductPriceSpan></ProductCardStyles.ProductPrice>
      </div>
      <div className="container-fluid">
        <div className="row">
          <ProductCardStyles.Compare className="col-6">
            <img src={Images.PlusIcon} alt="" />
            <p>Compare</p>
          </ProductCardStyles.Compare>
          <ProductCardStyles.BuyOn className="col-6">
            <img src={Images.WhatsappIcon} alt="" />
            <p>Buy on</p>
          </ProductCardStyles.BuyOn>
        </div>
      </div>
    </div>
  )
}

export default ProductCard