/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../localStyles/rc.css';
import RelatedList from './RelatedList';
import OutfitCarousel from './OutfitCarousel';
import { ContactContext } from '../../Global-Context';

function RelatedAndComparison() {
  // BRINGING VARIABLES AND FUNCTIONS FROM THE GLOBAL CONTEX WHERE ALL COMPONENTS CAN ACCESS THEM
  const {
    localServer, productId, setProductId, revCount, avgRating, generateStarImage, outfitProduct, setOutfitProduct, outfitStyle, setOutfitStyle, getProduct, getStyle, handelAddOutfit,
  } = useContext(ContactContext);

  // REACT HOOKS
  const [relatedList, setRelatedList] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [styles, setStyles] = useState(null);

  // TAKES PRODUCT ID TO GET RELATED PRODUCTS ARRAY AND SETS IT
  const getRelatedProducts = (id) => {
    axios.get(`http://${localServer}:3000/related/relatedp/${id}`)
      .then((results) => {
        setRelatedList(results.data);
      })
      .catch((err) => {
        console.log('err in getRelatedProducts:', err);
      });
  };
  // MAPS THOUGH RELATED PRODUCTS ARRAY TO GET THE INFO ON EACH PRODUCT AND THEN STYLE OF EACH AS WELL
  const getRelatedAndStyle = () => {
    const productDataArr = relatedList.map((id) =>
      axios.get(`http://${localServer}:3000/related/product/${id}`)
        .then((results) => results.data)
        .catch((err) => {
          console.log('promise array', err);
        }));
    const styleDataArr = relatedList.map((id) => axios.get(`http://${localServer}:3000/overview/styles/${id}`)
      .then((results) => results.data)
      .catch((err) => {
        console.log('STYLES ERROR', err);
      }));
      // WAITS FOR THE AXIOS TO HEPPEN ON EACH ELEMENT IN ARRAY THEN SETS THEM
    Promise.all(productDataArr)
      .then((results) => {
        console.log('TESTING:', results);
        setProductInfo(results);
      })
      .catch((err) => console.log('promiseAll err', err));
    Promise.all(styleDataArr)
      .then((results) => {
        console.log('TESTING STYLE', results);
        setStyles(results);
      })
      .catch((err) => {
        console.log('STYLE POMISE ALL ERROR', err);
      });
  };

  useEffect(() => {
    getRelatedProducts(productId);
  }, []);

  useEffect(() => {
    console.log('relatedList useEffect', relatedList);
    if (relatedList.length > 0) {
      getRelatedAndStyle();
    }
  }, [relatedList]);

  return (
    <div className="related-comparison-container">
      <h5 style={{ marginLeft: 47 }}>Related And Comparison</h5>
      {relatedList && productInfo && styles
        ? <RelatedList className="centerList" relatedProducts={relatedList} productInfo={productInfo} styles={styles} rating={avgRating} stars={generateStarImage} />
        : null}

      <OutfitCarousel rating={avgRating} stars={generateStarImage} setOutfitProduct={setOutfitProduct} />
    </div>
  );
}

export default RelatedAndComparison;
