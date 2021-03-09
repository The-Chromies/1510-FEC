/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getProduct = (id) => {
    axios.get(`http://localhost:3000/related/product/${id}`)
      .then((results) => {
      // console.log('jajajaj', results.data);
      // setRelatedList([results.data, ...relatedList]);
      // setProductInfo(results.data);
      })
      .catch((err) => {
        console.log('err getting product info:', err);
      });
  };

  return (
    <div>
      <IconButton aria-label="settings">
        <StarBorderIcon onClick={handleOpen} />
      </IconButton>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h4 id="transition-modal-title">Comparing</h4>
            <p id="transition-modal-description">current product/ related product</p>
            <div className="compareTable">
              {props.productFeatures.map((featureObj, i) => (
                <div>
                  <p>
                    feature:
                    {featureObj.feature}
                  </p>
                  <p>
                    value:
                    {featureObj.value}
                  </p>
                </div>
              ))}
              {/* <p>{props.productFeatures}</p> */}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

TransitionsModal.propTypes = {
  // relatedProducts: PropTypes.instanceOf(Array).isRequired,
  // product: PropTypes.instanceOf(Array).isRequired,
  // styles: PropTypes.instanceOf(String).isRequired,
  productFeatures: PropTypes.instanceOf(Array).isRequired,
};
