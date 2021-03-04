import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, Container, Row, Col, Grid,
} from 'react-bootstrap';

function SummaryStar({ name, count }) {
  return (
    <Row>
      <Col xs={2} md={2}>
        {' '}
        { count }
        {' '}
      </Col>
      <Col xs={10} md={10}>
        {' '}
        { name }
        {' '}
      </Col>
    </Row>
  );
}

SummaryStar.propTypes = {
  name: PropTypes.instanceOf(Array).isRequired,
  count: PropTypes.string.isRequired,
};

export default SummaryStar;
