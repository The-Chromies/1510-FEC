/* eslint-disable no-alert */
/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Col, Row,
} from 'react-bootstrap';
import axios from 'axios';
import uuid from 'node-uuid';
import CharRadio from './charRadio';
import { ContactContext } from '../../../Global-Context';
import RenderPhoto from './renderPhoto';

function ReviewListContainer({
  productId, showNewRev, handleClose, findReviewMeta, reviewMeta,
}) {
  const {
    localServer, clickTracker,
  } = useContext(ContactContext);

  // eslint-disable-next-line no-var
  let [charObj, setCharObj] = useState({});

  let charList = [];
  if (reviewMeta.characteristics) {
    charList = Object.keys(reviewMeta.characteristics);
  }

  const formValues = Object.freeze({
    product_id: Number(productId),
    rating: 1,
    summary: '',
    body: '',
    recommend: false,
    name: '',
    email: '',
    photos: [],
    characteristics: charObj,
  });
  const [formData, setFormData] = useState(formValues);
  const [photoUpdate, setPhotoUpdate] = useState(false);

  //   const htmlEncode = (str) => String(str).replace(/[^\w. ]/gi, (c) => `&#${c.charCodeAt(0)};`);

  const charLabels = {
    Size: {
      labelLow: 'A size too small',
      labelLowMid: '½ a size too small',
      labelMid: 'Perfect',
      labelMidHigh: '½ a size too big',
      labelHigh: 'A size too wide',
    },
    Width: {
      labelLow: 'Too narrow',
      labelLowMid: 'Slightly narrow',
      labelMid: 'Perfect',
      labelMidHigh: 'Slightly wide',
      labelHigh: 'Too wide',
    },
    Comfort: {
      labelLow: 'Uncomfortable',
      labelLowMid: 'Slightly uncomfortable',
      labelMid: 'Ok',
      labelMidHigh: 'Comfortable',
      labelHigh: 'Perfect',
    },
    Quality: {
      labelLow: 'Poor',
      labelLowMid: 'Below average',
      labelMid: 'What I expected',
      labelMidHigh: 'Pretty great',
      labelHigh: 'Perfect',
    },
    Length: {
      labelLow: 'Runs Short',
      labelLowMid: 'Runs slightly short',
      labelMid: 'Perfect',
      labelMidHigh: 'Runs slightly long',
      labelHigh: 'Runs long',
    },
    Fit: {
      labelLow: 'Runs tight',
      labelLowMid: 'Runs slightly tight',
      labelMid: 'Perfect',
      labelMidHigh: 'Runs slightly long',
      labelHigh: 'Runs long',
    },
  };
  const charKeys = Object.keys(charLabels);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handlePhoto = (e) => {
    // console.log(e)
    // var file = e.refs.file.files[0];
    // var reader = new FileReader();
    // var url = reader.readAsDataURL(file);
    // console.log(url)

    const regex = /[/.](gif|jpg|jpeg|tiff|png)$/i;
    if (formData.photos.length < 5) {
      if (regex.test(e.target.value)) {
        formData.photos.push(e.target.value);
        setPhotoUpdate(true);
      } else {
        alert('You must upload a gif,jpg,jpeg,tiff, or png.');
      }
    } else {
      alert('You can only upload 5 photos.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data');
    console.log(formData);
    axios({
      method: 'post',
      url: `http://${localServer}:3000/ratings/createReview`,
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
    clickTracker('Ratings', e);
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
            <Row sm={12} md={12}>
              <Col>
                {charList.map((char) => <CharRadio key={uuid()} setCharObj={setCharObj} charObj={charObj} name={char} chars={charLabels[char]} id={reviewMeta.characteristics} />)}
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
            <label htmlFor="photo-btn">Add Photo</label>
            <input type="file" id="photo-btn" value={formData.photos} onChange={(e) => { handlePhoto(e); clickTracker('Ratings', e); }} />
            {photoUpdate ? formData.photos.map((photo) => <RenderPhoto key={uuid()} photo={photo} />) : null}
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
  reviewMeta: PropTypes.instanceOf(Object).isRequired,
};

export default ReviewListContainer;
