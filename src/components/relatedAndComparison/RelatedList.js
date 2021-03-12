/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Paper, Button } from '@material-ui/core';
import ProductCard from './ProductCard';
import OutfitList from './OutfitList';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function RelatedList(props) {
  console.log('test in relatedList', props.productInfo[0].features);
  return (
    <Carousel
      className="relatedCarousel"
      responsive={responsive}
    >
      {props.productInfo.map((product, i) => (
        <ProductCard product={product} key={i} styles={props.styles[i].results[0].photos[0].thumbnail_url} productFeatures={product.features} rating={props.rating} stars={props.stars} />
      ))}
    </Carousel>
  );
}

RelatedList.propTypes = {
  // relatedProducts: PropTypes.instanceOf(Array).isRequired,
  productInfo: PropTypes.instanceOf(Array).isRequired,
  styles: PropTypes.instanceOf(Array).isRequired,
  rating: PropTypes.instanceOf(Array).isRequired,
  stars: PropTypes.instanceOf(Function).isRequired,

};

export default RelatedList;
