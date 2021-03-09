/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  FacebookShareButton, PinterestShareButton, TwitterShareButton, FacebookIcon, PinterestIcon, TwitterIcon,
} from 'react-share';

// num of reviews for selected product & rating average of product passed down as props
function ProductInfo({
  product, selected, goToReviews, generateStarImage, sendClick, revCount, ratingAvg,
}) {
  return (
    <div className="product-info">
      <div>{generateStarImage(ratingAvg)}</div>
      {/* replace w/ num of reviews for a given product passed down as props */}
      <div onClick={(e) => { goToReviews(); sendClick(e); }} className="review-link">
        Read all
        {` ${revCount} `}
        reviews
      </div>
      <div>{product.category}</div>
      <h3>{product.name}</h3>
      { selected && selected.sale_price === null ? <div>{`$${selected.original_price}`}</div>
        : selected && selected.sale_price !== null
          ? <div className="modified-prices">
            <div className="original-price">{`$${selected.original_price}`}</div>
            <div className="sale-price">{`$${selected.sale_price}`}</div>
          </div>
          : <div>{`$${product.default_price}`}</div> }
      <div className="product-description">
        &#10;
        {product.description}
      </div>
      {/* facebook redirect error will go away after deployment/no longer using localhost
      currently will reciever error: Parameter 'href' should represent a valid URL */}
      {/* <div className="facebook-share" onClick={(e) => { console.log(e.target.className); }}>
      </div> */}
      <FacebookShareButton url="http://localhost:8080" quote="Check out this product!">
        <FacebookIcon size={32} round onClick={() => { sendClick({ target: { className: 'facebook-share' } }); }} />
      </FacebookShareButton>
      <PinterestShareButton url="http://localhost:8080" media={selected}>
        <PinterestIcon size={32} round onClick={() => { sendClick({ target: { className: 'pinterest-share' } }); }} />
      </PinterestShareButton>
      <TwitterShareButton url="http://localhost:8080" title="Check out this product!">
        <TwitterIcon size={32} round onClick={() => { sendClick({ target: { className: 'twitter-share' } }); }} />
      </TwitterShareButton>
    </div>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default ProductInfo;
