import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, Container, Row, Col, Grid,
} from 'react-bootstrap';
import axios from 'axios';

function ReviewBox({ review, generateStarImage, tempKey }) {
  console.log(review);
  const [helpfulness, setHelpfulness] = useState(review.helpfulness)

  const dateVal = new Date(review.date);
  const month = dateVal.getMonth() + 1;
  const day = dateVal.getDate();
  const year = dateVal.getFullYear();

  const helpRef = useRef();
  const reportRef = useRef();

  const handleHelp = (e, id) => {
    console.log(id);
    // console.log(e);
    axios({
      method: 'put',
      url: `http://localhost:3000/ratings/helpful/${id}`,
    })
      .then((result) => {
        console.log(result);
        if (helpRef.current) {
          helpRef.current.setAttribute('disabled', 'disabled');
          helpRef.current.setAttribute('class', 'disabled');
          setHelpfulness(helpfulness + 1);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReport = (e, id) => {
    axios({
      method: 'put',
      url: `http://localhost:3000/ratings/report/${id}`,
    })
      .then((result) => {
        if (reportRef.current) {
          reportRef.current.setAttribute('disabled', 'disabled');
          reportRef.current.setAttribute('class', 'disabled');
        }
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="review-box border border-secondary p-2 mb-3 rounded shadow">
      <Row className="flex-row" key={`r1${tempKey}`}>
        <Col className="review-rating justify-content-start" xs={12} md={4} key={`c1${tempKey}`}>
          <span>{generateStarImage(review.rating, `star${tempKey}`)}</span>
        </Col>
        <Col className="review-profile text-uppercase font-weight-bold col-sm" key={`c2${tempKey}`}>
          <span>{review.reviewer_name}</span>
        </Col>
        <Col className="review-profile text-muted font-weight-light justify-content-end col-sm" key={`c3${tempKey}`}>
          <time>{`${month}-${day}-${year}`}</time>
        </Col>
      </Row>
      <div className="review-content" key={`d1${tempKey}`}>
        <Row key={`r2${tempKey}`}>
          <Col key={`c4${tempKey}`}>
            <h3 className="review-title  text-bolder text-truncate">{review.summary}</h3>
          </Col>
        </Row>
        <Row key={`r3${tempKey}`}>
          <Col key={`c5${tempKey}`}>
            <span className="review-body text-body border-info lead">{review.body}</span>
          </Col>
        </Row>
      </div>
      <div className="secondary-meters" key={`d2${tempKey}`}>
        <Row key={`r4${tempKey}`}>
          <Col key={`c6${tempKey}`}>
            <button id="rev-help" ref={helpRef} type="button" className="btn-sm btn-success" onClick={(e) => { handleHelp(e, review.review_id); }}>{`Helpfulness - ${helpfulness}`}</button>
          </Col>
          <Col key={`c7${tempKey}`}>
            <button id="rev-report" ref={reportRef} type="button" className="btn-sm btn-outline-info" onClick={(e) => { handleReport(e, review.review_id); }}>Report</button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

ReviewBox.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
  generateStarImage: PropTypes.instanceOf(Object).isRequired,
  tempKey: PropTypes.number.isRequired,
};

export default ReviewBox;
