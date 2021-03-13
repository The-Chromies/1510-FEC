import React, { useState } from 'react';
import {
  Navbar, Container, Row, Col, Button, Modal, Form,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';
import AddQuestionPending from './AddQuestionPending.js';

const plusIcon = <FontAwesomeIcon icon={faPlus} />;
const downIcon = <FontAwesomeIcon icon={faArrowDown} />;

const Question = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const toHide = () => (
    props.onHide
  );

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Ask Your Question
            <h6 className="text-muted">About the product you are looking at</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="need-to-validate1">
            <Row>
            <Col lg={12}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Your question here {downIcon}</Form.Label>
                  <Form.Control type="email" placeholder="Why did you like the product or not?"></Form.Control>
                </Form.Group>
              </Col>
              <hr />
              <Col sm={6} md={6}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>What is your nickname?</Form.Label>
                  <Form.Control type="name" placeholder="Ex: jackson5!"></Form.Control>
                  <Form.Text className="text-muted">for privacy reasons, do not use your full name or email address</Form.Text>
                </Form.Group>
              </Col>
              <Col sm={6} md={6}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>What is your email?</Form.Label>
                  <Form.Control type="email" placeholder="Why did you like the product or not?"></Form.Control>
                  <Form.Text className="text-muted">For authentication reasons, you will not be emailed</Form.Text>
                </Form.Group>
              </Col>

              <hr />
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary"
          onClick={() => setModalShow(true)}
          //onClick={props.onHide}
          >Submit</Button>
          <AddQuestionPending show={modalShow} onHide={() => setModalShow(false)} />
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default Question;
