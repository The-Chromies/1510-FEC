import React from 'react';
import { Navbar, Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Question = (props) => {
  // console.log('props from question child component', props.question[0]?.question_body);
  const { question } = props;
  console.log('PROPS', props);

  return (
    <Container>
      {/* <h5>Q: {props.question?.question_body}</h5>
      <span>A:</span>
      <span> some random answer</span>
      <div>
        <span className="text-muted">by someone random</span>
        <span className="text-muted"> at some random time</span>

      </div> */}
      <ListGroup variant="flush">
        <ListGroup.Item><h5>Q: {props.question?.question_body}</h5></ListGroup.Item>
        <ListGroup.Item>A: some random answer</ListGroup.Item>
        <ListGroup.Item className="text-muted">by random someone @ random time</ListGroup.Item>
        {/* <ListGroup.Item className="text-muted">at random time</ListGroup.Item> */}
      </ListGroup>
    </Container>

  )
};

export default Question;
