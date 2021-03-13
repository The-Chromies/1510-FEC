/* eslint-disable import/no-named-as-default */
/* eslint-disable object-shorthand */
/* eslint-disable max-len */
/* eslint-disable prefer-const */
// import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RatingsAndReviews from './components/ratingsAndReviews/rrMain';
import RelatedAndComparison from './components/relatedAndComparison/rcMain';
import QuestionsAndAnswers from './components/questionsAndAnswers/qaMain';
import Overview from './components/overview/ovMain';
import { ContactContextProvider } from './Global-Context';
import {
  Container, Row, Col
} from 'react-bootstrap';

function App() {
  // set up var to link review section
  const reviews = useRef(null);

  // func to navigate to review section
  const goToReviews = () => {
    reviews.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Col xs={1} md={1}>
      </Col>
      <Col xs={10} md={10}>
        <ContactContextProvider>
          <div className="App bg-light">
            {/* <div className="overview">
              <Overview goToReviews={goToReviews} />
            </div>
            <hr />
            <div className="related-comparison">
              <RelatedAndComparison />
            </div>
            <hr />
            <div className="questions-answers">
              <QuestionsAndAnswers />
            </div>
            <hr /> */}
            <div className="ratings-reviews" ref={reviews}>
              <RatingsAndReviews />
            </div>
          </div>
        </ContactContextProvider>
      </Col>
      <Col xs={1} md={1}>
      </Col>
    </>
  );
}

export default App;
