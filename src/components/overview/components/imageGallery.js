import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ImageGallery({ styles }) {
  let url = styles.results[0].photos[0].url;
  let styleOptions = styles.results;


  return (
    <Carousel
    wrap={false}
    interval={null}
    // indicators={false}
    className="main-carousel">
      {
        styleOptions.map((style, i) => (
          <Carousel.Item key={i}>
          <img
            className="main-carousel"
            src={style.photos[0].url}
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

ImageGallery.propTypes = {
  styles: PropTypes.instanceOf(Object).isRequired,
}

export default ImageGallery;