import './ov.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function ProductInfo() {
  return (
    <Router>
      <div className="product-info"> </div>
      {/* react router to potentially set up routes w/in our app - link to review section w/in product review listing
      <Route path="/reviews" component={RatingsAndReviews}/> */}
    </Router>
  );
}

export default ProductInfo;



/*
to set up routes in another file
import { Link } from 'react-router-dom';

- wrap element in <Link to="/somePath"></Link>
*/
