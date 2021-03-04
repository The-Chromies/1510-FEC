/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import ReviewBox from './reviewBox';

function ReviewListContainer({ reviewList, generateStarImage }) {
  return (
    <div className="container review-container">
      {reviewList.map((review) => <ReviewBox key={review.review_id} generateStarImage={generateStarImage} review={review} />)}
    </div>
  );
}

ReviewListContainer.propTypes = {
  reviewList: PropTypes.instanceOf(Array).isRequired,
  generateStarImage: PropTypes.instanceOf(Function).isRequired,
};

export default ReviewListContainer;
