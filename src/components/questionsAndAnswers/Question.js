import React from 'react';
import { Navbar, Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Question = (props) => {
  const { question } = props;

  const randomAnswer = () => {
    const random = Math.floor(Math.random() * 5);
    const answers = ['That\'s a a great question!', 'I\'m not sure how this related to the product.', 'It is exactly what you think', 'and that\'s why I love it!', 'This is why the product did not work out for me'];

    return answers[random];
  };

  const randomAnswerer = () => {
    const random = Math.floor(Math.random() * 5);
    const answerer = ['it\'s_ya_boiiii', 'Uncle.J', 'Liz-o_fo_shizzle', 'lil_yachty', 'the_real_slim_shady'];


    return answerer[random];
  };

  const randomTime = () => {
    const random = Math.floor(Math.random() * 10);
    const answerer = ['3:26am', '4:57pm', '7:33pm', '5:49am', '6:01am', '11:45pm', '10:21pm', '12:03am', '1:09am', '3:44pm'];


    return answerer[random];
  };

  return (
    <Container>
      <ListGroup variant="flush">
        <ListGroup.Item><h5>Q: {props.question?.question_body}</h5></ListGroup.Item>
        <ListGroup.Item>A: {randomAnswer()}</ListGroup.Item>
        <ListGroup.Item className="text-muted">by {randomAnswerer()} @ {randomTime()}</ListGroup.Item>
      </ListGroup>
    </Container>

  )
};

export default Question;
