import '../localStyles/qa.css';
import React, { useContext } from 'react';
import {
  Navbar, Container, Row, Col, Button, Modal,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';
import AddQuestion from './AddQuestion';

import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionsList from './QuestionsList';
import { ContactContext } from '../../Global-Context';

const plusIcon = <FontAwesomeIcon icon={faPlus} />;

function QuestionsAndAnswers() {
  var {productId, setProductId} = useContext(ContactContext);
  const handleOpen = () => setShowNewRev(true);
  return (
    <div>

      <Container>
        <h5 class="header">Questions &amp; Answers</h5>
      </Container>

      <Search />
      <QuestionsList />

      <Container>
        {/* <div>
          <span>
          <Button variant="outline-secondary">MORE OUTLINED QUESTIONS</Button>
          </span>
          <span>
          Button variant="outline-secondary">ADD A QUESTION {plusIcon}</Button>
          </span>
        </div> */}
        <Row>
          <Col>
            <Button variant="outline-secondary">MORE OUTLINED QUESTIONS</Button>
          </Col>
          <Col>
            {/* <Button variant="outline-secondary" data-toggle="modal">ADD A QUESTION {plusIcon}</Button> */}
            {/* <!-- Button trigger modal --> */}
            <Button variant="outline-secondary" type="button" data-toggle="modal" data-target="#exampleModal3">
            ADD A QUESTION {plusIcon}

            </Button>

            {/* <!-- Modal --> */}
            {/* <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModal3Label" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModal3Label">Ask yo question about whatever you trna buy</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Submit</button>
                  </div>
                </div>
              </div>
            </div> */}
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
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
