/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */
import React, { useState, createContext } from 'react';

export const ContactContext = createContext();

export const ContactContextProvider = (props) => {
  let [productId, setProductId] = useState(18079);
  const [revCount, setRevCount] = useState(0);
  const [avgRating, setAvgRating] = useState(0);
  // Look at 18078 summary container is strange
  // Look at at images for 18079 in overview
  // Ratings and review should not show up for 18080

  const generateStarImage = (starCount, keyId) => {
    let remainder = 0;
    remainder = starCount - remainder;
    const starArr = [];
    for (let j = 0; j < 5; j += 1) {
      switch (remainder) { // 4.25
        case 0.25:
          starArr.push(<img src="public/icons/star/quarterStar.png" alt="" className="star-image" />);
          remainder -= 0.25;
          break;
        case 0.50:
          starArr.push(<img src="public/icons/star/halfStar.png" alt="" className="star-image" />);
          remainder -= 0.50;
          break;
        case 0.75:
          starArr.push(<img src="public/icons/star/threeQuarterStar.png" alt="" className="star-image" />);
          remainder -= 0.75;
          break;
        case 1:
          starArr.push(<img src="public/icons/star/fullStar.png" alt="" className="star-image" />);
          remainder -= 1;
          break;
        case 0:
          starArr.push(<img src="public/icons/star/emptyStar.png" alt="" className="star-image" />);
          break;
        default:
          starArr.push(<img src="public/icons/star/fullStar.png" alt="" className="star-image" />);
          remainder -= 1;
          break;
      }
    }
    return starArr;
  };

  return (
    <ContactContext.Provider value={{
      productId,
      setProductId,
      generateStarImage,
      revCount,
      setRevCount,
      avgRating,
      setAvgRating,
    }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
