/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, ProgressBar, Col,
} from 'react-bootstrap';
import uuid from 'node-uuid';

function CharRadio({ name, charList }) {
  return (
    <div className="char-radio">
      <hr />
      <h4 className="d-flex justify-content-center text-center align-self-center align-items-center">{name}</h4>
      <Row className="d-flex justify-content-center text-center align-self-center align-items-center">
        <Col>
          <input type="radio" name={name} id="inlineRadio1" value="option1" />
        </Col>
        <Col>
          <input type="radio" name={name} id="inlineRadio2" value="option2" />
        </Col>
        <Col>
          <input type="radio" name={name} id="inlineRadio3" value="option3" />
        </Col>
        <Col>
          <input type="radio" name={name} id="inlineRadio4" value="option4" />
        </Col>
        <Col>
          <input type="radio" name={name} id="inlineRadio5" value="option5" />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center text-center align-self-center align-items-center">
        <Col>
          <label htmlFor="inlineRadio1">{charList.labelLow}</label>
        </Col>
        <Col>
          <label htmlFor="inlineRadio2">{charList.labelLowMid}</label>
        </Col>
        <Col>
          <label htmlFor="inlineRadio3">{charList.labelMid}</label>
        </Col>
        <Col>
          <label htmlFor="inlineRadio4">{charList.labelMidHigh}</label>
        </Col>
        <Col>
          <label htmlFor="inlineRadio5">{charList.labelHigh}</label>
        </Col>
      </Row>
      <hr />
    </div>
  );
}

CharRadio.propTypes = {
};

export default CharRadio;
