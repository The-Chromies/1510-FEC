import '../localStyles/qa.css';
import React, { useContext, useState, useEffect } from 'react';
import {
  Navbar, Container, Row, Col, Button, Modal,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactContext } from '../../Global-Context';
import axios from 'axios';

const AddQuestionPending = (props) => (
  <div>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Thank you for your question, your request is pending approval!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Our mods will take a look and post your question as soon as possible! </h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={props.onHide}>exit</Button>
      </Modal.Footer>
    </Modal>
  </div>
);

export default AddQuestionPending;