import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QtyOption from './qtyOption';

function AddToCart({ selected }) {
  const [ size, setSize ] = useState(0);
  const [ sku, setSku ] = useState(0);

  const addSize = (e) => {
    setSize(e.target.value);
  }


  return (
    <div className="add-to-cart">
      <div className="dropdowns">
        { selected && Object.keys(selected.skus)[0] !== 'null' ?
        <select className="size" onChange={(e) => {addSize(e)} }>
          <option>Select Size</option>
        { Object.keys(selected.skus).map((sku, i) => (
          <option key={i} id={sku}>{selected.skus[sku].size}</option>
          ))
        }
        </select>
        :
        <select className="size" disabled >
          <option>OUT OF STOCK</option>
        </select>
        }

        { size ?
        <select className="qty">
          { selected ?
            Object.keys(selected.skus).map((sku, i) => (
              <React.Fragment key={i}>
                { selected.skus[sku].size === size?
                  <QtyOption qty={selected.skus[sku].quantity}/>
                  : null
                }
              </React.Fragment>
            ))
            : null
          }
        </select> :
        <select className="qty" disabled>
          <option>-</option>
        </select>}
      </div>
      <div className="add-buttons">
        <button className="add-to-cart-button">Add to Cart</button>
        <div className="add-to-related">
          <img src="../public/imgs/star.png" id="related-star"></img>
        </div>
      </div>
    </div>
  );
}

AddToCart.propTypes = {
  selected: PropTypes.instanceOf(Object).isRequired,
}

export default AddToCart;
