// import './rc.css';
import React, { useState, useEffect, useContext } from 'react';
import RelatedList from './RelatedList';
import axios from 'axios';
import { ContactContext } from '../../Global-Context';



function RelatedAndComparison() {
  //Global Context addition
  let {productId, setProductId} = useContext(ContactContext);



  const [relatedList, setRelatedList] = useState([]);
  const [productInfo, setProductInfo] = useState([]);

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
    console.log('relatedList useEffect', relatedList)
    if (relatedList.length > 0) {
      fufillPromise();
    }
  }, [relatedList])



  const getRelatedProducts = (id) => {
    axios.get(`http://localhost:3000/related/relatedp/${id}`)
    .then((results) =>
      // results.data.forEach((id) => {
        //   // console.log('hahahaha', id);
        //   getProduct(id)
        // })
        setRelatedList(results.data)
      )
      .catch((err) => {
        console.log('err in getRelatedProducts:', err);
      })
      // .then(()=> {
      //   // fufillPromise()
      //   console.log('TESTESTES', relatedList);
      // })
    }


    const fufillPromise = () => {
      // console.log('running function fufillPromise', relatedList);
      let promiseArr = relatedList.map((id) => {
        // console.log('id from promise array', id);
        return axios.get(`http://localhost:3000/related/product/${id}`)
        .then((results) => {
          return results.data;
        })
        .catch((err) => {
          console.log('promise array', err);
        })
      })
      Promise.all(promiseArr)
      .then((results) => {
        console.log('TESTING:', results);
        setProductInfo(results)
      })
      .catch(err => console.log('promiseAll err', err));
    }


    useEffect(() => {
    getRelatedProducts(productId)
  }, []);

  return (
    <div className="related-comparison-container" >
      Related And Comparison
      <RelatedList relatedProducts={relatedList}  productInfo={productInfo}/>
    </div>
  );
}

export default RelatedAndComparison;
