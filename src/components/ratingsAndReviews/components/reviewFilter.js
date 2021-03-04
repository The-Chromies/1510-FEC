import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
} from 'react-bootstrap';

function ReviewFilter({meta, productId, findReviews}) {
  // console.log(props)

  const handleCategorySelect = (categoryId) => {
    // console.log(categoryId)
    findReviews(productId, categoryId);
  };

  return (
    <div className="review-filter flex-fill d-flex align-content-center align-items-center justify-content-center">
      <Row>
        <p className="text-center font-italic pt-3 pr-2">{`${meta.revCount} reviews, sorted by  `}</p>
        <select className="select-review-filter" onClick={(e) => { handleCategorySelect(e.target.value)}}>
          <option value="relevant">Relevance</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </Row>
    </div>
  );
}

ReviewFilter.propTypes = {
  meta: PropTypes.instanceOf(Object).isRequired,
  productId: PropTypes.string.isRequired,
  findReviews: PropTypes.instanceOf(Function).isRequired,
};

export default ReviewFilter;
