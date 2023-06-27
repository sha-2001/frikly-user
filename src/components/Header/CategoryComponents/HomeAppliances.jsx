import React, { Fragment } from 'react';
import { HomeAppliancesContainer } from '../HeaderStyle';
import { HomeApplicancesImages } from '../HeaderImages';

const HomeAppliances = ({ subcat }) => {
  const renderedIndices = [];
  const ImageArray = [HomeApplicancesImages.Twenty,HomeApplicancesImages.Thirty];
  let indexOfImage = 0;

  return (
    <Fragment>
      <HomeAppliancesContainer>
        {subcat.map((value, index) => {
          // Skip the current iteration if the index has already been rendered
          if (renderedIndices.includes(index)) {
            return null; // Skip rendering
          }

          if(value.name === ''){
            return(
              <div className="sub-category">
                <img src={ImageArray[indexOfImage]} alt="" />
              </div>
            )
          }

          const matchingIndices = [index]; // Start with the current index

          // Find consecutive indices with the same column_id
          let nextIndex = index + 1;
          while (nextIndex < subcat.length && subcat[nextIndex].column_id === value.column_id) {
            matchingIndices.push(nextIndex);
            nextIndex++;
          }

          // Mark the matching indices as rendered
          renderedIndices.push(...matchingIndices);

          return (
            <div key={index} className='sub-category'>
              {matchingIndices.map((matchingIndex) => {
                const matchingValue = subcat[matchingIndex];
                return (
                  <Fragment key={matchingIndex}>
                    <p>{matchingValue.name}</p>
                    <ul>
                      {matchingValue.subcat.map((val, i) => (
                        <li key={i}>{val}</li>
                      ))}
                    </ul>
                  </Fragment>
                );
              })}
            </div>
          );
        })}
      </HomeAppliancesContainer>
    </Fragment>
  );
};

export default HomeAppliances;
