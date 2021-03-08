/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'react-bootstrap';
import ReviewBox from './reviewBox';
import SubmitReviewModal from './submitReview';

function ReviewListContainer({
  setRevCount, revCount, productId, reviewList, generateStarImage, handleFetchMore,
}) {
  const [showNewRev, setShowNewRev] = useState(false);
  const handleClose = () => setShowNewRev(false);
  const handleOpen = () => setShowNewRev(true);

  return (
    <>
      <SubmitReviewModal show={showNewRev} showNewRev={showNewRev} setRevCount={setRevCount} revCount={revCount} productId={productId} onHide={handleClose} handleClose={handleClose} handleOpen={handleOpen} />
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
  productId: PropTypes.number.isRequired,
  setRevCount: PropTypes.instanceOf(Function).isRequired,
  revCount: PropTypes.number.isRequired,
};

export default ReviewListContainer;
