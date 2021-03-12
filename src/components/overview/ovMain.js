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
    productId, setProductId, generateStarImage, revCount, avgRating, clickTracker, localServer,
  } = useContext(ContactContext);

  const [product, setProduct] = useState(null);
  const [styles, setStyles] = useState(null);
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sendClick = (e) => {
    clickTracker('Overview', e);
  };

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

  useEffect(() => {
    getProduct(productId);
    getStyles(productId);
  }, []);

  useEffect(() => {
    if (productId) {
      getProduct(productId);
      getStyles(productId);
    }
  }, [productId]);

  const setSelectedStyle = (style) => {
    setSelected(style);
  };

  const resetIndex = (num) => {
    setCurrentIndex(num);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Borgin and Burkes</Navbar.Brand>
        <Nav className="mr-auto" />
      </Navbar>
      <Container>
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
