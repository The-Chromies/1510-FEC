import React, { useState, useEffect } from 'react';
import ImageGallery from './imageGallery.js';
import ProductInfo from './addToCart.js';
import AddToCart from './addToCart.js';
import PropTypes from 'prop-types';

function StyleSelector({styles, setSelectedStyle, resetIndex, sendClick}) {

  const [ selected, setSelected ] = useState(styles.results[0]);

  return (
    <div className="style-selector">
      <div>Selected style: {selected.name}</div>
      {
        styles.results.map((style, i) => (
          <div key={i} className="thumbnail-img">
            <img onClick={(e) => {setSelected(style); setSelectedStyle(style); resetIndex(0); sendClick(e)}} src={style.photos[0].thumbnail_url}
            className={ style === selected ? "selected-style" : "thumbnail-img" } key={i}></img>
            { style === selected && <img src="../public/imgs/check.png" className="style-check"/> }
          </div>
        ))
      }
    </div>
  );
}

ProductInfo.propTypes = {
  styles: PropTypes.instanceOf(Object).isRequired,
}

export default StyleSelector;
