/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
// import Carousel from 'react-multi-carousel';
// import { Paper, Button } from '@material-ui/core';

function RelatedList(props) {
  console.log('test in relatedList', props.productInfo);
  return (
    <div className="relatedCarousel">
      {props.productInfo.map((product, i) => (
        <ProductCard product={product} key={i} styles={props.styles[i].results[0].photos[0].thumbnail_url} />
      ))}
    </div>

  );
}

RelatedList.propTypes = {
  // relatedProducts: PropTypes.instanceOf(Array).isRequired,
  productInfo: PropTypes.instanceOf(Array).isRequired,
  styles: PropTypes.instanceOf(Array).isRequired,
};

export default RelatedList;
