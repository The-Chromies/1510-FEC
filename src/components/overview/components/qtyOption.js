import React, { useState, useEffect } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

function QtyOption({ qty }) {

  return (
    <React.Fragment>
      {Array.from(Array(qty), (e, i) => {
        return i < 15 ? <option key={i}>{i + 1}</option> : null
      })}
    </React.Fragment>
  );
}

export default QtyOption;
