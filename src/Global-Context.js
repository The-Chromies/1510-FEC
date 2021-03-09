/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */
import React, { useState, createContext } from 'react';
import axios from 'axios';

export const ContactContext = createContext();

export const ContactContextProvider = (props) => {
  let [productId, setProductId] = useState(18079);
  const [revCount, setRevCount] = useState(0);
  const [avgRating, setAvgRating] = useState(0);
  // Look at 18078 summary container is strange
  // Look at at images for 18079 in overview
  // Ratings and review should not show up for 18080

  // click tracking function to pass down to components
  const clickTracker = (widgetName, e) => {
  // post req to /interactions endpoint w/ element of page clicked, time of click, & module clicked
    let date = new Date();
    let clickData = {
      element: e.target.className,
      widget: widgetName,
      time: date.toTimeString(),
    };
    axios.post('http://localhost:3000/interactions', clickData)
      .then((res) => {
        console.log('SUCCESSFUL POST TO INTERACTIONS');
        console.log(res);
      })
      .catch((err) => {
        console.log('FAILED TO POST TO INTERACTIONS');
        console.log(err);
      });
  };

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
      clickTracker,
    }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
