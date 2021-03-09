/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RelatedList from './RelatedList';
import '../localStyles/rc.css';
import OutfitList from './OutfitList';
import { ContactContext } from '../../Global-Context';

function RelatedAndComparison() {
  const {
    productId, setProductId, revCount, ratingAvg,
  } = useContext(ContactContext);

  const [relatedList, setRelatedList] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [styles, setStyles] = useState(null);

  // const getProduct = (id) => {
  //   axios.get(`http://localhost:3000/related/product/${id}`)
  //   .then((results) => {
  //     // console.log('jajajaj', results.data);
  //     // setRelatedList([results.data, ...relatedList]);
  //     // setProductInfo(results.data);
  //   })
  //   .catch((err) => {
  //     console.log('err getting product info:', err);
  //   })
  // }

  useEffect(() => {
    console.log('relatedList useEffect', relatedList);
    if (relatedList.length > 0) {
      getRelatedAndStyle();
    }
  }, [relatedList]);

  const getRelatedProducts = (id) => {
    axios.get(`http://localhost:3000/related/relatedp/${id}`)
      .then((results) =>
      // results.data.forEach((id) => {
        //   // console.log('hahahaha', id);
        //   getProduct(id)
        // })
        setRelatedList(results.data))
      .catch((err) => {
        console.log('err in getRelatedProducts:', err);
      });
    // .then(()=> {
    //   // fufillPromise()
    //   console.log('TESTESTES', relatedList);
    // })
  };

  const getRelatedAndStyle = () => {
    // console.log('running function fufillPromise', relatedList);
    const productDataArr = relatedList.map((id) =>
    // console.log('id from promise array', id);
      axios.get(`http://localhost:3000/related/product/${id}`)
        .then((results) => results.data)
        .catch((err) => {
          console.log('promise array', err);
        }));
    const styleDataArr = relatedList.map((id) => axios.get(`http://localhost:3000/overview/styles/${id}`)
      .then((results) => results.data)
      .catch((err) => {
        console.log('STYLES ERROR', err);
      }));
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

  return (
    <div className="related-comparison-container">
      Related And Comparison
      {relatedList && productInfo && styles
        ? <RelatedList relatedProducts={relatedList} productInfo={productInfo} styles={styles} />
        : null}
      <OutfitList />
    </div>
  );
}

export default RelatedAndComparison;
