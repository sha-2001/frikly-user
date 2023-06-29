import React, { Fragment } from 'react';
import { LaminatesContainer } from '../HeaderStyle';

const Laminates = ({ subcat }) => {
  let bgcolor = 'brown';
  const setBgColor = () => {
    bgcolor === 'white' ? bgcolor = 'brown' : bgcolor = 'white';
  }
  const toggleBgColor = () => {
    setBgColor();
    console.log(bgcolor);
  };

  return (
    <Fragment>
      <LaminatesContainer>
        {subcat.map((value, index) => {
          console.log(index);
          toggleBgColor();
          return (
            <div key={index} className={`sub-category ${bgcolor}`}>
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
          // {}
          
        })}
        
      </LaminatesContainer>
    </Fragment>
  );
};

export default Laminates;
