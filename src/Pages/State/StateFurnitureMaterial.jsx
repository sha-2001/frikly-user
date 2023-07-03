import React from 'react'

import Furnitur1 from '../../assets/state/Furniture1.webp';
import Furnitur2 from '../../assets/state/Furniture2.webp';
import Furnitur3 from '../../assets/state/Furniture3.webp';
import Furnitur4 from '../../assets/state/Furniture4.webp';
import Furnitur5 from '../../assets/state/Furniture5.webp';

import Electronics1 from '../../assets/state/Electronics1.webp';
import Electronics2 from '../../assets/state/Electronics2.webp';
import Electronics3 from '../../assets/state/Electronics3.webp';
import Electronics4 from '../../assets/state/Electronics4.webp';

import Plumbing1 from '../../assets/state/Plumbing1.webp';
import Plumbing2 from '../../assets/state/Plumbing2.webp';
import Plumbing3 from '../../assets/state/Plumbing3.webp';
import Plumbing4 from '../../assets/state/Plumbing4.webp';

import Paint1 from '../../assets/state/Paint1.webp';
import Paint2 from '../../assets/state/Paint2.webp';
import Paint3 from '../../assets/state/Paint3.webp';


const StateFurnitureMaterial = ({image, heading, subHeading}) => {

    let Furniture = [Furnitur1,Furnitur2,Furnitur3,Furnitur4,Furnitur5];
    let Electronics = [Electronics1,Electronics2,Electronics3,Electronics4,Furnitur5];
    let Plumbing = [Plumbing1,Plumbing2,Plumbing3,Plumbing4,Furnitur5];
    let Paint = [Paint1,Paint2,Paint2,Paint3,Furnitur5]

    let useImages = [];
    switch(image){
        case 1 :
            useImages = Furniture;
            break;
        case 2 :
            useImages = Electronics;
            break;
        case 3 :
            useImages = Plumbing;
            break;
        case 4 :
            useImages = Paint;
            break;
    }
    

    return (
        <>
            <div className='state-template'>
                <p className="state-furniture-text1"><span>{heading}</span></p>
                <p className="state-furniture-text2">{subHeading}</p>
            </div>
            <div className="state-furniture">
                <div div className="state-furniture-col1" >
                    <img src={useImages[0]} alt="" />
                </div >
                <div className="state-furniture-col2">
                    <div className="state-furniture-col2-row1">
                        <img src={useImages[1]} alt="" />
                    </div>
                    <div className="state-furniture-col2-row2">
                        <img src={useImages[2]} alt="" />
                    </div>
                </div>
                <div className="state-furniture-col3">
                    <div className="state-furniture-col3-row1">
                        <img src={useImages[3]} alt="" />
                    </div>
                    <div className="state-furniture-col3-row2">
                        <img src={useImages[4]} alt="" />
                    </div>
                </div>
            </div >
        </>
    )
}

export default StateFurnitureMaterial