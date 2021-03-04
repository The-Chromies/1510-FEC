/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable vars-on-top */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, Container, Row, Col, Grid,
} from 'react-bootstrap';
import SummaryStar from './summaryStar';

function SummaryContainer({ meta, generateStarImage }) {
  // console.log(meta);
  const starList = [];

  // eslint-disable-next-line react/prop-types
  const { ratings, ratingAvg } = meta;
  const keys = Object.keys(ratings);
  for (let i = 0; i < keys.length; i++) {
    starList.push(<SummaryStar key={i} name={generateStarImage(Number(keys[i]))} count={ratings[keys[i]]} />);
  }

  // eslint-disable-next-line no-var
  var starImage = generateStarImage(ratingAvg);
  return (
    <Container className="container border-primary">
      <div className="border border-secondary shadow">
        <h3>Summary Container</h3>
        <Row>
          <Col xs={4} md={4} className="font-weight-bold">
            <span className="text-center">
              {' '}
              {`${ratingAvg}`}
              {' '}
            </span>
          </Col>
          <Col xs={8} md={8} className="align-content-start">
            <span className="text-left">{starImage}</span>
          </Col>
        </Row>
        <hr />
        {starList}
      </div>
    </Container>
  );
}

SummaryContainer.propTypes = {
  meta: PropTypes.instanceOf(Object).isRequired,
  generateStarImage: PropTypes.instanceOf(Function).isRequired,
};

export default SummaryContainer;
