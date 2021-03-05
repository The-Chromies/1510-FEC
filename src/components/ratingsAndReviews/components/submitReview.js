/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal,
} from 'react-bootstrap';

function ReviewListContainer({ showNewRev, handleClose, handleOpen }) {
  return (
    <>
      <Modal size="lg" className=" modal full-screen-popup d-block" animation="false" centered show={showNewRev} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

ReviewListContainer.propTypes = {
  showNewRev: PropTypes.bool.isRequired,
  handleClose: PropTypes.instanceOf(Function).isRequired,
  handleOpen: PropTypes.instanceOf(Function).isRequired,
};

export default ReviewListContainer;
