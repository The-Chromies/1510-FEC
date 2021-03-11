import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, Container, Row, Col, ProgressBar,
} from 'react-bootstrap';

function SummaryStar({
  tempKey, name, count, revCount,
}) {
  // console.log(tempKey)

  const per = (revCount > 0) ? count / revCount : 0;
  // console.log('per: ', per)
  return (
    <>
      <Row key={`s${tempKey}`}>
        <Col key={`c1${tempKey}`} xs={4} md={4} className="justify-content-end font-weight-bold">
          {' '}
          { `${name} stars` }
          {' '}
        </Col>
        <Col key={`c2${tempKey}`} xs={8} md={8}>
          {' '}
          <ProgressBar className="progress" now={per * 100} />
          {' '}
        </Col>
      </Row>
    </>
  );
}

SummaryStar.propTypes = {
  name: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  tempKey: PropTypes.number.isRequired,
  revCount: PropTypes.number.isRequired,
};

export default SummaryStar;
