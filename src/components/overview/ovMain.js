/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable import/named */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import '../localStyles/ov.css';
import axios from 'axios';
import {
  Navbar, Nav, Container, Row, Col, Carousel,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import ImageGallery from './components/imageGallery';
import ProductInfo from './components/productInfo';
import StyleSelector from './components/styleSelector';
import AddToCart from './components/addToCart';
import { ContactContext } from '../../Global-Context';
import 'bootstrap/dist/css/bootstrap.min.css';

function Overview({ goToReviews }) {
  const {
    productId, setProductId, clickTracker, localServer,
  } = useContext(ContactContext);

  const [product, setProduct] = useState(null);
  const [styles, setStyles] = useState(null);
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // global click tracking string for Overview
  const sendClick = (e) => {
    clickTracker('Overview', e);
  };

  // get given product & style data
  const getProduct = (id) => {
    axios.get(`http://${localServer}:3000/overview/product/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getStyles = (id) => {
    axios.get(`http://${localServer}:3000/overview/styles/${id}`)
      .then((res) => {
        setStyles(res.data);
        setSelected(res.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // initial product
  useEffect(() => {
    getProduct(productId);
    getStyles(productId);
  }, []);

  // update product & style when new productId updates
  useEffect(() => {
    getProduct(productId);
    getStyles(productId);
  }, [productId]);

  // set selected style on click of new style
  const setSelectedStyle = (style) => {
    setSelected(style);
  };

  // reset image index for main carousel
  const resetIndex = (num) => {
    setCurrentIndex(num);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>The Chromies</Navbar.Brand>
      </Navbar>
      <Container>
        <marquee>SITE-WIDE ANNOUNCEMENT: GOLDENROD, MAROON, AND CHARTREUSE MORNING JOGGERS ON SALE!</marquee>
        <Row className="overview-container">
          <Col xs={12} s={12} md={6} lg={8}>
            { selected ? <ImageGallery className="image-gallery" selected={selected} currentIndex={currentIndex} resetIndex={resetIndex} sendClick={sendClick} /> : null }
          </Col>
          <Col xs={12} s={12} md={6} lg={4}>
            { styles && product ? <ProductInfo className="product-info" product={product} selected={selected} sendClick={sendClick} goToReviews={goToReviews} /> : null }
            { styles ? <StyleSelector className="style-selector" styles={styles} setSelectedStyle={setSelectedStyle} resetIndex={resetIndex} sendClick={sendClick} /> : null }
            { styles ? <AddToCart className="add-to-cart" selected={selected} sendClick={sendClick} /> : null }
          </Col>
        </Row>
      </Container>
    </>
  );
}

Overview.propTypes = {
  goToReviews: PropTypes.instanceOf(Function).isRequired,
};

export default Overview;
