import React, { useEffect } from 'react';
import Question from './Question.js';
'react-bootstrap';
import axios from 'axios';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function QuestionList(){
  const findQuestions = () => {
    axios.get('http://localhost:3000/qa/questions')
    .then((results) => {
      console.log('USE EFFECT SUCCESS')
      console.log('THESE ARE RESULTS',results);
    })
    .catch((err) => {
      console.log('USE EFFECT FAILS');
      console.log(err);
    });
  }

  useEffect(() => {
    findQuestions()
  }, []);
      // <div>
      //   {console.log(props.question)}
      //   {props.question.map((question, i) => <Question question={question} key={question+1}/>)}
      // </div>
      return(<Container key="summary-inside" className="container border-primary question-container">
      <div className="border border-secondary shadow">
        <h5>fill with questions here</h5>
        <Question findQuestions={this.findQuestions}/>
      </div>
    </Container>)

}

export default QuestionList;