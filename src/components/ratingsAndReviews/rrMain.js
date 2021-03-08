/* eslint-disable vars-on-top */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Navbar, Container, Row, Col, Grid, Modal, Button,
} from 'react-bootstrap';
import '../localStyles/rr.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewListContainer from './components/reviewListContainer';
import SummaryContainer from './components/summaryContainer';
import ReviewFilter from './components/reviewFilter';
import metaTestData from './testData/metadataTest';

function RatingsAndReviews() {
  const [reviewList, setReviewList] = useState(null);
  const [reviewListFull, setReviewListFull] = useState([]);
  const [reviewMeta, setReviewMeta] = useState(metaTestData);
  const [productId, setProductId] = useState('18445');
  const [revCount, setRevCount] = useState(0);
  const [starFilter, setStarFilter] = useState('');

  // eslint-disable-next-line prefer-const
  let [fetchNum, setFetchNum] = useState(1);
  // eslint-disable-next-line prefer-const
  let [sortKey, setSortKey] = useState('relevant');

  const generateStarImage = (starCount, keyId) => {
    let remainder = 0;
    remainder = starCount - remainder;
    const starArr = [];
    for (let j = 0; j < 5; j += 1) {
      switch (remainder) { // 4.25
        case 0.25:
          starArr.push(<img src="public/icons/star/quarterStar.png" alt="" className="star-image" />);
          remainder -= 0.25;
          break;
        case 0.50:
          starArr.push(<img src="public/icons/star/halfStar.png" alt="" className="star-image" />);
          remainder -= 0.50;
          break;
        case 0.75:
          starArr.push(<img src="public/icons/star/threeQuarterStar.png" alt="" className="star-image" />);
          remainder -= 0.75;
          break;
        case 1:
          starArr.push(<img src="public/icons/star/fullStar.png" alt="" className="star-image" />);
          remainder -= 1;
          break;
        case 0:
          starArr.push(<img src="public/icons/star/emptyStar.png" alt="" className="star-image" />);
          break;
        default:
          starArr.push(<img src="public/icons/star/fullStar.png" alt="" className="star-image" />);
          remainder -= 1;
          break;
      }
    }
    return starArr;
  };

  const handleFetchMore = () => {
    if (fetchNum < reviewListFull.length) {
      setFetchNum(fetchNum += 2);
    } else {
      // eslint-disable-next-line no-alert
      alert('There are no more reviews');
    }
  };

  const filterReviewList = () => {
    // This will filter the reviews according to the star output and
    // according to the number which should be fetched
    // console.log('fetchnum', fetchNum);
    // console.log(reviewListFull);
    // eslint-disable-next-line no-var
    var subsetRevList = [];
    // console.log(reviewListFull);
    if (starFilter) {
      subsetRevList = reviewListFull.filter((rev) => rev.rating === starFilter).slice(0, fetchNum);
    } else {
      subsetRevList = reviewListFull.slice(0, fetchNum);
    }
    // console.log(subsetRevList);

    setReviewList(subsetRevList);
  };

  const findReviews = () => {
    axios.get(`http://localhost:3000/ratings/review/${productId}/${sortKey}/${revCount}`)
      .then((result) => {
        setReviewListFull(result.data.results);
        // setReviewList(filterReviewList(fetchNum));
        // setReviewList(result.data.results)
      })
      .catch((error) => {
        console.log('Error Fetching Reviews');
        console.log(error);
      });
  };

  const findReviewMeta = () => {
    axios.get(`http://localhost:3000/ratings/reviewMeta/${productId}`)
      .then((result) => {
        setReviewMeta(result.data);
        setRevCount(result.data.revCount);
      })
      .catch((error) => {
        console.log('Error Fetching Review Meta');
        console.log(error);
      });
  };

  const handleStarClick = (starVal) => {
    // console.log('Clicked: ', starVal);
    setStarFilter(starVal);
  };

  // When the page renders or the product id changes, execute a metadata search to update metadata
  // and set the revCount so we know how many reviews to fetch
  useEffect(() => {
    findReviewMeta();
  }, []);

  // Anytime the sort key updates, fetch the full review list with the new sorted value
  useEffect(() => {
    findReviews();
  }, [sortKey]);

  // Anytime the find review meta executes, use the new revcount to fetch that number of reviews
  // Second Trigger for this housed after new review Submit
  useEffect(() => {
    findReviews();
  }, [revCount]);

  // Whenever the reviewlist is updated, execute filter review list and
  // set the number of reviews back to 2
  useEffect(() => {
    setFetchNum(2);
    filterReviewList();
  }, [reviewListFull]);

  // whenver the fetchNum is updated, execute a filter on the full review list
  useEffect(() => {
    filterReviewList();
  }, [fetchNum]);

  // whenver the a star value is clicked, filter the list to only those reviews
  useEffect(() => {
    filterReviewList();
  }, [starFilter]);

  let retContainer = null;
  if (reviewList) {
    // console.log('reviewList is not null');
    retContainer = (
      <Container key="review-container-generic">
        <Row>
          <Col className="border border-secondary rounded shadow m-3">
            <h1 className="text-center"> Ratings and Reviews </h1>
          </Col>
        </Row>
        <Row key="rating-review-container" className="rating-review-container">
          <Col xs={6} md={4} key="c1-review-container-generic">
            <SummaryContainer key="sum-container" className="container" generateStarImage={generateStarImage} handleStarClick={handleStarClick} meta={reviewMeta} starFilter={starFilter} />
          </Col>
          <Col xs={6} md={8} key="c2-review-container-generic">
            <ReviewFilter key="review-filter" className="review-filter" meta={reviewMeta} setSortKey={setSortKey} />
            <ReviewListContainer key="review-container" className="container" generateStarImage={generateStarImage} setRevCount={setRevCount} revCount={revCount} handleFetchMore={handleFetchMore} productId={productId} reviewList={reviewList} />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    retContainer
  );
}

export default RatingsAndReviews;
