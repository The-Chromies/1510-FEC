import React from 'react';
import ImageGallery from './imageGallery.js';
import ProductInfo from './addToCart.js';
import AddToCart from './addToCart.js';
import PropTypes from 'prop-types';

function StyleSelector({styles}) {

  return (
    <div className="style-selector">
      {
        styles.results.map((style, i) => (
          <img src={style.photos[0].thumbnail_url} className="thumbnail-img" key={i}></img>
        ))
      }
    </div>
  );
}

ProductInfo.propTypes = {
  styles: PropTypes.instanceOf(Object).isRequired,
}

export default StyleSelector;
