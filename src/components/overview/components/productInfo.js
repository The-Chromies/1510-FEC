import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function ProductInfo({ product, selected }) {

  return (
    <div className="product-info">
      {/* stars & read X reviews linking to reviews
      <Router>
        <div className="product-info"> </div>
        react router to potentially set up routes w/in our app - link to review section w/in product review listing
        <Route path="/reviews" component={RatingsAndReviews}/>
      </Router>  */}
      <div>Read all # reviews</div>
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
      <img src="../public/imgs/facebook (2).png" className="social-media"/>
      <img src="../public/imgs/twitter (1).png" className="social-media"/>
      <img src="../public/imgs/pinterest.png" className="social-media"/>
    </div>
  );
}

// star image function
// const generateStarImage = (starCount) => {
//   let remainder = 0;
//   remainder = starCount - remainder;
//   let starArr = [];
//   for (let j = 0; j < 5; j++) {
//     switch (remainder) { //4.25
//       case 0.25:
//         starArr.push(<img src="public/icons/star/quarterStar.png" className="star-image"></img>);
//         remainder -= 0.25;
//         break;
//       case 0.50:
//         starArr.push(<img src="public/icons/star/halfStar.png" className="star-image"></img>);
//         remainder -= 0.50;
//         break;
//       case 0.75:
//         starArr.push(<img src="public/icons/star/threeQuarterStar.png" className="star-image"></img>);
//         remainder -= 0.75;
//         break;
//       case 1:
//         starArr.push(<img src="public/icons/star/fullStar.png" className="star-image"></img>);
//         remainder -= 1;
//         break;
//       case 0:
//         starArr.push(<img src="public/icons/star/emptyStar.png" className="star-image"></img>);
//         break;
//       default:
//         starArr.push(<img src="public/icons/star/fullStar.png" className="star-image"></img>);
//         remainder -= 1;
//         break;
//     }
//   }
//   return starArr;
// };
// var starImage = generateStarImage(ratingAvg);


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
