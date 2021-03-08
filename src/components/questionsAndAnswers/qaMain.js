import '../localStyles/qa.css';
import React from 'react';
import Search from './Search.js';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionsList from './QuestionsList.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const plusIcon = <FontAwesomeIcon icon={faPlus} />

function QuestionsAndAnswers() {
  return (
    <div>

      <Container>
        <h5 class="header">Questions &amp; Answers</h5>
      </Container>



      <Search />
      <QuestionsList />

      <Container>
        <span>
          <Button variant="outline-secondary">MORE OUTLINED QUESTIONS</Button>
        </span>
        <span>
          <Button variant="outline-secondary">ADD A QUESTION {plusIcon}</Button>
        </span>
      </Container>

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
