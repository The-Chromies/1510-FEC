import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpandedCarousel from './expandedCarousel';

function ImageGallery({ selected, currentIndex, resetIndex }) {

  const [length, setLength] = useState(0);
  const [currentThumbnail, setCurrentThumbnail] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // Set the length to match current children from props
  useEffect(() => {
    selected && setLength(selected.photos.length);
  }, [selected]);

  const next = () => currentIndex < (length - 1) && resetIndex(currentIndex + 1);

  const prev = () => currentIndex > 0 && resetIndex(currentIndex - 1);

  const setExpandedState = () => setExpanded(true);

  const setCollapsed = () => setExpanded(false);

  return (
    // pure css carousel
    <React.Fragment>
      <ExpandedCarousel show={expanded} expanded={expanded} selected={selected} currentIndex={currentIndex} onHide={setCollapsed} setExpandedState={setExpandedState} setCollapsed={setCollapsed}/>
      <div className="carousel-container">
        { currentIndex > 0 && <button className="left-arrow" onClick={prev}>&lt;</button> }
          <div className="carousel-wrapper">
            { selected &&
              <div className="thumbnail-carousel">
                { selected.photos.map((thumbnail, i) => (
                  <img key={i} className={currentIndex === i ? "selected-thumbnail" : "thumbnail-carousel-img"} src={thumbnail.thumbnail_url} onClick={() => {resetIndex(i)}}/>
                )) }
              </div> }
              <div className="carousel-content-wrapper">
                  <div className="carousel-content"  style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    { selected &&
                      selected.photos.map((thumbnail, i) => (
                          <img key={i} className="main-carousel" src={thumbnail.url} onClick={setExpandedState}/>
                      ))
                    }
                  </div>
              </div>
          </div>
        { currentIndex < (length - 1) && <button className="right-arrow" onClick={next}>&gt;</button> }
        </div>
    </React.Fragment>
  );
}

// ImageGallery.propTypes = {
//   styles: PropTypes.instanceOf(Object).isRequired,
// }

export default ImageGallery;