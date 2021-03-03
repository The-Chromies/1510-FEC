import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';



function RelatedList(props) {
  // console.log('test', relatedProducts);
  return (
    <div>
      {props.relatedProducts.map((product) => {
        return(
          <ProductCard product={product} productInfo={props.productInfo}/>
        )
      })}
    </div>
  )
}


RelatedList.propTypes = {
  relatedProducts: PropTypes.instanceOf(Array).isRequired,
  productInfo: PropTypes.instanceOf(Object).isRequired,
};


export default RelatedList;
