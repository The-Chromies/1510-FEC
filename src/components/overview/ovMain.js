import React, { useState, useEffect, useContext } from 'react';
import '../localStyles/ov.css';
import axios from 'axios';
import { Navbar, Container, Row, Col, Carousel } from 'react-bootstrap';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ImageGallery from './components/imageGallery';
import ProductInfo from './components/productInfo';
import StyleSelector from './components/styleSelector';
import AddToCart from './components/addToCart';
import { ContactContext } from '../../Global-Context';
import 'bootstrap/dist/css/bootstrap.min.css';

function Overview({ goToReviews }) {
  let {productId, setProductId, generateStarImage, revCount, ratingAvg} = useContext(ContactContext);

  const [ product, setProduct ] = useState(null);
  const [ styles, setStyles ] = useState(null);
  const [ selected, setSelected ] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sendClick = (e) => {
    clickTracker('Overview', e);
  };

  const getProduct = (id) => {
    axios.get(`http://localhost:3000/overview/product/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(error);
      })
  };

  const getStyles = (id) => {
    axios.get(`http://localhost:3000/overview/styles/${id}`)
      .then((res) => {
        setStyles(res.data);
        setSelected(res.data.results[0]);
      })
      .catch((err) => {
        console.log(error);
      })
  };

  useEffect(() => {
    getProduct(productId);
    getStyles(productId);
  }, []);

  const setSelectedStyle = (style) => {
    setSelected(style);
  };

  const resetIndex = (num) => {
    setCurrentIndex(num);
  };


  return (
    // pure css formatting
    // <React.Fragment>
    //   { styles ? <ImageGallery className="image-gallery" selected={selected}/> : null }
    //   { product && styles ? <ProductInfo className="product-info" product={product} styles={styles} selected={selected}/> : null }
    //   { styles ? <StyleSelector className="style-selector" styles={styles} setSelectedStyle={setSelectedStyle}/> : null }
    //   { styles ? <AddToCart className="add-to-cart" styles={styles} selected={selected}/> : null }
    // </React.Fragment>

    // react bootstrap formatting
    <Container>
      <Row className="overview-container">
        <Col xs={12} s={12} md={6} lg={8}>
          { selected ? <ImageGallery className="image-gallery" selected={selected} currentIndex={currentIndex} resetIndex={resetIndex} sendClick={sendClick}/> : null }
        </Col>
        <Col xs={12} s={12} md={6} lg={4}>
          { product && styles ? <ProductInfo className="product-info" product={product} styles={styles} selected={selected} generateStarImage={generateStarImage} sendClick={sendClick} goToReviews={goToReviews}/> : null }
          { styles ? <StyleSelector className="style-selector" styles={styles} setSelectedStyle={setSelectedStyle} resetIndex={resetIndex} sendClick={sendClick}/> : null }
          { styles ? <AddToCart className="add-to-cart" styles={styles} selected={selected} sendClick={sendClick}/> : null }
        </Col>
      </Row>
    </Container>
  );
}


/*
possible products:
18201
  related:
  18407
  18871
  18112

18078
  related:
  18079
  18080
  18085 - has > 7 thumbnail imgs
  18084

18445
  related:
  18331
  18405
  18632
  19074
  18191
  18978
  18416

18079
  related:
  18080
  18084
  18083
  18082

18080
  related:
  18083
  18086
  18084
  18079
  18078

*/


export default Overview;
