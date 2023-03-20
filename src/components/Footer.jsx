import React from 'react'

import partner_home from '../assets/icons/partner-home.webp'
import facebook from '../assets/icons/facebook.webp'
import instagram from '../assets/icons/instagram.webp'
import twitter from '../assets/icons/twitter.webp'
import pinterest from '../assets/icons/pinterest.webp'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <img src={partner_home} alt='frikly partner home' />
                <p className='mt-3'>Frikly brings you closer to all of your top picks with a single tap. Now, enjoy the exceptional by making it easier to enhance the aesthetics of your indoor or outdoor settings by adding a modern, trendy, and one-of-a-kind collection.</p>
                <div className='social-handles'>
                    <img src={facebook} alt='facebook' />
                    <img src={instagram} alt='instagram' />
                    <img src={twitter} alt='twitter' />
                    <img src={pinterest} alt='pinterest' />
                </div>
            </div>
            <p className='copywright'>
                © Copywright 2022 by Malu Technologies Pvt Ltd, 207, Jailaxmi Appts, Near Telephone Exchange Square, Nagpur, 440008
            </p>
        </div>
    )
}

export default Footer