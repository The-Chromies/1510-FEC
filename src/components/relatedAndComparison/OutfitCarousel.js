/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Paper, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import OutfitList from './OutfitList';
import { ContactContext } from '../../Global-Context';

const responsive = {
  superLargeDesktop: {
  // RULES FOR DISPLAYING CARDS ON SCREEN
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// STYLING FOR ADD OUTFIT BUTTON AND CAROUSEL POSITIONING
const useStyles = makeStyles((theme) => ({
  largeIcon: {
    width: 100,
    height: 100,
    marginTop: 100,
  },
  bIcon: {
    width: 100,
    height: 100,
    position: 'absolute',

  },
  boxing: {
    position: 'relative',
    left: 10,
    maxHeight: 400,
  },
  carousel: {
    position: 'relative',
    left: 150,
    bottom: 200,
  },

}));

function OutfitCarousel(props) {
  // NEEDED VAIABLES AND METHODS FROM GLOBAL CONTEXT
  const {
    productId, setProductId, outfitStyle, getProduct, getStyle, handelAddOutfit, outfitProduct,
  } = useContext(ContactContext);
  const classes = useStyles();

  // OUTFIT LIST CAROUSEL AND ADD OUTFIT BUTTON
  return (
    <>
      <div className="holder">
        <Container className={classes.boxing}>
          <div className="bname"> Add Outfit!</div>
          <div className="press">
            <IconButton className={classes.largeIcon}>
              <AddBoxIcon className={classes.bIcon} onClick={() => { handelAddOutfit(productId); }} />
            </IconButton>
          </div>
          <Carousel
            responsive={responsive}
            className={classes.carousel}
          >

            {outfitStyle && outfitProduct ? outfitProduct.map((product, i) => (
              <OutfitList product={product} key={i} rating={props.rating} stars={props.stars} setOutfitProduct={props.setOutfitProduct} styles={outfitStyle[i] && outfitStyle[i].results[0].photos[0].thumbnail_url} />
            )) : null}
          </Carousel>
        </Container>
      </div>
    </>
  );
}

OutfitCarousel.propTypes = {
  rating: PropTypes.instanceOf(Array).isRequired,
  stars: PropTypes.instanceOf(Function).isRequired,
  setOutfitProduct: PropTypes.instanceOf(Function).isRequired,

};
export default OutfitCarousel;
