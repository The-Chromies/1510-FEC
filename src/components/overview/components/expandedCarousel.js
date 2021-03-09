import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { Modal, Col, Row, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ExpandedCarousel({ expanded, selected, currentIndex, setExpandedState, setCollapsed }) {
  const [index, setIndex] = useState(currentIndex);
  const [zoomed, setZoomed] = useState(false);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    setIndex(currentIndex)
  }, [currentIndex]);

  const zoomIn = () => {
    $('.expanded-carousel-img').css('transform', 'scale(' + 2.5 + ')');
    $('.expanded-carousel-img').css('cursor', 'zoom-out');
    $('.inner-expanded-img').mousemove((e) => {
      $('.inner-expanded-img').css('backgroundPositionX', -e.offsetX + "px");
      $('.inner-expanded-img').css('backgroundPositionY', -e.offsetY + "px");
    })
    setZoomed(true);
  };


  const zoomOut = () => {
    $('.expanded-carousel-img').css('transform', 'scale(' + 1 + ')');
    $('.expanded-carousel-img').css('cursor', 'zoom-in');
    $('.inner-expanded-img').unbind('mousemove');
    setZoomed(false);
  }

  return (
    <>
    <Modal
      centered size="xl" className=" modal full-screen-popup d-block" animation="false" show={expanded} onHide={setCollapsed}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div className="setIndicators">
          <Carousel
          wrap={false}
          interval={null}
          activeIndex={index}
          onSelect={setIndex}
          className="expanded-carousel">
            { selected &&
              selected.photos.map((thumbnail, i) => (
                <Carousel.Item key={i}>
                    <div className="expanded-carousel-img" onClick={zoomed ? zoomOut : zoomIn}>
                      <div style={{ background: `url(${thumbnail.url}) no-repeat`}} className="inner-expanded-img"></div>
                  </div>
              </Carousel.Item>
              ))
            }
          </Carousel>
        </div>
      </Modal.Body>
    </Modal>
  </>
  );
}

export default ExpandedCarousel;