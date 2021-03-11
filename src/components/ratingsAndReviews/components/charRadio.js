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
          <input type="radio" name={name} id={`${name}1`} value="option1" />
        </Col>
        <Col>
          <input type="radio" name={name} id={`${name}2`} value="option2" />
        </Col>
        <Col>
          <input type="radio" name={name} id={`${name}3`} value="option3" />
        </Col>
        <Col>
          <input type="radio" name={name} id={`${name}4`} value="option4" />
        </Col>
        <Col>
          <input type="radio" name={name} id={`${name}5`} value="option5" />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center text-center align-self-center align-items-center">
        <Col>
          <label htmlFor={`${name}1`}>{charList.labelLow}</label>
        </Col>
        <Col>
          <label htmlFor={`${name}2`}>{charList.labelLowMid}</label>
        </Col>
        <Col>
          <label htmlFor={`${name}3`}>{charList.labelMid}</label>
        </Col>
        <Col>
          <label htmlFor={`${name}4`}>{charList.labelMidHigh}</label>
        </Col>
        <Col>
          <label htmlFor={`${name}5`}>{charList.labelHigh}</label>
        </Col>
      </Row>
      <hr />
    </div>
  );
}

CharRadio.propTypes = {
};

export default CharRadio;
