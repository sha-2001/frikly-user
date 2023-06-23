import React from 'react'
import './product.css'

import * as ProductCardStyles from './ProductCardStyles'

import PlusIcon from '../../assets/Products/plus-icon.png';
import WhatsappIcon from '../../assets/Products/whatsapp-icon.png';
import Table from '../../assets/Products/table.png'

const ProductCard = () => {
  return (
    <div className="product-card mb-3 mb-lg-0" style={{ paddingTop: "13px" }}>
      <div className="card-image ps-3 pe-3 ">
        <img style={{ height: "100%", width: "100%" }} src={Table} alt="" />
      </div>
      <div className="card-content ps-3 pe-3">
        <ProductCardStyles.ProductName>do Dorna Premium Leatherette Rolled arm Sofa, 74.01” 3 Seater, Light Brown </ProductCardStyles.ProductName>
        <ProductCardStyles.MRP>MRP <ProductCardStyles.MRPSpan>₹ 17,999</ProductCardStyles.MRPSpan></ProductCardStyles.MRP>
        <ProductCardStyles.ProductPrice>₹ 1999 <ProductCardStyles.ProductPriceSpan>/piece</ProductCardStyles.ProductPriceSpan></ProductCardStyles.ProductPrice>
      </div>
      <div className="container-fluid">
        <div className="row">
          <ProductCardStyles.Compare className="col-6">
            <img src={PlusIcon} alt="" />
            <p>Compare</p>
          </ProductCardStyles.Compare>
          <ProductCardStyles.BuyOn className="col-6">
            <img src={WhatsappIcon} alt="" />
            <p>Buy on</p>
          </ProductCardStyles.BuyOn>
        </div>
      </div>
    </div>
  )
}

export default ProductCard