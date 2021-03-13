/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, ProgressBar, Col,
} from 'react-bootstrap';
import uuid from 'node-uuid';

function CharRadio({
  name, chars, id, setCharObj, charObj,
}) {
  // Handle radio selection and add it to the form data.
  const handleRadio = (e) => {
    const charName = name;
    const charId = e.target.name;
    // eslint-disable-next-line prefer-const
    let charValue = e.target.value;
    if (charId) {
      charObj[charId] = Number(charValue);
    }
  };

  // CURRENT BUG: The radio ticks will occasionally disappear, but the data is still there.
  return (
    <div className="char-radio" key={uuid()}>
      <hr />
      <h4 className="d-flex justify-content-center text-center align-self-center align-items-center">{name}</h4>
      <fieldset onClick={handleRadio}>
        <Row className="d-flex justify-content-center text-center align-self-center align-items-center">
          <Col>
            <input type="radio" name={id[name].id} id={`${name}1`} value="1" />
          </Col>
          <Col>
            <input type="radio" name={id[name].id} id={`${name}2`} value="2" />
          </Col>
          <Col>
            <input type="radio" name={id[name].id} id={`${name}3`} value="3" />
          </Col>
          <Col>
            <input type="radio" name={id[name].id} id={`${name}4`} value="4" />
          </Col>
          <Col>
            <input type="radio" name={id[name].id} id={`${name}5`} value="5" />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center text-center align-self-center align-items-center">
          <Col>
            <label htmlFor={`${name}1`}>{chars.labelLow}</label>
          </Col>
          <Col>
            <label htmlFor={`${name}2`}>{chars.labelLowMid}</label>
          </Col>
          <Col>
            <label htmlFor={`${name}3`}>{chars.labelMid}</label>
          </Col>
          <Col>
            <label htmlFor={`${name}4`}>{chars.labelMidHigh}</label>
          </Col>
          <Col>
            <label htmlFor={`${name}5`}>{chars.labelHigh}</label>
          </Col>
        </Row>
      </fieldset>
      <hr />
    </div>
  );
}

CharRadio.propTypes = {
};

export default CharRadio;
