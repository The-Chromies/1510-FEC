/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */

import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PropTypes from 'prop-types';
import CompareModal from './CompareModal.js';
import { ContactContext } from '../../Global-Context';

// import Carousel from 'react-multi-carousel';
// import { Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 220,
    maxHeight: 380,
    minHeight: 380,
    display: 'inline-block',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

}));

export default function ProductCardRelated(props) {
  const {
    productId, setProductId,
  } = useContext(ContactContext);
  // console.log('CARDDDD', props.styles);
  // console.log('HEY', props.product);
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const handleCardClick = (id) => {
    setProductId(id);
    // console.log('CLICKING CARD');
  };
  // console.log('jahdisagdaydg', productId);

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          className="cardHeader"
          action={
            <CompareModal productFeatures={props.productFeatures} />
        }
        // title={props.product.category}
          subheader={props.product.category}
        />
        <CardMedia
          onClick={() => { handleCardClick(props.product.id); }}
          className={classes.media}
          image={props.styles}
          title={props.product.name}
        />
        <CardContent onClick={() => { handleCardClick(props.product.id); }}>
          <div className="cardInfo" variant="body2" color="textSecondary">
            <h4>{props.product.name}</h4>
            {props.product.description.substring(0, 100).concat('...')}
            <h5>{props.product.default_price}</h5>
            <div>{props.stars(props.rating)}</div>
          </div>
        </CardContent>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </Card>
    </>
  );
}

ProductCardRelated.propTypes = {
  // relatedProducts: PropTypes.instanceOf(Array).isRequired,
  product: PropTypes.instanceOf(Array).isRequired,
  styles: PropTypes.instanceOf(String).isRequired,
  productFeatures: PropTypes.instanceOf(Object).isRequired,
  rating: PropTypes.instanceOf(Number).isRequired,
  stars: PropTypes.instanceOf(Function).isRequired,
};

// action={
//   <IconButton aria-label="settings">
//     <CompareModal onClick={handleOpen}/>
//     <StarBorderIcon />
//   </IconButton>
// }
