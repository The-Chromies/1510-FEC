import React, { useState, useEffect } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import QtyOption from './qtyOption';

function AddToCart({ selected }) {
  const [ size, setSize ] = useState(0);
  const [ productToAdd, setProductToAdd ] = useState({size: '', qty: ''});

  const clickTracker = (e) => {
    // send post req to /interactions endpoint w/ element of page clicked, time of click, & module clicked
    let elementClicked = e.target.type.concat(`, ${e.target.className}`)
    console.log(elementClicked)
    const date = new Date;
    console.log(date.toTimeString())
  };

  const addSize = (e) => {
    setSize(e.target.value);
  }

  const addProduct = (e) => {
    setProductToAdd({[e.target.className] : e.target.value});
  }


  return (
    <div className="add-to-cart">
      { selected && Object.keys(selected.skus)[0] !== 'null' ?
      <select className="size" onChange={(e) => {addSize(e); addProduct(e)} }>
        <option>Select Size</option>
      { Object.keys(selected.skus).map((sku, i) => (
        <option key={i} id={sku}>{selected.skus[sku].size}</option>
        ))
      }
      </select>
      :
      <select disabled>
        <option>OUT OF STOCK</option>
      </select>
      }

      { size ?
      <select className="qty" onChange={e => addProduct(e)}>
        { selected ?
          Object.keys(selected.skus).map((sku, i) => (
            <React.Fragment key={i}>
              { selected.skus[sku].size === size ?
                <QtyOption qty={selected.skus[sku].quantity}/>
                : null
              }
            </React.Fragment>
          ))
          : null
        }
      </select> :
      <select disabled>
        <option>-</option>
      </select>}

      <Button onClick={clickTracker} className="add-to-cart">Add to Cart</Button>
      <img src="../public/imgs/star.png" className="add-to-related"></img>
    </div>
  );
}

AddToCart.propTypes = {
  selected: PropTypes.instanceOf(Object).isRequired,
}

export default AddToCart;
