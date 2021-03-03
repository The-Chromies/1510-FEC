import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function ProductInfo({ product }) {

  return (
    <div className="product-info">
      {/* stars & read X reviews linking to reviews
      <Router>
        <div className="product-info"> </div>
        react router to potentially set up routes w/in our app - link to review section w/in product review listing
        <Route path="/reviews" component={RatingsAndReviews}/>
      </Router>  */}
      <div>{product.category}</div>
      <h3>{product.name}</h3>
      <div>{`$${product.default_price}`}</div>
      <div>{product.description}</div>
    </div>
  );
}


/*
to set up routes in another file
import { Link } from 'react-router-dom';

- wrap element in <Link to="/somePath"></Link>
*/

ProductInfo.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
}

export default ProductInfo;
