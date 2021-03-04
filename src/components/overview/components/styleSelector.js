import React, { useState, useEffect } from 'react';
import ImageGallery from './imageGallery.js';
import ProductInfo from './addToCart.js';
import AddToCart from './addToCart.js';
import PropTypes from 'prop-types';

function StyleSelector({styles, setSelectedStyle}) {

  const [ selected, setSelected ] = useState(styles.results[0]);

  return (
    <div className="style-selector">
      <div>Selected style: {selected.name}</div>
      {
        styles.results.map((style, i) => (
          <React.Fragment key={i}>
            <img onClick={() => {setSelected(style); setSelectedStyle(style)}} src={style.photos[0].thumbnail_url} className="thumbnail-img" key={i}></img>
            { style === selected ? <img src="../public/imgs/check.png" className="style-check"/> : null }
          </React.Fragment>
        ))
      }

    </div>
  );
}

ProductInfo.propTypes = {
  styles: PropTypes.instanceOf(Object).isRequired,
}

export default StyleSelector;
