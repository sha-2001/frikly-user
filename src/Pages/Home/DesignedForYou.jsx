import React from 'react'

import home_expertise from '../../assets/icons/home-expertise.webp';
import unbeatable_selection from '../../assets/icons/unbeatable-selection.webp';
import smooth_experience from '../../assets/icons/smooth-experience.webp';
import worth from '../../assets/icons/worth.webp';
import customer_service from '../../assets/icons/customer-service.webp';

function DesignedForYou() {
    return (
        <div className='designed-for-you'>
            <h2>Designed For You</h2>
            <div className="designed-for-you-container">
                <div className="designed-for-you-item-1">
                    <div className="card-image">
                    <img src={home_expertise} />
                    </div>
                    <p className="card-title">Home expertise</p>
                    <p className="card-discription">Designing & building your home is our top priority. </p>
                </div>
                <div className="designed-for-you-item-2">
                    <div className="card-image">
                    <img src={unbeatable_selection} />
                    </div>
                    <p className="card-title">Unbeatable selection</p>
                    <p className="card-discription">You think we got that product, with the biggest and richest selection, we covered all your interior needs.</p>
                </div>
                <div className="designed-for-you-item-3">
                    <div className="card-image">
                    <img src={smooth_experience} />
                    </div>
                    <p className="card-title">Smooth experience</p>
                    <p className="card-discription">Distance doesn't matter to us. Wherever you are, we are making it easier to get the home furnishings, interiors, and renovation products</p>
                </div>
                <div className="designed-for-you-item-4">
                    <div className="card-image">
                    <img src={worth} />
                    </div>
                    <p className="card-title">Definite worth</p>
                    <p className="card-discription">Whatever your budget is, we offer the most cutting-edge pricing that falls inside your budget.</p>
                </div>
                <div className="designed-for-you-item-5">
                    <div className="card-image">
                    <img src={customer_service} />
                    </div>
                    <p className="card-title">Expert Customer Service</p>
                    <p className="card-discription">Our friendly team is available  for dedicated customer service (call/chat)  24*7.</p>
                </div>
            </div>
        </div>
    )
}

export default DesignedForYou