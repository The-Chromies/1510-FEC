// import './App.css';
import React from 'react';
import axios from 'axios';
import RatingsAndReviews from './components/ratingsAndReviews/rrMain';
import RelatedAndComparison from './components/relatedAndComparison/rcMain';
import QuestionsAndAnswers from './components/questionsAndAnswers/qaMain';
import Overview from './components/overview/ovMain';

function App() {
  // click tracking function to pass down to components
  const clickTracker = (widget, e) => {
    // send post req to /interactions endpoint w/ element of page clicked, time of click, & module clicked
    let date = new Date;
    let elementClicked = e.target.type.concat(`, ${e.target.className}`)
    console.log(date.toTimeString())
    let clickData = {
      element: e.target.type,
      widget: widget,
      time: date.toTimeString()
    }
    axios.post('http://localhost:3000/', clickData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

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
