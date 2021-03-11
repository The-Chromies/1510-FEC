import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Question = (props) => {
  // console.log('props from question child component', props.question[0]?.question_body);
  const { question } = props;
  console.log('PROPS', props);

  return (
    <Container>
      <h5>Q: {props.question?.question_body}</h5>
      <span>A:</span>
      <span> some random answer</span>
      <div>
        <span>by someone random</span>
        <span>at some random time</span>

      </div>
    </Container>

  )
}

// export default function Question(props) {
//   console.log(props.questions)

//   return (
//     <>
//     </>
//   )
// }

export default Question;