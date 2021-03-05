/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, Col, Row,
} from 'react-bootstrap';

function ReviewListContainer({ showNewRev, handleClose, handleOpen }) {
  return (
    <>
      <Modal size="lg" className=" modal full-screen-popup d-block" animation="false" centered show={showNewRev} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="needs-validation">
            <Row>
                <Col sm={6} md={6}>
                  <label htmlFor="recipient-name  ">
                    Enter your Name:
                    <input type="text" className="form-control has-validation" id="recipient-name" pattern="^[a-zA-Z0-9_-]{3,16}$" placeholder="Nickname" required />
                  </label>
                </Col>
                <Col sm={6} md={6}>
                  <label htmlFor="recipient-email">
                    Enter your email:
                    <input type="email" className="form-control has-validation" id="recipient-email" placeholder="name@example.com" required />
                  </label>
                </Col>
            </Row>
            <Row>
              <Col sm={12} md={12}>
                <label htmlFor="star-select">
                  How many Stars would you give this product?
                </label>
                <input type="range" className="custom-range" min="1" max="5" step="1" id="star-select" required />
              </Col>
            </Row>
            <hr />
            <div className="form-group">
              <label htmlFor="message-subject">
                Review Title
                <input type="text" className="form-control has-validation" id="message-subject" pattern="^[a-zA-Z0-9_-]{1,50}$" placeholder="Title Your Review" required />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="message-subject">
                Review Body
              </label>
              <textarea className="form-control has-validation" id="message-body is-valid" pattern=".{1,1000}" placeholder="What did you think?" required />
            </div>
            <button className="btn btn-primary" type="submit">Submit Review</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

ReviewListContainer.propTypes = {
  showNewRev: PropTypes.bool.isRequired,
  handleClose: PropTypes.instanceOf(Function).isRequired,
  handleOpen: PropTypes.instanceOf(Function).isRequired,
};

export default ReviewListContainer;
