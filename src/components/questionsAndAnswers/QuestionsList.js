import React, { useEffect, useState, useContext } from 'react';
import Question from './Question.js';
'react-bootstrap';
import axios from 'axios';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function QuestionList(){
  //const { setQuestions} = useContext
  const [questions, setQuestions] = useState([])

  const findQuestions = () => {
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
    findQuestions()
  }, []);
      // <div>
      //   {console.log(props.question)}
      //   {props.question.map((question, i) => <Question question={question} key={question+1}/>)}
      // </div>
      return(<Container key="summary-inside" className="question-container">
      <div className="border border-secondary shadow">
        <h5>fill with questions here</h5>
        {console.log('THESE ARE "QUESTIONS": ', questions)}
        {questions.map((question, i) => {
          return (<Question question={question} key={i} />)
        })}

      </div>
    </Container>)

}

export default QuestionList;