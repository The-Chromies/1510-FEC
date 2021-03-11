/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Paper, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import OutfitList from './OutfitList';
import { ContactContext } from '../../Global-Context';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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

const useStyles = makeStyles((theme) => ({
  largeIcon: {
    width: 100,
    height: 100,
    // display: 'inline-block',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 100,
    // paddingLeft: 200,

  },
  bIcon: {
    width: 100,
    height: 100,
    // display: 'inline-block',

  },

}));

function OutfitCarousel(props) {
  const {
    productId, setProductId, outfitStyle, getProduct, getStyle, handelAddOutfit, outfitProduct,
  } = useContext(ContactContext);
  const classes = useStyles();
  console.log('hhhhhhhhhhhh', outfitStyle[0]);
  return (
    <Carousel
      className="relatedCarousel"
      responsive={responsive}
    >
      <IconButton className={classes.largeIcon}>
        Add Outfit!
        <AddBoxIcon className={classes.bIcon} onClick={() => { handelAddOutfit(productId); }} />
      </IconButton>

      {outfitStyle && outfitProduct ? outfitProduct.map((product, i) => (
        <OutfitList product={product} key={i} rating={props.rating} stars={props.stars} setOutfitProduct={props.setOutfitProduct} styles={outfitStyle[i].results[0].photos[0].thumbnail_url} />
      )) : null}
    </Carousel>
  );
}

OutfitCarousel.propTypes = {
  // relatedProducts: PropTypes.instanceOf(Array).isRequired,
  product: PropTypes.instanceOf(Array).isRequired,
  styles: PropTypes.instanceOf(String).isRequired,
  // productFeatures: PropTypes.instanceOf(Object).isRequired,
  rating: PropTypes.instanceOf(Array).isRequired,
  stars: PropTypes.instanceOf(Function).isRequired,
  setOutfitProduct: PropTypes.instanceOf(Function).isRequired,

};
export default OutfitCarousel;
