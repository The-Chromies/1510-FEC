import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function SearchReviews({
  setSearch, search, findReviews, filterReviewList,
}) {
  // Dynamically adjust search value as input progresses
  const handleSearch = (e) => {
    setSearch(e);
    filterReviewList(0);
  };

  return (
    <div className="review-filter flex-fill d-flex align-content-center align-items-center justify-content-center">
      <input id="textfield" name="review-search" value={search} type="text" placeholder="Search Reviews" onChange={(e) => { handleSearch(e.target.value); }} />
      <Button id="search-reviews-btn" type="button" name="findReviews" variant="outline-secondary" onClick={findReviews}>
        SEARCH
      </Button>
    </div>
  );
}

SearchReviews.propTypes = {
  findReviews: PropTypes.instanceOf(Function).isRequired,
  setSearch: PropTypes.instanceOf(Function).isRequired,
  filterReviewList: PropTypes.instanceOf(Function).isRequired,
  search: PropTypes.string.isRequired,
};

export default SearchReviews;
