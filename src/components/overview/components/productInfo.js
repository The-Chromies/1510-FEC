import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton, FacebookIcon, PinterestIcon, TwitterIcon } from "react-share";


function ProductInfo({ product, selected, goToReviews }) {
  // star image function
  const generateStarImage = (starCount) => {
    let remainder = 0;
    remainder = starCount - remainder;
    let starArr = [];
    for (let j = 0; j < 5; j++) {
      switch (remainder) { //4.25
        case 0.25:
          starArr.push(<img src="../public/icons/star/quarterStar.png" key={j} className="star-image"></img>);
          remainder -= 0.25;
          break;
        case 0.50:
          starArr.push(<img src="../public/icons/star/halfStar.png" key={j} className="star-image"></img>);
          remainder -= 0.50;
          break;
        case 0.75:
          starArr.push(<img src="../public/icons/star/threeQuarterStar.png" key={j} className="star-image"></img>);
          remainder -= 0.75;
          break;
        case 1:
          starArr.push(<img src="../public/icons/star/fullStar.png" key={j} className="star-image"></img>);
          remainder -= 1;
          break;
        case 0:
          starArr.push(<img src="../public/icons/star/emptyStar.png" key={j} className="star-image"></img>);
          break;
        default:
          starArr.push(<img src="../public/icons/star/fullStar.png" key={j} className="star-image"></img>);
          remainder -= 1;
          break;
      }
    }
    return starArr;
  };
  // replace w/ dynamic rating average for each product selected
  var starImage = generateStarImage(4);

  // onClick={goToReviews()}

  return (
    <div className="product-info">
      {/* stars & read X reviews linking to reviews
      <Router>
        <div className="product-info"> </div>
        react router to potentially set up routes w/in our app - link to review section w/in product review listing
        <Route path="/reviews" component={RatingsAndReviews}/>
      </Router>  */}
      <div>{starImage}</div>
      <div onClick={goToReviews} className="review-link">Read all # reviews</div>
      <div>{product.category}</div>
      <h3>{product.name}</h3>
      { selected && selected.sale_price === null ? <div>{`$${selected.original_price}`}</div> :
      selected && selected.sale_price !== null ?
      <React.Fragment>
        <div className="original-price">{`$${selected.original_price}`}</div>
        <div className="sale-price">{`$${selected.sale_price}`}</div>
      </React.Fragment>
      : <div>{`$${product.default_price}`}</div> }
      <div>{product.description}</div>
      {/* facebook redirect error will go away after deployment/no longer using localhost
      currently will reciever error: Parameter 'href' should represent a valid URL */}
      <FacebookShareButton  url="http://localhost:8080" quote="Check out this product!" >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <PinterestShareButton  url="http://localhost:8080" media={selected} >
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <TwitterShareButton  url="http://localhost:8080" title="Check out this product!" >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
}



// use case
{/* <Row>
<Col xs={4} md={4} >
{`${ratingAvg}`}
</Col>
<Col xs={7} md={7} >
{starImage}
</Col>
</Row> */}





/*
to set up routes in another file
import { Link } from 'react-router-dom';

- wrap element in <Link to="/somePath"></Link>
*/

ProductInfo.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
}

export default ProductInfo;
