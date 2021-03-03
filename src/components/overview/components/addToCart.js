import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function AddToCart({styles}) {
  const clickTracker = (e) => {
    // send post req to /interactions endpoint w/ element of page clicked, time of click, & module clicked
    console.log(e.target);
    const date = new Date;
    console.log(date.toTimeString())
  }

  return (
    <div className="add-to-cart">
      <Button onClick={clickTracker}>Add to Cart</Button>
    </div>
  );
}

AddToCart.propTypes = {
  styles: PropTypes.instanceOf(Object).isRequired,
}

export default AddToCart;
