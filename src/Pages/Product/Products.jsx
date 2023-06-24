import React from 'react'
import './product.css'
import ProductCard from './ProductCard'
import {Images} from './ProductImages';

import {FilterNav} from './ProductStyledComponents'

const Products = () => {
    return (
        <div className='products-page'>
            <div className="products-nav">
                <p className='products-nav1'>Home &gt; Laminates and Mica &gt; <span>Marbel and Stone </span> </p>
                <FilterNav>
                    <span className='span-1'>Filter By</span> 
                    <button className='btn-1'>Category</button>
                    <button className='btn-1'>Type</button>
                    <button className='btn-1'>Color</button>
                    <span className='span-2'>Sort By</span>
                    <button className='btn-2'>Lowest to highest</button>
                </FilterNav>
            </div>
            <div className="products-container container-fluid">
                <div className="row mb-4 mt-4 row-cols-2 row-cols-lg-4 fs-sm-6">
                    <div className="col">
                        <ProductCard />
                    </div>
                    <div className="col">
                        <ProductCard />
                    </div>
                    <div className="col">
                        <ProductCard />
                    </div>
                    <div className="col">
                        <ProductCard />
                    </div>
                </div>
                <div className="row mb-4 row-cols-2 row-cols-lg-4 fs-sm-6">
                    <div className="col">
                        <ProductCard />
                    </div>
                    <div className="col">
                        <ProductCard />
                    </div>
                    <div className="col">
                        <ProductCard />
                    </div>
                    <div className="col">
                        <ProductCard />
                    </div>
                </div>
                <div className="row ten-off mb-4 mt-4">
                    <img className='d-none d-md-block' src={Images.TenPercentOff} alt="" />
                    <img className='d-md-none' src={Images.MobiletenPercentOff} alt="" />
                </div>
                <div className="row mb-4 row-cols-2 row-cols-lg-4 fs-sm-6">
                    <div className="col">
                        <ProductCard />
                    </div>
                    <div className="col">
                        <ProductCard />
                    </div>
                    <div className="col">
                        <ProductCard />
                    </div>
                    <div className="col">
                        <ProductCard />
                    </div>
                </div>
                <div className="row mb-4 row-cols-2 row-cols-lg-4 fs-sm-6">
                    <div className="col">
                        <ProductCard />
                    </div>
                    <div className="col">
                        <ProductCard />
                    </div>
                    <div className="col">
                        <ProductCard />
                    </div>
                    <div className="col">
                        <ProductCard />
                    </div>
                </div>
                <div className="row mb-4 product-pagination">
                    <img src={Images.ProductPagination} alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Products