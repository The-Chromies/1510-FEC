import '../localStyles/rr.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewListContainer from './components/reviewListContainer';

function RatingsAndReviews() {
  const [reviewList, setReviewList] = useState([]);

  const findReviews = () => {
    axios.get('http://localhost:3000/ratings/reviews')
      .then((result) => {
        setReviewList(result.data.results);
      })
      .catch((error) => {
        console.log('Error Fetching Reviews');
        console.log(error);
      });
  };

  useEffect(() => {
    findReviews();
  }, []);

  return (
    <div className="rating-review-container">
      <ReviewListContainer reviewList={reviewList} />
    </div>
  );
}

export default RatingsAndReviews;
