import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, Container, Row, Col, Grid,
} from 'react-bootstrap';

function ReviewBox({ review, generateStarImage }) {
  // console.log(review)

  const dateVal = new Date(review.date);
  const month = dateVal.getMonth() + 1;
  const day = dateVal.getDate();
  const year = dateVal.getFullYear();
  return (
    <div className="review-box border border-secondary mb-3 rounded shadow">
      <Row>
        <Col className="review-rating justify-content-start">
          <span>{generateStarImage(review.rating)}</span>
        </Col>
        <Col className="review-profile text-uppercase font-weight-bold justify-content-end" xs={4} md={4}>
          <span>{review.reviewer_name}</span>
        </Col>
        <Col className="review-profile text-muted font-weight-light justify-content-end">
          <time>{`${month}-${day}-${year}`}</time>
        </Col>
      </Row>
      <div className="review-content">
        <Row>
          <Col>
            <h3 className="review-title  text-bolder text-truncate">{review.summary}</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="review-body text-body border-info lead">{review.body}</span>
          </Col>
        </Row>
      </div>
      <div className="secondary-meters">
        <Row>
          <Col>
            <button type="button" className="btn-sm  btn-success">Helpful</button>
          </Col>
          <Col>
            <button type="button" className="btn-sm btn-outline-info">Report</button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

ReviewBox.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
  generateStarImage: PropTypes.instanceOf(Object).isRequired,
};

export default ReviewBox;
