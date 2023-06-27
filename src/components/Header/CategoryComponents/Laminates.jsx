import React, { Fragment } from 'react';
import { LaminatesContainer } from '../HeaderStyle';

const Laminates = ({ subcat }) => {
  return (
    <Fragment>
      <LaminatesContainer>
        {subcat.map((value, index) => {
          return (
            <div key={index} className='sub-category'>
              <p className='laminates-heading'>{value.name}</p>
              <div className='shop-by'>
                <div className='type'>
                  <p>Shop By Type</p>
                  <ul>
                    {value.subcat[0].subcat.map((val, i) => (
                      <li key={i}>{val}</li>
                    ))}
                  </ul>
                </div>
                <div className='finish'>
                  <p>Shop By Finish</p>
                  <ul>
                    {value.subcat[1].subcat.map((val, i) => (
                      <li key={i}>{val}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </LaminatesContainer>
    </Fragment>
  );
};

export default Laminates;
