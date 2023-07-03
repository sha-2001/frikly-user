import React from 'react'
import './state.css'

import Paint1 from '../../assets/state/Paint1.webp';
import Paint2 from '../../assets/state/Paint2.webp';
import Paint3 from '../../assets/state/Paint3.webp';
// import Furnitur5 from '../../assets/state/Furniture5.png';
import ContactBanner from '../../assets/state/contact-banner.webp'

const PaintFrame = () => {
    return (
        <>
            <div>
                <p className="state-furniture-text1"><span>Paints Material Store</span></p>
                <p className="state-furniture-text2">Explore our Vibrant Wall Paint Collection.</p>
            </div>
            <div className="state-furniture">
                <div div className="state-furniture-col1" >
                    <img src={Paint1} alt="" />
                </div >
                <div className="state-furniture-col2">
                    <div className="state-furniture-col2-row1">
                        <img src={Paint2} alt="" />
                    </div>
                </div>
                <div className="state-furniture-col3">
                    <div className="state-furniture-col3-row1">
                        <img src={Paint3} alt="" />
                    </div>
                </div>
                <img style={{
                    width:'webppx',
                    height:'270px',
                    position:"absolute",
                    top:"623vh",
                    left:"558px"
                }} className='contact-banner' src={ContactBanner} alt="" />
            </div >

        </>
    )
}

export default PaintFrame