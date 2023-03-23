import React from 'react'

import OnTheWayCard from '../../components/OnTheWayCard'

import furniture from '../../assets/icons/furniture-material.webp';
import plumbing from '../../assets/icons/plumbing.webp';
import electrical from '../../assets/icons/electrical.webp';
import bath from '../../assets/icons/bath.webp';
import rugs from '../../assets/icons/rugs.webp';
import kitchen from '../../assets/icons/kitchen.webp';
import outdoor_furniture from '../../assets/icons/outdoor-furniture.webp';
import fittings from '../../assets/icons/fittings.webp';

function OnTheWay() {

    return (
        <div className=' on-the-way'>
            <div className='on-the-way-banner'>
                <div>
                    <h1>On the way</h1>
                    <p>All things interior, all in one place</p>
                    <p><i>#friklyforhome</i></p>
                </div>
            </div>
            <div className='on-the-way-items'>
                <div className='on-the-way-items-row-1'>
                    <OnTheWayCard card={{ image: furniture, text: 'Furniture materials' }} />
                    <OnTheWayCard card={{ image: plumbing, text: 'Plumbing' }} />
                    <OnTheWayCard card={{ image: electrical, text: 'Electrical & Lightning' }} />
                    <OnTheWayCard card={{ image: bath, text: 'Bedding & Bath' }} />
                </div>
                <div className='on-the-way-items-row-2'>
                    <OnTheWayCard card={{ image: rugs, text: 'Rugs & Decor' }} />
                    <OnTheWayCard card={{ image: kitchen, text: 'Kitchen Accessories' }} />
                    <OnTheWayCard card={{ image: outdoor_furniture, text: 'Outdoor Furniture' }} />
                    <OnTheWayCard card={{ image: fittings, text: 'Furniture fittings & hardware' }} />
                </div>
            </div>
        </div>
    )
}

export default OnTheWay