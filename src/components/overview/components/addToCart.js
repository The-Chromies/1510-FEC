/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import $ from 'jquery';
import QtyOption from './qtyOption';
import { ContactContext } from '../../../Global-Context';

function AddToCart({ selected, sendClick }) {
  const [size, setSize] = useState(0);
  const [sku, setSku] = useState(0);
  const [noSize, setNoSize] = useState(false);
  const {
    handelAddOutfit, productId, localServer,
  } = useContext(ContactContext);

  const addSize = (e) => {
    setSize(e.target.value);
    setNoSize(false);
  };

  // alter size select when no size is selected
  const openSize = () => {
    if (size === 0 || size === 'Select size') {
      setNoSize(true);

      // this line of code creates a scrollable dropdown, but does not maintain select functionality
      // $('#size').attr('size', 2);

      // highlights size select
      $('.size').show().focus().click();
    }
  };

  // when size & qty are valid add product data to cart
  const addToCart = () => {
    const skuData = {
      sku_id: sku,
    };
    if (sku !== 0) {
      axios.post(`http://${localServer}:3000/overview`, skuData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // add product to outfit list
  const addToRelated = () => {
    handelAddOutfit(productId);
  };

  // update sku for add to cart when size is valid
  useEffect(() => {
    selected && Object.keys(selected.skus).map((skuId, i) => {
      if (selected.skus[skuId].size === size) {
        setSku(skuId);
      }
    });
  }, [size]);

  return (
    <div className="add-to-cart">
      {/* message asking to select size when invalid */}
      {noSize
      && <div className="select-size-message">Please select a size</div>}
      <div className="dropdowns">
        { selected && Object.keys(selected.skus)[0] !== 'null' ?
          // eslint-disable-next-line react/jsx-wrap-multilines
          <select className="size" id="size" onChange={(e) => { addSize(e); sendClick(e); }}>
            <option key={16}>Select Size</option>
            {/* all sizes for selected style */}
            { Object.keys(selected.skus).map((skuId, i) => (
              <React.Fragment key={i}>
                <option key={i} id={sku}>{selected.skus[skuId].size}</option>
              </React.Fragment>
            ))}
          </select>
          :
          <select className="size" disabled>
            <option>OUT OF STOCK</option>
          </select> }
        {/* disable quantity when no size selected */}
        { size ?
          <select className="qty" onChange={(e) => { sendClick(e); }}>
            { selected ?
              Object.keys(selected.skus).map((skuId, i) => (
                <React.Fragment key={i}>
                  { selected.skus[skuId].size === size ?
                    <QtyOption key={i} qty={selected.skus[skuId].quantity} sendClick={sendClick} />
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
        <div onClick={(e) => { sendClick(e); addToRelated(); }} className="add-to-related">
          <img key={17} src="../public/imgs/star.png" alt="" id="related-star" />
        </div>
      </div>
    </div>
  );
}

AddToCart.propTypes = {
  sendClick: PropTypes.instanceOf(Function).isRequired,
};

export default AddToCart;
