import React from 'react';

// Furniture Brands
import Merino from '../../assets/state/brands/merino.webp';
import RoyalTouche from '../../assets/state/brands/royale-touch.webp';
import CenturyLaminates from '../../assets/state/brands/century-laminates.webp';
import GreenlamLaminates from '../../assets/state/brands/greenlam.webp';
import Hettich from '../../assets/state/brands/hettich.webp';
import Hafele from '../../assets/state/brands/hafle.webp';
import Godrej from '../../assets/state/brands/godrej.webp'; // also an electronics brand
import Dorset from '../../assets/state/brands/dorset.webp';
import Dorma from '../../assets/state/brands/dorma.webp';
import Yale from '../../assets/state/brands/yale.webp';
import IPSA from '../../assets/state/brands/ipsa.webp';
import Zone from '../../assets/state/brands/zone.webp';

// Plumbing Brands
import AsianPaints from '../../assets/state/brands/asian-paints.webp';
import Cera from '../../assets/state/brands/cera.webp';
import Jaquar from '../../assets/state/brands/jaquar.webp';
import Hindware from '../../assets/state/brands/hindware.webp';
import Kerovit from '../../assets/state/brands/kerovit.webp';
import Kohler from '../../assets/state/brands/kohler.webp';

// Electronics Brands
import IFB from '../../assets/state/brands/ifb.webp';
import Whirlpool from '../../assets/state/brands/whirlpool.webp';
import Daikin from '../../assets/state/brands/daikin.webp';
import Mitsubishi from '../../assets/state/brands/mitsubishi.webp';

const BrandSlides = ({ brand }) => {
  let furnitures = [
    Merino,
    RoyalTouche,
    CenturyLaminates,
    GreenlamLaminates,
    Hettich,
    Hafele,
    Godrej,
    Dorset,
    Dorma,
    Yale,
    IPSA,
    Zone,
  ];
  let plumbing = [AsianPaints, Cera, Jaquar, Hindware, Kerovit, Kohler];
  let electronics = [IFB, Whirlpool, Daikin, Mitsubishi, Godrej];
  let useBrand = [];

  switch (brand) {
    case 'furniture':
      useBrand = furnitures;
      break;
    case 'plumbing':
      useBrand = plumbing;
      break;
    case 'electronics':
      useBrand = electronics;
      break;
  }

  return (
    <div className='brand-slide'>
      <p className='brands-head'>
        Popular <span>Brands</span> We deal with.
      </p>
      <marquee behavior='scroll' direction='left'>
        {useBrand.map((value, index) => {
          return <img src={value} alt='brand' />;
        })}
      </marquee>
    </div>
  );
};

export default BrandSlides;
