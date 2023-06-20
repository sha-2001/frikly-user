import React from 'react'

import Furnitur1 from '../../assets/state/Furniture1.png';
import Furnitur2 from '../../assets/state/Furniture2.png';
import Furnitur3 from '../../assets/state/Furniture3.png';
import Furnitur4 from '../../assets/state/Furniture4.png';
import Furnitur5 from '../../assets/state/Furniture5.png';

import Electronics1 from '../../assets/state/Electronics1.png';
import Electronics2 from '../../assets/state/Electronics2.png';
import Electronics3 from '../../assets/state/Electronics3.png';
import Electronics4 from '../../assets/state/Electronics4.png';

import Plumbing1 from '../../assets/state/Plumbing1.png';
import Plumbing2 from '../../assets/state/Plumbing2.png';
import Plumbing3 from '../../assets/state/Plumbing3.png';
import Plumbing4 from '../../assets/state/Plumbing4.png';

import Paint1 from '../../assets/state/Paint1.png';
import Paint2 from '../../assets/state/Paint2.png';
import Paint3 from '../../assets/state/Paint3.png';


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
            <div>
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