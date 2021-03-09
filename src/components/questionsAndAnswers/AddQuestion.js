import React from 'react';
import {
  Navbar, Container, Row, Col, Button, Modal, Form,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';

const plusIcon = <FontAwesomeIcon icon={faPlus} />;
const downIcon = <FontAwesomeIcon icon={faArrowDown} />;

const Question = (props) => (
  <div>
    {/* <Button variant="outline-secondary" type="button" data-toggle="modal" data-target="#exampleModal3">
      ADD A QUESTION
      {plusIcon}
    </Button> */}

    {/* <!-- Modal --> */}
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
        <Form className="need-to-validate">
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
        <Button variant="outline-primary" onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>

  </div>
);

{ /* <Modal size="lg" className=" modal full-screen-popup d-block" animation="false" centered show={showNewRev} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="needs-validation">

            <hr />

            <div className="form-group">
              <label htmlFor="message-subject">
                Review Body
              </label>
              <textarea name="body" onChange={handleChange} className="form-control has-validation" id="message-body is-valid" pattern=".{1,1000}" placeholder="What did you think?" required />
            </div>
          </form>
        </Modal.Body>
      </Modal> */}

export default Question;
