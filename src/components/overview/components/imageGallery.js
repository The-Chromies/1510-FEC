import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ImageGallery({ styles }) {
  let url = styles.results[0].photos[0].url;

  return (
    <div className="image-gallery">
      <img src={url} className="main-image"></img>
    </div>
  );
}

ImageGallery.propTypes = {
  styles: PropTypes.instanceOf(Object).isRequired,
}

export default ImageGallery;