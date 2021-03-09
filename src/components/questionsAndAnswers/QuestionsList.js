import React from 'react';
import Question from './Question.js';
'react-bootstrap';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuestionList =  (props) => (
      // <div>
      //   {console.log(props.question)}
      //   {props.question.map((question, i) => <Question question={question} key={question+1}/>)}
      // </div>
      <Container key="summary-inside" className="container border-primary question-container">
        <div className="border border-secondary shadow">
          <h5>fill with questions here</h5>
        </div>
      </Container>
)

export default QuestionList;