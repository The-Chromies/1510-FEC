/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../localStyles/rc.css';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Paper, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import RelatedList from './RelatedList';
import OutfitCarousel from './OutfitCarousel';
import { ContactContext } from '../../Global-Context';

const useStyles = makeStyles((theme) => ({
  largeIcon: {
    width: 100,
    height: 100,
    display: 'inline-block',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 100,
    // paddingLeft: 200,

  },
  bIcon: {
    width: 100,
    height: 100,
    display: 'inline-block',

  },

}));

function RelatedAndComparison() {
  const {
    localServer, productId, setProductId, revCount, avgRating, generateStarImage, outfitProduct, setOutfitProduct, outfitStyle, setOutfitStyle, getProduct, getStyle, handelAddOutfit,
  } = useContext(ContactContext);

  const classes = useStyles();

  const [relatedList, setRelatedList] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [styles, setStyles] = useState(null);
  // const [outfitProduct, setOutfitProduct] = useState(null);
  // const [outfitStyle, setOutfitStyle] = useState(null);

  useEffect(() => {
    console.log('relatedList useEffect', relatedList);
    if (relatedList.length > 0) {
      getRelatedAndStyle();
    }
  }, [relatedList]);

  const getRelatedProducts = (id) => {
    axios.get(`http://${localServer}:3000/related/relatedp/${id}`)
      .then((results) =>
      // results.data.forEach((id) => {
        //   // console.log('hahahaha', id);
        //   getProduct(id)
        // })
        setRelatedList(results.data))
      .catch((err) => {
        console.log('err in getRelatedProducts:', err);
      });
    // .then(()=> {
    //   // fufillPromise()
    //   console.log('TESTESTES', relatedList);
    // })
  };

  const getRelatedAndStyle = () => {
    // console.log('running function fufillPromise', relatedList);
    const productDataArr = relatedList.map((id) =>
    // console.log('id from promise array', id);
      axios.get(`http://${localServer}:3000/related/product/${id}`)
        .then((results) => results.data)
        .catch((err) => {
          console.log('promise array', err);
        }));
    const styleDataArr = relatedList.map((id) => axios.get(`http://${localServer}:3000/overview/styles/${id}`)
      .then((results) => results.data)
      .catch((err) => {
        console.log('STYLES ERROR', err);
      }));
    Promise.all(productDataArr)
      .then((results) => {
        console.log('TESTING:', results);
        setProductInfo(results);
      })
      .catch((err) => console.log('promiseAll err', err));
    Promise.all(styleDataArr)
      .then((results) => {
        console.log('TESTING STYLE', results);
        setStyles(results);
      })
      .catch((err) => {
        console.log('STYLE POMISE ALL ERROR', err);
      });
  };

  // const getProduct = (id) => {
  //   axios.get(`http://localhost:3000/related/product/${id}`)
  //     .then((results) => {
  //       console.log('OUTFITPRODUCT!!', results.data);
  //       // setRelatedList([results.data, ...relatedList]);
  //       setOutfitProduct(results.data);
  //     })
  //     .catch((err) => {
  //       console.log('err getting outfit product info:', err);
  //     });
  // };

  // const getStyle = (id) => {
  //   axios.get(`http://localhost:3000/overview/styles/${id}`)
  //     .then((results) => {
  //       setOutfitStyle(results.data);
  //     });
  // };

  useEffect(() => {
    getRelatedProducts(productId);
  }, []);

  // const handelAddOutfit = (id) => {
  //   // alert('You added to your outfit!');
  //   setProductId(id);
  //   getProduct(id);
  //   getStyle(id);
  // };
  // console.log('jahdisagdaydg', productId);

  return (
    <div className="related-comparison-container">
      Related And Comparison
      {relatedList && productInfo && styles
        ? <RelatedList className="centerList" relatedProducts={relatedList} productInfo={productInfo} styles={styles} rating={avgRating} stars={generateStarImage} />
        : null}

      {/* <IconButton className={classes.largeIcon}>
        Add Outfit!
        <AddBoxIcon className={classes.bIcon} onClick={() => { handelAddOutfit(productId); }} />
      </IconButton> */}

      <OutfitCarousel rating={avgRating} stars={generateStarImage} setOutfitProduct={setOutfitProduct} />
    </div>
  );
}

export default RelatedAndComparison;
// styles={outfitStyle.results[0].photos[0].thumbnail_url}
