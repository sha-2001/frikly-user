import React from 'react'

import ProductCard from './ProductCard';
import './style/ProductsPage.css'

import BuyInBulk from '../../assets/icons/buy-in-bulk.webp'
import CantFindImage from '../../assets/icons/cant-find.webp';

function ProductsPage() {



  return (
    <>
      <div className="products-page">
        <h2 className='products-page-heading'>Products</h2>
        <div className="products-page-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <img className='cant-find-image' src={CantFindImage} alt="" />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className='buying-in-bulk sm-hide'>
        <img src={BuyInBulk} alt="buy in bulk" />
      </div>
    </>
  )
}

export default ProductsPage