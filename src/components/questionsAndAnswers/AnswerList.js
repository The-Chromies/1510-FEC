import React, { useEffect, useState, useContext } from 'react';
import Answer from './Answer.js';
'react-bootstrap';
import axios from 'axios';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search.js';

const AnswerList = ({ answers }) => {
  console.log('THIS IS ANSWERS IN ANSWER LIST', answers);
  return (
    <Container variant="outline-secondary" className="question-container">
      <div className="border border-secondary shadow">
      </div>
    </Container>)

}

export default AnswerList;