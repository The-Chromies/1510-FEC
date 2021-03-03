import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

function AddToCart({styles}) {
  const clickTracker = (e) => {
    // send post req to /interactions endpoint w/ element of page clicked, time of click, & module clicked
    let elementClicked = e.target.type.concat(`, ${e.target.className}`)
    console.log(elementClicked)
    const date = new Date;
    console.log(date.toTimeString())
  }

  return (
    <div className="add-to-cart">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Size
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>S</Dropdown.Item>
          <Dropdown.Item>M</Dropdown.Item>
          <Dropdown.Item>L</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Quantity
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>1</Dropdown.Item>
          <Dropdown.Item>2</Dropdown.Item>
          <Dropdown.Item>3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button onClick={clickTracker} className="add-to-cart">Add to Cart</Button>
    </div>
  );
}

AddToCart.propTypes = {
  styles: PropTypes.instanceOf(Object).isRequired,
}

export default AddToCart;
