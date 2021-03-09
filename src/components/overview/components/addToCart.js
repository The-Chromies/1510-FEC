/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import QtyOption from './qtyOption';

function AddToCart({ selected, sendClick }) {
  const [size, setSize] = useState(0);
  const [sku, setSku] = useState(0);
  const [noSize, setNoSize] = useState(false);

  const addSize = (e) => {
    setSize(e.target.value);
    setNoSize(false);
  };

  const openSize = () => {
    if (size === 0 || size === 'Select size') {
      setNoSize(true);
      $('.size').show().focus().click();
      // open(select);
      // $('.size').slideToggle(100);
    }
  };

  return (
    <div className="add-to-cart">
      {noSize
      && <h4>Please select size</h4>}
      <div className="dropdowns">
        { selected && Object.keys(selected.skus)[0] !== 'null' ?
          // eslint-disable-next-line react/jsx-wrap-multilines
          <select className="size" id="size" onChange={(e) => { addSize(e); sendClick(e); }}>
            <option>Select Size</option>
            { Object.keys(selected.skus).map((skuId, i) => (
              <option key={i} id={sku}>{selected.skus[skuId].size}</option>
            ))}
          </select>
          :
          <select className="size" disabled>
            <option>OUT OF STOCK</option>
          </select> }

        { size ?
          <select className="qty" onChange={(e) => { sendClick(e); }}>
            { selected ?
              Object.keys(selected.skus).map((skuId, i) => (
                <React.Fragment key={i}>
                  { selected.skus[skuId].size === size ?
                    <QtyOption qty={selected.skus[skuId].quantity} sendClick={sendClick} />
                    : null }
                </React.Fragment>
              ))
              : null }
          </select> :
          <select className="qty" disabled>
            <option>-</option>
          </select>}
      </div>
      <div className="add-buttons">
        <button type="submit" className="add-to-cart-button" onClick={(e) => { openSize(); sendClick(e); }}>Add to Cart</button>
        <div onClick={(e) => { sendClick(e); }} className="add-to-related">
          <img src="../public/imgs/star.png" alt="" id="related-star" />
        </div>
      </div>
    </div>
  );
}

AddToCart.propTypes = {
  selected: PropTypes.instanceOf(Object).isRequired,
};

export default AddToCart;
