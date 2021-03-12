import React, { useEffect, useState, useContext } from 'react';
import Question from './Question.js';
'react-bootstrap';
import axios from 'axios';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search.js';

const QuestionList = ({ questions }) => {



  return (
    <Container variant="outline-secondary" className="question-container">
      {/* <Search /> */}
      <div className="border border-secondary shadow">
        {questions.map((question, i) => (
          <Question question={question} key={i} />
        ))}

      </div>
    </Container>)

}

export default QuestionList;