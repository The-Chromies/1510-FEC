/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import SummaryStar from './summaryStar';

function SummaryContainer({ meta }) {
  console.log(meta);
  const starList = [];
  // eslint-disable-next-line react/prop-types
  const { ratings, ratingAvg } = meta;
  const keys = Object.keys(ratings);

  for (let i = 0; i < keys.length; i++) {
    starList.push(<SummaryStar key={keys[i]} name={keys[i]} count={ratings[keys[i]]} />);
  }

  let remainder = 0;
  remainder = ratingAvg - remainder;
  let starArr = [];
  for (let j = 0; j < 5; j++) {
    console.log('ratingAvg: ', ratingAvg)
    console.log('Remainder: ', remainder)
    switch (remainder) { //4.25
      case 0.25:
        starArr.push(0.25);
        remainder -= 0.25;
        console.log('adding .25: ', remainder)
        break;
      case 0.50:
        starArr.push(0.50);
        remainder -= 0.50;
        console.log('adding .50: ', remainder)
        break;
      case 0.75:
        starArr.push(0.75);
        remainder -= 0.75;
        console.log('adding .75: ', remainder)
        break;
      case 1:
        starArr.push(1);
        remainder -= 1;
        console.log('adding 1: ', remainder)
        break;
      case 0:
        starArr.push(0);
        console.log('adding 0: ', remainder)
        break;
      default:
        starArr.push(1);
        remainder -= 1;
        console.log('adding 1: ', remainder)
        break;
    }
  }
  console.log('starArr');
  console.log(starArr);

  return (
    <div className="summary-container">
      <h3>Summary Container</h3>
      <div>
        {`${ratingAvg}- `}
      </div>
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
