/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
import CharChart from './charChart';

function SummaryContainer({
  meta, generateStarImage, handleStarClick, starFilter, avgRating,
}) {
  console.log('meta', meta)
  // console.log(meta);
  const starList = [];
  let charList = [];
  if (meta.characteristics) {
    charList = Object.keys(meta.characteristics);
  }

  // console.log('meta');
  // console.log(meta);
  // eslint-disable-next-line react/prop-types
  const { ratings } = meta;
  const keys = Object.keys(ratings);
  const countReviews = Number(meta.recommended.false) + Number(meta.recommended.true);
  // console.log('countRev', countReviews)
  const recPerc = Math.floor(100 * (Number(meta.recommended.true) / (Number(meta.recommended.false) + Number(meta.recommended.true))));

  let j = 0;
  for (let i = 1; i <= 5; i += 1) {
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    let countVal = 0;
    if (keys[j]) {
      if (keys[j].toString() === i.toString()) {
        countVal = ratings[keys[j]];
        j++;
      }
      starList.push(<div className="hoverStar" key={i} onClick={() => { handleStarClick(i); }}><SummaryStar tempKey={i} key={i} revCount={countReviews} name={Number(i)} count={countVal} /></div>);
    }
  }

  return (
    <Container key="summary-inside" className="summary-container container border-primary">
      <div className="border border-secondary shadow">
        <h3>Summary Container</h3>
        <Row>
          <Col xs={4} md={4} className="font-weight-bold">
            <span key="rating-avg" className="text-center">
              {' '}
              {`${avgRating}`}
              {' '}
            </span>
          </Col>
          <Col xs={8} md={8} className="align-content-start">
            <span key="rating-avg-star" className="text-left">{generateStarImage(avgRating, 'summary-inside-star')}</span>
          </Col>
        </Row>
        <div className="mt-2 mp-20">
          <span>
            {`${recPerc}% of users recommend this product`}
          </span>
        </div>
        <hr />
        {starFilter ? <span className="hoverStar text-center text-bolder" onClick={() => { handleStarClick(''); }}>Remove Filter</span> : null}
        {starList}
      </div>
      <hr />
      <div className="border border-secondary shadow">
        <h3>Product Characteristics</h3>
        {charList.map((char) => <CharChart value={Number(meta.characteristics[char].value)} name={char} />)}
      </div>
    </Container>
  );
}

SummaryContainer.propTypes = {
  meta: PropTypes.instanceOf(Object).isRequired,
  generateStarImage: PropTypes.instanceOf(Function).isRequired,
  handleStarClick: PropTypes.instanceOf(Function).isRequired,
};

export default SummaryContainer;
