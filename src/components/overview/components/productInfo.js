/* eslint-disable object-curly-newline */
/* eslint-disable import/named */
/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton, PinterestShareButton, TwitterShareButton, FacebookIcon, PinterestIcon, TwitterIcon,
} from 'react-share';
import { ContactContext } from '../../../Global-Context';

function ProductInfo({ product, selected, goToReviews, sendClick }) {
  const {
    productId, setProductId, generateStarImage, revCount, avgRating, clickTracker, localServer,
  } = useContext(ContactContext);

  return (
    <div className="product-info">
      {/* if no reviews or ratings, do not display starts or rev count */}
      {revCount !== 0
        ? <>
          <div>{generateStarImage(avgRating)}</div>
          <div onClick={(e) => { goToReviews(); sendClick(e); }} className="review-link">
            Read all
            {` ${revCount} `}
            reviews
          </div>
        </>
        : null}
      <div className="product-cat">{product.category}</div>
      <h3 className="product-name">{product.name}</h3>
      {/* render sale price if exists & strike through orginal price */}
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
      with localhost will reciever error: Parameter 'href' should represent a valid URL */}
      <FacebookShareButton url="http://3.19.64.77:3000" quote="Check out this product!">
        <FacebookIcon size={32} round onClick={() => { sendClick({ target: { className: 'facebook-share' } }); }} />
      </FacebookShareButton>
      <PinterestShareButton url="http://3.19.64.77:3000" media={selected}>
        <PinterestIcon size={32} round onClick={() => { sendClick({ target: { className: 'pinterest-share' } }); }} />
      </PinterestShareButton>
      <TwitterShareButton url="http://3.19.64.77:3000" title="Check out this product!">
        <TwitterIcon size={32} round onClick={() => { sendClick({ target: { className: 'twitter-share' } }); }} />
      </TwitterShareButton>
    </div>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  goToReviews: PropTypes.instanceOf(Function).isRequired,
  sendClick: PropTypes.instanceOf(Function).isRequired,
};

export default ProductInfo;
