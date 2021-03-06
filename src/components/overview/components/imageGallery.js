import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ImageGallery({ selected }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [currentThumbnail, setCurrentThumbnail] = useState(0);

  // Set the length to match current children from props
  useEffect(() => {
    selected && setLength(selected.photos.length)
  }, [selected]);

  const next = () => {
    if (currentIndex < (length - 1)) {
        setCurrentIndex(prevState => prevState + 1)
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }
  };

  return (
    // react bootstrap carousel
    // <Carousel
    // wrap={false}
    // interval={null}
    // // indicators={false}
    // className="main-carousel">
    //   { selected &&
    //     selected.photos.map((thumbnail, i) => (
    //       <Carousel.Item key={i}>
    //       <img
    //         className="main-carousel"
    //         src={thumbnail.url}
    //       />
    //     </Carousel.Item>
    //     ))
    //   }
    // </Carousel>

    // pure css carousel
    <div className="carousel-container">
    { currentIndex > 0 && <button className="left-arrow" onClick={prev}>&lt;</button> }
      <div className="carousel-wrapper">
        { selected &&
          <div className="thumbnail-carousel">
            { selected.photos.map((thumbnail, i) => (
              <img key={i} className={currentIndex === i ? "selected-thumbnail" : "thumbnail-carousel-img"} src={thumbnail.thumbnail_url} onClick={() => {setCurrentIndex(i)}}/>
            )) }
          </div> }
          <div className="carousel-content-wrapper">
              <div className="carousel-content"  style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                { selected &&
                  selected.photos.map((thumbnail, i) => (
                      <img key={i} className="main-carousel" src={thumbnail.url}/>
                  ))
                }
              </div>
          </div>
      </div>
    { currentIndex < (length - 1) && <button className="right-arrow" onClick={next}>&gt;</button> }
    </div>
  );
}

// ImageGallery.propTypes = {
//   styles: PropTypes.instanceOf(Object).isRequired,
// }

export default ImageGallery;