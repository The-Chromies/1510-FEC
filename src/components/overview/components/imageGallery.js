import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpandedCarousel from './expandedCarousel';

function ImageGallery({ selected, currentIndex, resetIndex }) {

  const [length, setLength] = useState(0);
  const [currentThumbnail, setCurrentThumbnail] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [displayThumbnails, setDisplayThumbnails] = useState([]);


  // Set the length to match current children from props
  useEffect(() => {
    selected && setLength(selected.photos.length);
    setDisplayThumbnails([0,1,2,3,4,5,6]);
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

  const up  = () => {
    let upArr = [...displayThumbnails];
    if (upArr[0] !== 0) {
      upArr.pop();
      upArr.unshift(upArr[0] - 1);
      setDisplayThumbnails(upArr);
    }
  };

  return (
    // pure css carousel
    <React.Fragment>
      <ExpandedCarousel show={expanded} expanded={expanded} selected={selected} currentIndex={currentIndex} onHide={setCollapsed} setExpandedState={setExpandedState} setCollapsed={setCollapsed}/>
      <div className="carousel-container">
        { currentIndex > 0 && <button className="left-arrow" onClick={prev}>&lt;</button> }
        { selected.photos.length > 7 && displayThumbnails[displayThumbnails.length - 1] > 6 ? <button className="up-arrow" onClick={up}>&and;</button> : null }
          <div className="carousel-wrapper">
            { selected &&
              <div className="thumbnail-carousel">
                { selected.photos.map((thumbnail, i) => (
                  <React.Fragment>
                    {displayThumbnails.includes(i) && <img key={i} className={currentIndex === i ? "selected-thumbnail" : "thumbnail-carousel-img"} src={thumbnail.thumbnail_url} onClick={() => {resetIndex(i)}}/>}
                    {/* // <img key={i} className={currentIndex === i ? "selected-thumbnail" : "thumbnail-carousel-img"} src={thumbnail.thumbnail_url} onClick={() => {resetIndex(i)}}/> */}
                  </React.Fragment>
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
        { selected.photos.length > 7 && displayThumbnails[displayThumbnails.length - 1] !== selected.photos.length - 1 ? <button className="down-arrow" onClick={down}>&or;</button> : null }
        { currentIndex < (length - 1) && <button className="right-arrow" onClick={next}>&gt;</button> }
        </div>
    </React.Fragment>
  );
}

// ImageGallery.propTypes = {
//   styles: PropTypes.instanceOf(Object).isRequired,
// }

export default ImageGallery;