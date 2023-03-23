import React from 'react'

import shipping from '../../assets/icons/shipping.webp';
import brand from '../../assets/icons/brand.webp';
import lower_price from '../../assets/icons/lower-price.webp';
import replacements from '../../assets/icons/replacements.webp';

function ReasonsToBuy() {
    return (
        <div className='reasons-to-buy'>
            <h2>4 Reasons To Buy From Us</h2>
            <div className="reasons-to-buy-container">
                <div className="reasons-to-buy-item">
                    <div className="reasons-to-buy-image">
                        <img src={shipping} alt="reasons to buy" />
                    </div>
                    <p>Fast and Free shipping</p>
                </div>
                <div className="reasons-to-buy-item">
                    <div className="reasons-to-buy-image">
                        <img src={brand} alt="reasons to buy" />
                    </div>
                    <p>Sourced directly from 500+ manufacturers & brands</p>
                </div>
                <div className="reasons-to-buy-item">
                    <div className="reasons-to-buy-image">
                        <img src={lower_price} alt="reasons to buy" />
                    </div>
                    <p>Guaranteed lower price</p>
                </div>
                <div className="reasons-to-buy-item">
                    <div className="reasons-to-buy-image">
                        <img src={replacements} alt="reasons to buy" />
                    </div>
                    <p>Easy returns & replacements</p>
                </div>
            </div>
        </div>
    )
}

export default ReasonsToBuy