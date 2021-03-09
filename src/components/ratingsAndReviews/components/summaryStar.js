import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, Container, Row, Col, Grid,
} from 'react-bootstrap';

function SummaryStar({ tempKey, name, count }) {
  // console.log(tempKey)
  return (
    <Row key={`s${tempKey}`}>
      <Col key={`c1${tempKey}`} xs={4} md={4} className="justify-content-end font-weight-bold">
        {' '}
        { count || 0 }
        {' '}
      </Col>
      <Col key={`c2${tempKey}`} xs={8} md={8}>
        {' '}
        { name }
        {' '}
      </Col>
    </Row>
  );
}

SummaryStar.propTypes = {
  name: PropTypes.instanceOf(Array).isRequired,
  count: PropTypes.number.isRequired,
  tempKey: PropTypes.number.isRequired,
};

export default SummaryStar;
