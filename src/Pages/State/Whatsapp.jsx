import React from 'react'

import whatsapp from '../../assets/state/Whatsapp.webp';
import material from '../../assets/state/material-requirements.webp';
import lowest from '../../assets/state/lowest-quote.webp';
import care from '../../assets/state/care-for-customer.webp';
import contactButton from '../../assets/state/contact-button.webp';

const Whatsapp = () => {
  return (
    <div className='state-whatsapp'>
        <div className="state-whatsapp-col1">
            <img src={whatsapp} alt="" />
        </div>
        <div className="state-whatsapp-col2">
            <div className="state-whatsapp-text1">
                <p className='state-whatsapp-heading'>Get your Desired product in less than 30 mins.</p>
                <p className='state-whatsapp-heading-text'>Tired of visiting multiple stores to find the best quote. Don’t worry, we are just a WhatsApp away !</p>
            </div>
            <div className="state-whatsapp-subdiv">
                <div className="state-whatsapp-icon">
                    <img src={material} alt="" />
                </div>
                <div className="material-requirements-text">
                    <p className='state-whatsapp-subheading'>Material requirements</p>
                    <p className='state-whatsapp-para'>Whatsapp us your material requirements and your delivery pincode</p>
                </div>
            </div>
            <div className="state-whatsapp-subdiv">
                <div className="state-whatsapp-icon">
                    <img src={lowest} alt="" />
                </div>
                <div className="lowest-quote-text">
                    <p className='state-whatsapp-subheading'>Lowest quote</p>
                    <p className='state-whatsapp-para'>Our team will share guaranteed lowest quote as compared to other dealers. </p>
                </div>
            </div>
            <div className="state-whatsapp-subdiv">
                <div className="state-whatsapp-icon">
                    <img src={care} alt="" />
                </div>
                <div className="care-for-customer-text">
                    <p className='state-whatsapp-subheading'>Care for Customer</p>
                    <p className='state-whatsapp-para'>Reliable Delivery Solutions: Ensuring Safety and Security Every Step of the Way!</p>
                </div>
            </div>
            <div className="material-contact-button">
                <img src={contactButton} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Whatsapp