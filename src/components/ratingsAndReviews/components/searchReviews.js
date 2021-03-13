import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchReviews({
  setSearch, search, findReviews, filterReviewList,
}) {
  // console.log(props)
  const handleSearch = (e) => {
    setSearch(e);
    filterReviewList(0);
  };

  return (
    <div className="review-filter flex-fill d-flex align-content-center align-items-center justify-content-center">
      <input id="textfield" name="review-search" value={search} type="text" placeholder="Search Reviews" onChange={(e) => { handleSearch(e.target.value); }} />
      <button id="search-reviews-btn" type="button" name="findReviews" className="find-review-button" onClick={findReviews}>Search</button>
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
