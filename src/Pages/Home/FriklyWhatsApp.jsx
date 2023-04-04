import React from 'react'

import frikly_whatsapp from '../../assets/icons/frikly-whatsapp.webp'

function FriklyWhatsapp() {
    return (
        <div className='frikly-whatsapp container-fluid '>
            <div className="whatsapp-screen">
                <img src={frikly_whatsapp} alt="frikly whatsapp" />
            </div>
            <div className="whatsapp-text">
                <p className='whatsapp-heading'>Tired of visiting multiple stores to find your desired product?
                    Don’t worry, we are just a WhatsApp away !
                </p>
                <p className='whatsapp-para'>Share your desired product image with us & we will source the product for you from our more than <span className='whatsapp-text-highlight'>500+ factories & suppliers</span></p>
                <button className='share-now'></button>
            </div>
        </div>
    )
}

export default FriklyWhatsapp