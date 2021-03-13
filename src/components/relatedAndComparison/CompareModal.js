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
import {
  Navbar, Container, Row, Col, Grid,
} from 'react-bootstrap';
import { ContactContext } from '../../Global-Context';

// MODAL STYLING
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
  // NEEDED VAIABLES AND METHODS FROM GLOBAL CONTEXT
  const {
    localServer,
  } = useContext(ContactContext);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // OPEN AND CLOSING FUNCTION FOR MODAL
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // MODAL POPUP AND SETUP
  return (
    <>
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
              <div className="compareTable">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Current Product</th>
                      <th scope="col">Features</th>
                      <th scope="col">Related Product</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.productFeatures.map((featureObj, i) => (
                      <>
                        <tr>
                          <td>current</td>
                          <td>
                            {featureObj.feature}
                          </td>
                          <td className="justify-content-end align-content-end text-*-right">
                            {featureObj.value}
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
}

TransitionsModal.propTypes = {
  productFeatures: PropTypes.instanceOf(Array).isRequired,
};
