/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

function QtyOption({ key, qty, sendClick }) {
  return (
    <React.Fragment key={key}>
      {/* map through qty amount up to 15 for qty select options */}
      {Array.from(Array(qty), (e, i) => {
        return i < 15 ? <option key={i}>{i + 1}</option> : null;
      })}
    </React.Fragment>
  );
}

QtyOption.påropTypes = {
  sendClick: PropTypes.instanceOf(Function).isRequired,
};

export default QtyOption;
