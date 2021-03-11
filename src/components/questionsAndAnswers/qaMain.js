import '../localStyles/qa.css';
import React, { useContext, useState, useEffect } from 'react';
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
import axios from 'axios';

const plusIcon = <FontAwesomeIcon icon={faPlus} />;

function QuestionsAndAnswers() {
  const { productId, setProductId } = useContext(ContactContext);
  const handleOpen = () => setShowNewRev(true);
  const [modalShow, setModalShow] = React.useState(false);

  const [questions, setQuestions] = useState([]);

  const findQuestions = (id) => {
    console.log('THIS IS ID',id)
    axios.get('http://localhost:3000/qa/questions')
    .then((res) => {
      console.log('USE EFFECT SUCCESS')
      console.log('THESE ARE RESULTS', res.data.results);

      const allQuestions = res.data.results;
      setQuestions(allQuestions);
    })
    .catch((err) => {
      console.log('USE EFFECT FAILS');
      console.log(err);
    });
  }

  useEffect(() => {
    findQuestions();
  }, []);


  return (
    <div>

      <Container>
        <h5 className="header">Questions &amp; Answers</h5>
      </Container>

      <Search questions={questions}/>
      <QuestionsList questions={questions}/>

      <Container>
        <Row>
          <Col>
            <Button variant="outline-secondary">MORE OUTLINED QUESTIONS</Button>
          </Col>
          <Col>
            <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
              ADD A QUESTION {plusIcon}
            </Button>
            <AddQuestion show={modalShow} onHide={() => setModalShow(false)}/>
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
