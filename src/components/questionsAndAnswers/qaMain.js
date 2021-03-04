// import './qa.css';
import React from 'react';
import Search from './Search.js';

function QuestionsAndAnswers() {
  return (
    <div className="question-answer-container">
      <h5 id='QuestionsAndAnswersHeader'>Questions and Answers</h5>
      <div>
        <Search />
      </div>

      <div>
        <span>
          more answered questions button
        </span>
        <span>
           add a question button
        </span>
      </div>
    </div>
  );
}

export default QuestionsAndAnswers;
