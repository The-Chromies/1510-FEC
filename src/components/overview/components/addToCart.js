/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
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

      // this line of code creates a scrollable dropdown, but does not maintain select functionality
      // $('#size').attr('size', 2);

      // this highlights the size select
      $('.size').show().focus().click();
    }
  };

  const addToCart = () => {
    const skuData = {
      sku_id: sku,
    };
    if (sku !== 0) {
      axios.post('http://localhost:3000/overview', skuData)
        .then((res) => {
          console.log('SUCCESSFUL POST TO CART');
          console.log(res);
        })
        .catch((err) => {
          console.log('FAILED TO POST TO CART');
          console.log(err);
        });
    }
  };

  useEffect(() => {
    selected && Object.keys(selected.skus).map((skuId, i) => {
      if (selected.skus[skuId].size === size) {
        setSku(skuId);
      }
    });
  }, [size]);

  return (
    <div className="add-to-cart">
      {noSize
      && <div className="select-size-message">Please select a size</div>}
      <div className="dropdowns">
        { selected && Object.keys(selected.skus)[0] !== 'null' ?
          // eslint-disable-next-line react/jsx-wrap-multilines
          <select className="size" id="size" onChange={(e) => { addSize(e); sendClick(e); }}>
            <option>Select Size</option>
            { Object.keys(selected.skus).map((skuId, i) => (
              <>
                <option key={i} id={sku}>{selected.skus[skuId].size}</option>
              </>
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
        { selected && Object.keys(selected.skus)[0] !== 'null'
          ? <button type="submit" className="add-to-cart-button" onClick={(e) => { openSize(); addToCart(); sendClick(e); }}>Add to Cart</button>
          : null }
        <div onClick={(e) => { sendClick(e); }} className="add-to-related">
          <img src="../public/imgs/star.png" alt="" id="related-star" />
        </div>
      </div>
    </div>
  );
}

AddToCart.propTypes = {
  sendClick: PropTypes.instanceOf(Function).isRequired,
};

export default AddToCart;
