/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */
import React, { useState, createContext } from 'react';
import axios from 'axios';
import uuid from 'node-uuid';
import LocalServer from './env/localServ';

export const ContactContext = createContext();

export const ContactContextProvider = (props) => {
  // global state accessible to all components
  let [productId, setProductId] = useState(18085);
  const [revCount, setRevCount] = useState(0);
  const [avgRating, setAvgRating] = useState(0);
  // arr of products added to outfit list in rc
  const [outfitProduct, setOutfitProduct] = useState([]);
  // arr of styles added to outfit list in rc
  const [outfitStyle, setOutfitStyle] = useState([]);
  // selected product
  const [product, setProduct] = useState(null);
  // selected styles obj
  const [styles, setStyles] = useState(null);
  const localServer = LocalServer;

  // click tracking function
  const clickTracker = (widgetName, e) => {
  // post to /interactions endpoint w/ element's class, widget, & time of click
    let date = new Date();
    let clickData = {
      element: e.target.className,
      widget: widgetName,
      time: date.toTimeString(),
    };
    axios.post(`http://${localServer}:3000/interactions`, clickData)
      .then((res) => {
        // console.log('SUCCESSFUL POST TO INTERACTIONS');
        console.log(res);
      })
      .catch((err) => {
        // console.log('FAILED TO POST TO INTERACTIONS');
        console.log(err);
      });
  };

  const generateStarImage = (ratingValue, keyId) => {
    const starCount = ratingValue > 0 ? (Math.round((ratingValue) * 4) / 4).toFixed(2) : 0;

    let remainder = 0;
    remainder = starCount - remainder;
    const starArr = [];
    for (let j = 0; j < 5; j += 1) {
      switch (remainder) { // 4.25
        case 0.25:
          starArr.push(<div key={uuid()}><img src="public/icons/star/quarterStar.png" alt="" className="star-image" /></div>);
          remainder -= 0.25;
          break;
        case 0.50:
          starArr.push(<div key={uuid()}><img src="public/icons/star/halfStar.png" alt="" className="star-image" /></div>);
          remainder -= 0.50;
          break;
        case 0.75:
          starArr.push(<div key={uuid()}><img src="public/icons/star/threeQuarterStar.png" alt="" className="star-image" /></div>);
          remainder -= 0.75;
          break;
        case 1:
          starArr.push(<div key={uuid()}><img src="public/icons/star/fullStar.png" alt="" className="star-image" /></div>);
          remainder -= 1;
          break;
        case 0:
          starArr.push(<div key={uuid()}><img src="public/icons/star/emptyStar.png" alt="" className="star-image" /></div>);
          break;
        default:
          starArr.push(<div key={uuid()}><img src="public/icons/star/fullStar.png" alt="" className="star-image" /></div>);
          remainder -= 1;
          break;
      }
    }
    return (<div className="inline-star" style={{ display: 'inline-flex' }} key={uuid()}>{starArr}</div>);
  };

  // get selected product & style for ov & rc components
  const getProduct = (id) => {
    axios.get(`http://${localServer}:3000/related/product/${id}`)
      .then((results) => {
        console.log('OUTFITPRODUCT!!', results.data);
        let outfitProductList = [...outfitProduct];
        outfitProductList.push(results.data);
        setOutfitProduct(outfitProductList);
      })
      .catch((err) => {
        console.log('err getting outfit product info:', err);
      });
  };

  const getStyle = (id) => {
    axios.get(`http://${localServer}:3000/overview/styles/${id}`)
      .then((results) => {
        let outfitStyleList = [...outfitStyle];
        outfitStyleList.push(results.data);
        setOutfitStyle(outfitStyleList);
      });
  };

  // add product to outfit list
  const handelAddOutfit = (id) => {
    setProductId(id);
    getProduct(id);
    getStyle(id);
  };

  return (
    <ContactContext.Provider value={{
      productId,
      setProductId,
      generateStarImage,
      revCount,
      setRevCount,
      avgRating,
      product,
      styles,
      setAvgRating,
      clickTracker,
      outfitProduct,
      setOutfitProduct,
      outfitStyle,
      setOutfitStyle,
      getProduct,
      getStyle,
      handelAddOutfit,
      localServer,
    }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
