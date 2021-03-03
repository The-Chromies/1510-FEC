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
