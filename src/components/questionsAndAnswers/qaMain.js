import '../localStyles/qa.css';
import React, {useContext} from 'react';
import Search from './Search.js';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionsList from './QuestionsList.js';
import { ContactContext } from '../../Global-Context';

function QuestionsAndAnswers() {
  var {productId, setProductId} = useContext(ContactContext);
  return (
    <div>
      <h5 class="header">Questions &amp; Answers</h5>


      <Search />
      <QuestionsList />

      <span>
      <Button variant="outline-secondary">Secondary</Button>
      </span>
      <span>
      <Button variant="outline-secondary">Secondary</Button>
      </span>
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
