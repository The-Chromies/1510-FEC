import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
  return(
    <div>
      <h1>{props.product}</h1>
      {/* <h2>{props.productInfo}</h2> */}
    </div>
  )
};


ProductCard.propTypes = {
  product: PropTypes.instanceOf(Number).isRequired,
  productInfo: PropTypes.instanceOf(Object).isRequired,

};

export default ProductCard;