// import './rc.css';
import React, { useState, useEffect } from 'react';
import RelatedList from './RelatedList';
import axios from 'axios';



function RelatedAndComparison() {

  const [relatedList, setRelatedList] = useState([]);
  const [productInfo, setProductInfo] = useState({});

  const getProduct = (id) => {
    axios.get(`http://localhost3000/related/product/${id}`)
    .then((results) => {
      console.log('jajajaj', results.data);
      setProductInfo(results.data);
    })
    .catch((err) => {
      console.log('err:', err);
    })
  }



  const getRelatedProducts = (id) => {
    axios.get(`http://localhost:3000/related/relatedp/${id}`)
    .then((results) => {
      console.log('seeee', results.data[0]);
        results.data.forEach((id) => {
          console.log('hahahaha', id);
          getProduct(id);
        })
        setRelatedList(results.data);

    })
    .catch((err) => {
      console.log('err:', err);
    })
  }



  useEffect(() => {
    getRelatedProducts('18112')
  }, []);

  return (
    <div className="related-comparison-container" >
      Related And Comparison
      <RelatedList relatedProducts={relatedList} productInfo = {productInfo}/>
    </div>
  );
}

export default RelatedAndComparison;
