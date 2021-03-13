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
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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
    // position: 'absolute',
    // top: 50,

  },
  bIcon: {
    width: 100,
    height: 100,
    position: 'absolute',
    // top: 50,
    // alignItems: 'center',

  },
  boxing: {
    // display: 'flex',
    // flexWrap: 'nowrap',
    // padding: 0,
    // justifyContent: 'flex-start',
    // overflow: 'hidden',
    // flexDirection: 'row',
    // alignContent: 'flex-start',
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
  const {
    productId, setProductId, outfitStyle, getProduct, getStyle, handelAddOutfit, outfitProduct,
  } = useContext(ContactContext);
  const classes = useStyles();
  // console.log('hhhhhhhhhhhh', outfitStyle[0]);

  // let thumb = '';

  // const outfitListMap = [];
  // outfitProduct.map((product, i) => {
  //   if (outfitStyle[i]) {
  //     thumb = outfitStyle[i].results[0].photos[0].thumbnail_url;
  //   }
  //   outfitListMap.push(<OutfitList product={product} key={i} rating={props.rating} stars={props.stars} setOutfitProduct={props.setOutfitProduct} styles={thumb} />);
  //   return outfitListMap;
  // });

  return (
    <>
    <Container className={classes.boxing}>
          <div className="bname"> Add Outfit!</div>
      <div className="press">
        <IconButton className={classes.largeIcon}>
          <AddBoxIcon className={classes.bIcon} onClick={() => { handelAddOutfit(productId); }} />
        </IconButton>
      </div>
      <Carousel
        // className="relatedCarousel"
        responsive={responsive}
        className={classes.carousel}
      >

        {/* {outfitStyle && outfitProduct ? outfitListMap : null} */}
        {outfitStyle && outfitProduct ? outfitProduct.map((product, i) => (
          <OutfitList product={product} key={i} rating={props.rating} stars={props.stars} setOutfitProduct={props.setOutfitProduct} styles={outfitStyle[i] && outfitStyle[i].results[0].photos[0].thumbnail_url} />
        )) : null}
      </Carousel>
    </Container>
    </>
  );
}

OutfitCarousel.propTypes = {
  // relatedProducts: PropTypes.instanceOf(Array).isRequired,
  // product: PropTypes.instanceOf(Array).isRequired,
  // styles: PropTypes.instanceOf(String).isRequired,
  // productFeatures: PropTypes.instanceOf(Object).isRequired,
  rating: PropTypes.instanceOf(Array).isRequired,
  stars: PropTypes.instanceOf(Function).isRequired,
  setOutfitProduct: PropTypes.instanceOf(Function).isRequired,

};
export default OutfitCarousel;
