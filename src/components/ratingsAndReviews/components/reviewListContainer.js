/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'react-bootstrap';
import ReviewBox from './reviewBox';
import SubmitReviewModal from './submitReview';
import SearchReviews from './searchReviews';

function ReviewListContainer({
  findReviewMeta, productId, reviewList, generateStarImage, handleFetchMore, revFlag, reviewMeta, search, setSearch, findReviews, filterReviewList,
}) {
  const [showNewRev, setShowNewRev] = useState(false);
  const handleClose = () => setShowNewRev(false);
  const handleOpen = () => setShowNewRev(true);

  return (
    <>
      <SubmitReviewModal show={showNewRev} reviewMeta={reviewMeta} showNewRev={showNewRev} findReviewMeta={findReviewMeta} productId={productId} onHide={handleClose} handleClose={handleClose} handleOpen={handleOpen} />
      <SearchReviews findReviews={findReviews} filterReviewList={filterReviewList} search={search} setSearch={setSearch} />
      <div className="container review-container">
        {reviewList.map((review) => <ReviewBox key={review.review_id} tempKey={review.review_id} generateStarImage={generateStarImage} review={review} />)}
        <Button variant="outline-secondary" onClick={handleOpen}>
          ADD REVIEW
        </Button>
        {revFlag
          ? (
            <Button variant="outline-secondary" onClick={handleFetchMore}>
              LOAD MORE
            </Button>
          )
          : null }
      </div>
    </>
  );
}

ReviewListContainer.propTypes = {
  reviewList: PropTypes.instanceOf(Array).isRequired,
  generateStarImage: PropTypes.instanceOf(Function).isRequired,
  handleFetchMore: PropTypes.instanceOf(Function).isRequired,
  productId: PropTypes.number.isRequired,
  filterReviewList: PropTypes.instanceOf(Function).isRequired,
  findReviewMeta: PropTypes.instanceOf(Function).isRequired,
  revFlag: PropTypes.bool.isRequired,
  reviewMeta: PropTypes.instanceOf(Object).isRequired,
  findReviews: PropTypes.instanceOf(Function).isRequired,
  setSearch: PropTypes.instanceOf(Function).isRequired,
  search: PropTypes.string.isRequired,
};

export default ReviewListContainer;
