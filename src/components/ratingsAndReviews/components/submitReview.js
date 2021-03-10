/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Col, Row,
} from 'react-bootstrap';
import axios from 'axios';

function ReviewListContainer({
  productId, showNewRev, handleClose, findReviewMeta,
}) {
  const formValues = Object.freeze({
    product_id: Number(productId),
    rating: 1,
    summary: '',
    body: '',
    recommend: false,
    name: '',
    email: '',
    photos: [],
    characteristics: {},
  });
  const [formData, setFormData] = useState(formValues);

  //   const htmlEncode = (str) => String(str).replace(/[^\w. ]/gi, (c) => `&#${c.charCodeAt(0)};`);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data');
    console.log(formData);
    axios({
      method: 'post',
      url: 'http://localhost:3000/ratings/createReview',
      data: formData,
    })
      .then((result) => {
        console.log(result);
        findReviewMeta(); // this should adjust the revCount and re-kick-off a fetch
        // add local storage option here
      })
      .catch((error) => {
        console.log(error);
      });
    handleClose();
  };

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
                <label htmlFor="recipient-name">
                  Enter your Name:
                  <input name="name" onChange={handleChange} type="text" className="form-control has-validation" id="recipient-name" pattern="^[a-zA-Z0-9_-]{3,16}$" placeholder="Nickname" required />
                </label>
              </Col>
              <Col sm={6} md={6}>
                <label htmlFor="recipient-email">
                  Enter your email:
                  <input name="email" onChange={handleChange} type="email" className="form-control has-validation" id="recipient-email" placeholder="name@example.com" required />
                </label>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={12}>
                <label htmlFor="star-select">
                  How many Stars would you give this product?
                </label>
                <input name="rating" onChange={handleChange} type="range" value={formData.rating} className="custom-range" min="1" max="5" step="1" id="star-select" required />
              </Col>
            </Row>
            <hr />
            <div className="form-group">
              <label htmlFor="message-subject">
                Review Title
                <input name="summary" onChange={handleChange} type="text" className="form-control has-validation" id="message-subject" pattern="^.{1,50}" placeholder="Title Your Review" required />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="message-subject">
                Review Body
              </label>
              <textarea name="body" onChange={handleChange} className="form-control has-validation" id="message-body is-valid" pattern=".{1,1000}" placeholder="What did you think?" required />
            </div>
            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Submit Review</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

ReviewListContainer.propTypes = {
  showNewRev: PropTypes.bool.isRequired,
  handleClose: PropTypes.instanceOf(Function).isRequired,
  productId: PropTypes.number.isRequired,
  findReviewMeta: PropTypes.instanceOf(Function).isRequired,
};

export default ReviewListContainer;
