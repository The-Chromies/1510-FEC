/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'react-bootstrap';
import ReviewBox from './reviewBox';
import SubmitReviewModal from './submitReview';

function ReviewListContainer({ reviewList, generateStarImage, handleFetchMore }) {
  const [showNewRev, setShowNewRev] = useState(false);
  const handleClose = () => setShowNewRev(false);
  const handleOpen = () => setShowNewRev(true);

  return (
    <>
      <SubmitReviewModal show={showNewRev} showNewRev={showNewRev} onHide={handleClose} handleClose={handleClose} handleOpen={handleOpen} />
      <div className="container review-container">
        {reviewList.map((review) => <ReviewBox key={review.review_id} tempKey={review.review_id} generateStarImage={generateStarImage} review={review} />)}
        <Button className="btn-outline-light" onClick={handleOpen}>Add Review</Button>
        <Button className="btn-outline-light" onClick={handleFetchMore}>Load More</Button>
      </div>
    </>
  );
}

ReviewListContainer.propTypes = {
  reviewList: PropTypes.instanceOf(Array).isRequired,
  generateStarImage: PropTypes.instanceOf(Function).isRequired,
  handleFetchMore: PropTypes.instanceOf(Function).isRequired,
};

export default ReviewListContainer;
