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
    // $('.expanded-carousel-img').mousemove((e) => {

    //   let moveX = (e.pageX * -1 / 15);
    //   let moveY = (e.pageY * -1 / 15);
    //   $('.expanded-carousel-img').css('background-position', moveX + 'px ' + moveY + 'px');
    // });
    setZoomed(true);
  };

  // zoomed && $('.expanded-carousel-img').mousemove((e) => {
  //   // get position of image on the page
  //   let bbox = e.target.getBoundingClientRect();

  //   // measure how far the mouse is into the image
  //   let mouseX = e.clientX - bbox.left;
  //   let mouseY = e.clientY - bbox.top;

  //   // figure out how far through the image the mouse is as a percentage
  //   let xPercent = (mouseX / bbox.width) * 100;
  //   let yPercent = (mouseY / bbox.height) * 100;

  //   // use tranform- origin to center mouse zoom
  //   $(this).css('transform-origin', (xPercent+'% ' + yPercent+'%'));
  // });

  // // $('.expanded-carousel-img').on('mousenter', () => {
  // //   $(this)
  // // })

  const zoomOut = () => {
    $('.expanded-carousel-img').css('transform', 'scale(' + 1 + ')');
    $('.expanded-carousel-img').css('cursor', 'zoom-im');
    setZoomed(false);
  }

  return (
    <>
    <Modal
      centered size="lg" className=" modal full-screen-popup d-block" animation="false" show={expanded} onHide={setCollapsed}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        {/* // react bootstrap carousel */}
        <div className="setIndicators">
          <Carousel
          wrap={false}
          interval={null}
          // {currentIndex && activeIndex={index}}
          activeIndex={index}
          onSelect={setIndex}
          // indicators={false}
          className="expanded-carousel">
            { selected &&
              selected.photos.map((thumbnail, i) => (
                <Carousel.Item key={i}>
                    <div className="expanded-carousel-img" onClick={zoomed ? zoomOut : zoomIn}>
                    <img src={thumbnail.url} id="inner-expanded-img"/>
                  </div>
                {/* <img
                  className="expanded-carousel-img"
                  src={thumbnail.url}
                  onClick={zoomed ? zoomOut : zoomIn}
                /> */}
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