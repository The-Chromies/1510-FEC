/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, ProgressBar, Col,
} from 'react-bootstrap';
import uuid from 'node-uuid';

function CharChart({ name, value }) {
  const per = (value / 5) * 100;

  // Set Character Labels
  const charLabels = {
    Size: {
      labelLow: 'Small',
      labelMid: 'Perfect',
      labelHigh: 'Wide',
    },
    Width: {
      labelLow: 'Narrow',
      labelMid: 'Perfect',
      labelHigh: 'Wide',
    },
    Comfort: {
      labelLow: 'Uncomfortable',
      labelMid: 'Ok',
      labelHigh: 'Perfect',
    },
    Quality: {
      labelLow: 'Poor',
      labelMid: 'Expected',
      labelHigh: 'Perfect',
    },
    Length: {
      labelLow: 'Short',
      labelMid: 'Perfect',
      labelHigh: 'Long',
    },
    Fit: {
      labelLow: 'Tight',
      labelMid: 'Perfect',
      labelHigh: 'Long',
    },
  };

  const lableLow = charLabels[name].labelLow;
  const lableMid = charLabels[name].labelMid;
  const lableHigh = charLabels[name].labelHigh;

  return (
    <div className="char-chart">
      <Row>
        <Col>
          <h4>{name}</h4>
        </Col>
      </Row>
      <div>
        <ProgressBar now={per} />
      </div>
      <Row className="progress-label">
        <Col className="align-text-top">
          {lableLow}
        </Col>
        <Col className="align-text-top">
          {lableMid}
        </Col>
        <Col className="align-text-top">
          {lableHigh}
        </Col>
      </Row>
      <hr />
    </div>
  );
}

CharChart.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default CharChart;
