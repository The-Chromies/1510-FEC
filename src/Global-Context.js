/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */
import React, { useState, createContext } from "react";

export const ContactContext = createContext();

export const ContactContextProvider = (props) => {
  let [test, setTest] = useState(0);
  let orangutan = "thisworked"
  
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
    <ContactContext.Provider value={[test, setTest, orangutan, generateStarImage]}>
      {props.children}
    </ContactContext.Provider>
  );
}