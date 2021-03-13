/*
      IMPORTANT: there is a lot on this widget that is incomplete due to time. There is also a lot of aspects that were added the "fill in" for those areas that were unable to be completed (i.e an extra modal to let user know their question is 'pending approval' in place of non functioning POST request). i also left comments in to help exemplify my thought process in code
*/

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
  const { productId, setProductId, localServer } = useContext(ContactContext);
  const handleOpen = () => setShowNewRev(true);
  const [modalShow, setModalShow] = useState(false);

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const findQuestions = (id) => {
    axios.get(`http://${localServer}:3000/qa/questions/${id}`)
      .then((res) => {
        const allQuestions = res.data.results;
        setQuestions(allQuestions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const findAnswers = (id) => {
    axios.get(`http://${localServer}:3000/qa/questions/${id}/answers`)
      .then((res) => {
        const allAnswers = res.data.results;
        setAnswers(allAnswers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    findQuestions(productId);
    findAnswers(productId);
  }, []);

  useEffect(() => {
    findQuestions(productId);
    findAnswers(productId);
  }, [productId]);

  //passing down function to search bar that updates

  console.log('THIS IS ANSWERS IN MAIN', answers);

  return (
    <div>

      <Container>
        <h5 className="header">Questions &amp; Answers</h5>
      </Container>

      <Search questions={questions} />
      <QuestionsList questions={questions} answers={answers}/>

      <Container>
        <Row>
          {/* <Col>
            <Button variant="outline-secondary">MORE OUTLINED QUESTIONS</Button>
          </Col> */}
          <Col>
            <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
              ADD A QUESTION {plusIcon}
            </Button>
            <AddQuestion show={modalShow} onHide={() => setModalShow(false)} />
          </Col>
          <Col />
          <Col />
        </Row>
      </Container>
    </div>
  );
}

export default QuestionsAndAnswers;