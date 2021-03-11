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

function App() {
  // set up var to link review section
  const reviews = useRef(null);

  // func to navigate to review section
  const goToReviews = () => {
    reviews.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ContactContextProvider>
      <div className="App">
        <div className="overview">
          <Overview goToReviews={goToReviews} />
        </div>
        <div className="related-comparison">
          <RelatedAndComparison />
        </div>
        <div className="questions-answers">
          <QuestionsAndAnswers />
        </div>
        <div className="ratings-reviews" ref={reviews}>
          <RatingsAndReviews />
        </div>
      </div>
    </ContactContextProvider>
  );
}

export default App;
