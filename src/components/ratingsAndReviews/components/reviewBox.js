import React from 'react';
import PropTypes from 'prop-types';

function ReviewBox({ review }) {
  // console.log(props)
  return (
    <div className="review-box">
      <div className="profile-content">
        <span>{review.reviewer_name}</span>
        <time>{review.date}</time>
      </div>
      <div className="review-content">
        <h3 className="review-title">{review.summary}</h3>
        <span className="review-body">{review.body}</span>
      </div>
    </div>
  );
}

ReviewBox.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
};

export default ReviewBox;
