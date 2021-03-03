/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, Container, Row, Col, Grid,
} from 'react-bootstrap';
import SummaryStar from './summaryStar';

function SummaryContainer({ meta }) {
  console.log(meta);
  const starList = [];
  
  //Handler to generate stars
  const generateStarImage = (starCount) => {
    let remainder = 0;
    remainder = starCount - remainder;
    let starArr = [];
    for (let j = 0; j < 5; j++) {
      switch (remainder) { //4.25
        case 0.25:
          starArr.push(<img src="public/icons/star/quarterStar.png" className="star-image"></img>);
          remainder -= 0.25;
          break;
        case 0.50:
          starArr.push(<img src="public/icons/star/halfStar.png" className="star-image"></img>);
          remainder -= 0.50;
          break;
        case 0.75:
          starArr.push(<img src="public/icons/star/threeQuarterStar.png" className="star-image"></img>);
          remainder -= 0.75;
          break;
        case 1:
          starArr.push(<img src="public/icons/star/fullStar.png" className="star-image"></img>);
          remainder -= 1;
          break;
        case 0:
          starArr.push(<img src="public/icons/star/emptyStar.png" className="star-image"></img>);
          break;
        default:
          starArr.push(<img src="public/icons/star/fullStar.png" className="star-image"></img>);
          remainder -= 1;
          break;
      }
    }
    return starArr;
  };


  // eslint-disable-next-line react/prop-types
  const { ratings, ratingAvg } = meta;
  const keys = Object.keys(ratings);
  for (let i = 0; i < keys.length; i++) {
    starList.push(<SummaryStar key={keys[i]} name={generateStarImage(Number(keys[i]))} count={ratings[keys[i]]} />);
  }
  
  var starImage = generateStarImage(ratingAvg);
  return (
    <div className="summary-container">
      <h3>Summary Container</h3>
      <Row>
        <Col xs={4} md={4} >
        {`${ratingAvg}`}
        </Col>
        <Col xs={7} md={7} >
        {starImage}
        </Col>
      </Row>
      <div>
        {starList}
      </div>
    </div>
  );
}

SummaryContainer.propTypes = {
  meta: PropTypes.instanceOf(Object).isRequired,
};

export default SummaryContainer;
