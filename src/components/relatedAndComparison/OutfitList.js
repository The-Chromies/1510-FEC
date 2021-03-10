/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
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
  largeIcon: {
    width: 100,
    height: 100,
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 350,
    paddingRight: 50,

  },
  bIcon: {
    width: 100,
    height: 100,
    display: 'inline-block',

  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

export default function OutfitList(props) {
  // console.log('CARDDDD', props.styles);
  // console.log('HEY', props.styles[0].results)
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCardClick = () => {
    //* ****must route to overview with id of selected product*****
    console.log('CLICKING CARD');
  };

  const handelAddOutfit = () => {
    alert('You added to your outfit!');
  };

  const handleDelete = (card) => {
    const element = document.getElementById('card');
    element.parentNode.removeChild(element);
  };

  return (
    <>
      <div className="outfitContainer">
        <IconButton className={classes.largeIcon}>
          Add Outfit!
          <AddBoxIcon className={classes.bIcon} onClick={handelAddOutfit} />
        </IconButton>

        <Card id="card" className={classes.root}>
          <CardHeader
            className="cardHeader"
            action={(
              <IconButton>
                <DeleteForeverIcon onClick={handleDelete} />
              </IconButton>
            )}
        // title={props.product.category}
        // subheader={props.product.category}
            subheader="Product Category"
          />
          <CardMedia
            onClick={handleCardClick}
            className={classes.media}
            image={props.styles}
        // title={props.product.name}
            title="Product Name"
          />
          <CardContent onClick={handleCardClick}>
            <div className="cardInfo" variant="body2" color="textSecondary">
              <h4>Product Name</h4>
              {'Product Description'.substring(0, 100).concat('...')}
              <h5>default Price</h5>
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
};
