// import './App.css';
import React from 'react';
import RatingsAndReviews from './components/ratingsAndReviews/rrMain';
import RelatedAndComparison from './components/relatedAndComparison/rcMain';
import QuestionsAndAnswers from './components/questionsAndAnswers/qaMain';
import Overview from './components/overview/ovMain';

function App() {
  return (
    <div className="App">
      <div className="overview">
        <Overview />
      </div>
      <div className="related-comparison">
        <RelatedAndComparison />
      </div>
      <div className="questions-answers">
        <QuestionsAndAnswers />
      </div>
      <div className="ratings-reviews">
        <RatingsAndReviews />
      </div>
    </div>
  );
}

export default App;
