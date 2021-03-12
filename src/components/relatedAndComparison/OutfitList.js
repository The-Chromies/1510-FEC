/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { ContactContext } from '../../Global-Context';

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

export default function OutfitList(props) {
  console.log('CARDDDD', props.styles);
  // console.log('HEY', props.styles[0].results)

  const {
    productId, setProductId, outfitStyle, getProduct, getStyle, handelAddOutfit, outfitProduct, setOutfitProduct, setOutfitStyle,
  } = useContext(ContactContext);
  const classes = useStyles();

  const handleCardClick = () => {
    //* ****must route to overview with id of selected product*****
    console.log('CLICKING CARD');
  };

  const handleDelete = () => {
    const outfitProductCopy = [...outfitProduct];
    let index;
    if (outfitProductCopy.indexOf(props.product) > -1) {
      index = outfitProductCopy.indexOf(props.product);
    }
    outfitProductCopy.splice(index, 1);
    // console.log('INDEX PRODUCT', index);
    setOutfitProduct(outfitProductCopy);
    const outfitStyleCopy = [...outfitStyle];
    outfitStyleCopy.splice(index, 1);
    setOutfitStyle(outfitStyleCopy);
  };

  console.log('KEYKEYKEY', props.product);
  return (
    <>
      <div className="press">
        <Card className={classes.root}>
          <CardHeader
            className="cardHeader"
            action={(
              <IconButton>
                <DeleteForeverIcon onClick={() => { handleDelete(); }} />
              </IconButton>
            )}
        // title={props.product.category}
            subheader={props.product.category}
          />
          <CardMedia
            onClick={handleCardClick}
            className={classes.media}
            image={props.styles}
            title={props.product.name}
          />
          <CardContent onClick={handleCardClick}>
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
      </div>
    </>
  );
}

OutfitList.propTypes = {
  // relatedProducts: PropTypes.instanceOf(Array).isRequired,
  styles: PropTypes.instanceOf(Array).isRequired,
  rating: PropTypes.instanceOf(Array).isRequired,
  stars: PropTypes.instanceOf(Function).isRequired,
  product: PropTypes.instanceOf(Array).isRequired,
  // setOutfitProduct: PropTypes.instanceOf(Function).isRequired,

};
