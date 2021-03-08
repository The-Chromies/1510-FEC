import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';



function RelatedList(props) {
  console.log('test in relatedList', props.productInfo);
  return (
    <div className= 'relatedCarousel'>
      {props.productInfo.map((product, i) => {
        return (
          <ProductCard product={product} key={i} styles={props.styles[i].results[0].photos[0].thumbnail_url}/>
        )
      })}
    </div>



  )
}


RelatedList.propTypes = {
  relatedProducts: PropTypes.instanceOf(Array).isRequired,
  // productInfo: PropTypes.instanceOf(Array).isRequired,
};


export default RelatedList;
