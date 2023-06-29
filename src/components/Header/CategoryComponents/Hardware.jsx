import React, { Fragment, useState } from 'react';
import { HardwareContainer } from '../HeaderStyle';

const Hardware = ({ subcat }) => {
  const renderedIndices = [];
  let bgcolor = 'white';
  let setBgColor = () => {
    bgcolor === 'white' ? bgcolor = 'brown' : bgcolor = 'white';
  }

  const toggleBgColor = () => {
    setBgColor();
  };

  return (
    <Fragment>
      <HardwareContainer>
        {subcat.map((value, index) => {
          // Skip the current iteration if the index has already been rendered
          if (renderedIndices.includes(index)) {
            return null; // Skip rendering
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
            <div key={index} className={`sub-category ${bgcolor}`}>
              { 
              matchingIndices.map((matchingIndex) => {
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
              {toggleBgColor()}
            </div>
          );
        })}
      </HardwareContainer>
    </Fragment>
  );
};

export default Hardware;
