/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'node-uuid';

function RenderPhoto({ photo }) {
  return (
    <div className="review-photo review-filter flex-fill d-flex align-content-center align-items-center justify-content-center">
      <div key={uuid()} onClick={() => { window.open(photo.url, 'mywindow'); }}><img src={photo.url} alt="" className="review-photo" /></div>
    </div>
  );
}

RenderPhoto.propTypes = {
  photo: PropTypes.instanceOf(Object).isRequired,
};

export default RenderPhoto;
