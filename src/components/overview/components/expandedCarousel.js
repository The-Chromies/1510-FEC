/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable prefer-template */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import {
  Modal, Col, Row, Carousel,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line object-curly-newline
// eslint-disable-next-line max-len
function ExpandedCarousel({
  expanded, selected, currentIndex, setExpandedState, setCollapsed, sendClick,
}) {
  const [index, setIndex] = useState(currentIndex);
  const [zoomed, setZoomed] = useState(false);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  const zoomIn = (e) => {
    sendClick(e);
    $('.inner-expanded-img').css('transform', 'scale(' + 2 + ')');
    $('.inner-expanded-img').css('cursor', 'zoom-out');
    $('.inner-expanded-img').mousemove((e) => {
      $('.inner-expanded-img').css('backgroundPositionX', -e.offsetX + 600 + 'px');
      $('.inner-expanded-img').css('backgroundPositionY', -e.offsetY + 600 + 'px');
    });
    setZoomed(true);
  };

  const zoomOut = (e) => {
    sendClick(e);
    $('.inner-expanded-img').css('transform', 'scale(' + 1 + ')');
    $('.inner-expanded-img').css('cursor', 'zoom-in');
    $('.inner-expanded-img').unbind('mousemove');
    setZoomed(false);
  };

  (() => {
    $('.carousel-control-next').click((e) => sendClick(e));
    $('.carousel-control-prev').click((e) => sendClick(e));
    $('.carousel-indicators').click((e) => sendClick(e));
  })();

  return (
    <>
      <Modal
        centered
        dialogClassName="carousel-modal"
        className=" modal full-screen-popup d-block"
        animation="false"
        show={expanded}
        onHide={setCollapsed}
        onExit={sendClick({ target: { className: 'close' } })}
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="setIndicators">
            <Carousel
              wrap={false}
              interval={null}
              activeIndex={index}
              onSelect={setIndex}
              className="expanded-carousel"
            >
              { selected
              && selected.photos.map((thumbnail, i) => (
                <Carousel.Item key={i}>
                  <div className="expanded-carousel-img" onClick={(e) => { zoomed ? zoomOut(e) : zoomIn(e); }}>
                    <div
                      style={{
                        backgroundImage: `url(${thumbnail.url})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                      }}
                      className="inner-expanded-img"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ExpandedCarousel;
