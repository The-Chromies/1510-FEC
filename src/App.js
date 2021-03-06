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
import globalContext from './globalContext';

function App() {
  // given product id state
  const [productId, setProductId] = useState(18078);

  // set up var to link review section
  const reviews = useRef(null);

  // func to navigate to review section
  const goToReviews = () => {
    reviews.current.scrollIntoView({ behavior: 'smooth' });
  };

  // func to make selected product accessible to all components
  const getSelectedProduct = (id) => {
    setProductId(id);
  };


  // click tracking function to pass down to components
  const clickTracker = (widget, e) => {
    // send post req to /interactions endpoint w/ element of page clicked, time of click, & module clicked
    let date = new Date();
    let elementClicked = e.target.type.concat(`, ${e.target.className}`);
    let clickData = {
      element: e.target.type,
      widget: widget,
      time: date.toTimeString(),
    };
    axios.post('http://localhost:3000/interactions', JSON.stringify(clickData))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="overview">
        <Overview goToReviews={goToReviews} productId={productId}/>
      </div>
      <div className="related-comparison" getSelectedProduct={getSelectedProduct}>
        <RelatedAndComparison />
      </div>
      <div className="questions-answers">
        <QuestionsAndAnswers />
      </div>
      <div className="ratings-reviews" ref={reviews}>
        <RatingsAndReviews />
      </div>
    </div>
  );
}

export default App;
