/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-fragments */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpandedCarousel from './expandedCarousel';

function ImageGallery({
  selected, currentIndex, resetIndex, sendClick,
}) {
  const [length, setLength] = useState(0);
  const [currentThumbnail, setCurrentThumbnail] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [displayThumbnails, setDisplayThumbnails] = useState([]);

  // Set the length to match current children from props
  useEffect(() => {
    selected && setLength(selected.photos.length);
    setDisplayThumbnails([0, 1, 2, 3, 4, 5, 6]);
  }, [selected]);

  const next = () => currentIndex < (length - 1) && resetIndex(currentIndex + 1);

  const prev = () => currentIndex > 0 && resetIndex(currentIndex - 1);

  const setExpandedState = () => setExpanded(true);

  const setCollapsed = () => setExpanded(false);

  const down = () => {
    let downArr = [...displayThumbnails];
    if (downArr[downArr.length - 1] !== selected.photos.length - 1) {
      downArr = downArr.slice(1);
      downArr.push(downArr[downArr.length - 1] + 1);
      setDisplayThumbnails(downArr);
    }
  };

  const up = () => {
    const upArr = [...displayThumbnails];
    if (upArr[0] !== 0) {
      upArr.pop();
      upArr.unshift(upArr[0] - 1);
      setDisplayThumbnails(upArr);
    }
  };

  return (
    // pure css carousel
    <React.Fragment>
      <ExpandedCarousel
        show={expanded}
        expanded={expanded}
        selected={selected}
        currentIndex={currentIndex}
        onHide={setCollapsed}
        setExpandedState={setExpandedState}
        setCollapsed={setCollapsed}
        sendClick={sendClick}
      />
      <div className="carousel-container">
        { currentIndex > 0 && <button type="button" className="left-arrow" onClick={(e) => { prev(); sendClick(e); }}>&lt;</button> }
        { selected.photos.length > 7 && displayThumbnails[displayThumbnails.length - 1] > 6 ? <button type="button" className="up-arrow" onClick={(e) => { up(); sendClick(e); }}>&and;</button> : null }
        <div className="carousel-wrapper">
          { selected
          && <div className="thumbnail-carousel">
            { selected.photos.map((thumbnail, i) => (
              <React.Fragment>
                {displayThumbnails.includes(i) && <img key={i} alt="" className={currentIndex === i ? 'selected-thumbnail' : 'thumbnail-carousel-img'} src={thumbnail.thumbnail_url} onClick={(e) => { resetIndex(i); sendClick(e); }} />}
              </React.Fragment>
            )) }
          </div> }
          <div className="carousel-content-wrapper">
            <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              { selected
              && selected.photos.map((thumbnail, i) => (
                <img key={i} className="main-carousel" alt="" src={thumbnail.url} onClick={(e) => { setExpandedState(); sendClick(e); }} />
              ))}
            </div>
          </div>
        </div>
        { selected.photos.length > 7 && displayThumbnails[displayThumbnails.length - 1] !== selected.photos.length - 1 ? <button type="button" className="down-arrow" onClick={(e) => { down(); sendClick(e); }}>&or;</button> : null }
        { currentIndex < (length - 1) && <button type="button" className="right-arrow" onClick={(e) => { next(); sendClick(e); }}>&gt;</button> }
      </div>
    </React.Fragment>
  );
}

ImageGallery.propTypes = {
  selected: PropTypes.instanceOf(Object).isRequired,
  resetIndex: PropTypes.instanceOf(Function).isRequired,
  sendClick: PropTypes.instanceOf(Function).isRequired,
};

export default ImageGallery;
