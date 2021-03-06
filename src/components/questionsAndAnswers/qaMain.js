import '../localStyles/qa.css';
import React from 'react';
import Search from './Search.js';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function QuestionsAndAnswers() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-header" id="qa-header">
          Questions and Answers
        </span>
      </nav>
      {/* <h5 id='QuestionsAndAnswersHeader'>Questions and Answers</h5>
      <div>
        {/* <Search /> */}
      {/* </div>

      <div>
        <span>
          more answered questions button
        </span>
        <span>
           add a question button
        </span>
      </div> } */}
    </div>
  );
}

export default QuestionsAndAnswers;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Nav, Container, Row, Col, Grid, Modal, Button,
// } from 'react-bootstrap';

// function QuestionsAndAnswers() {
//   const [questionList, setQuestionList] = useState([]);
// }
