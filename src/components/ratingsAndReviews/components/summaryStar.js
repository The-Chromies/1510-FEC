import React from 'react';
import PropTypes from 'prop-types';

function SummaryStar({ name, count }) {
  return (
    <div>
      <span>{`${name}-Star : ${count}`}</span>
    </div>
  );
}

SummaryStar.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
};

export default SummaryStar;
