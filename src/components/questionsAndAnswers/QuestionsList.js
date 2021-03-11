import React, { useEffect, useState, useContext } from 'react';
import Question from './Question.js';
'react-bootstrap';
import axios from 'axios';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuestionList = ({questions}) => {
  // const { setQuestions} = useContext
  // const [questions, setQuestions] = useState([])

  // const findQuestions = () => {
  //   axios.get('http://localhost:3000/qa/questions')
  //   .then((res) => {
  //     console.log('USE EFFECT SUCCESS')
  //     console.log('THESE ARE RESULTS', res.data.results);

  //     const allQuestions = res.data.results;
  //     setQuestions(allQuestions);
  //   })
  //   .catch((err) => {
  //     console.log('USE EFFECT FAILS');
  //     console.log(err);
  //   });
  // }

  // useEffect(() => {
  //   findQuestions()
  // }, []);

  return(
    <Container variant="outline-secondary" className="question-container">
      <div className="border border-secondary shadow">
         {questions.map((question, i) => (
            <Question question={question} key={i}/>
         ))}

  </div>
</Container>)

}

export default QuestionList;