/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/no-array-index-key */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from './imageGallery';
import ProductInfo from './productInfo';
import AddToCart from './addToCart';

// eslint-disable-next-line object-curly-spacing
function StyleSelector({styles, setSelectedStyle, resetIndex, sendClick}) {
  const [selected, setSelected] = useState(styles.results[0]);

  return (
    <div className="style-selector">
      <div>
        Selected style:
        {selected.name}
      </div>
      {
        styles.results.map((style, i) => (
          <div key={i} className="thumbnail-img">
            <img
              onClick={(e) => { setSelected(style); setSelectedStyle(style); resetIndex(0); sendClick(e); }}
              src={style.photos[0].thumbnail_url}
              className={style === selected ? 'selected-style' : 'thumbnail-img'}
              key={i}
              alt=""
            />
            { style === selected && <img src="../public/imgs/check.png" alt="" className="style-check" /> }
          </div>
        ))
      }
    </div>
  );
}

ProductInfo.propTypes = {
  styles: PropTypes.instanceOf(Object).isRequired,
  setSelectedStyle: PropTypes.instanceOf(Function).isRequired,
  resetIndex: PropTypes.instanceOf(Function).isRequired,
  sendClick: PropTypes.instanceOf(Function).isRequired,
};

export default StyleSelector;
