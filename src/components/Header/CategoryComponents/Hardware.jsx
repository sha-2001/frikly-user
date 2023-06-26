import { Fragment } from 'react';
import { HardwareContainer } from '../HeaderStyle';

const Hardware = ({ subcat }) => {
  return (
    <Fragment>
      <HardwareContainer>
        {subcat.map((value, key) => (
          <div key={key} className={`sub-category ${key % 2 === 0?'even':'odd'}`}>
            <p>{value.name}</p>
            <ul>
              {value.subcat.map((val, k) => (
                <li key={k}>{val}</li>
              ))}
            </ul>
          </div>
        ))}
      </HardwareContainer>
    </Fragment>
  );
};

export default Hardware;
