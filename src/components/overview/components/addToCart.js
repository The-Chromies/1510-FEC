import React from 'react';
import Button from 'react-bootstrap/Button';

function AddToCart() {
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

export default AddToCart;
