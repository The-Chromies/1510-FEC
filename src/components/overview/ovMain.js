import React, { useState, useEffect } from 'react';
import '../localStyles/ov.css';
import axios from 'axios';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ImageGallery from './components/imageGallery';
import ProductInfo from './components/productInfo';
import StyleSelector from './components/styleSelector';
import AddToCart from './components/addToCart';
import 'bootstrap/dist/css/bootstrap.min.css';

function Overview() {
  const [ product, setProduct ] = useState(null);
  const [ styles, setStyles ] = useState(null);

  const getProduct = () => {
    axios.get('http://localhost:3000/overview/product/18201')
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(error);
      })
  };

  const getStyles = () => {
    axios.get('http://localhost:3000/overview/styles/18201')
      .then((res) => {
        setStyles(res.data);
      })
      .catch((err) => {
        console.log(error);
      })
  };

  useEffect(() => {
    getProduct();
    getStyles();
  }, []);


  return (
    <Container>
      <Row className="overview-container">
        <Col xs={4} md={7}>
          { styles ? <ImageGallery className="image-gallery" styles={styles}/> : null }
        </Col>
        <Col xs={3} md={5}>
          { product && styles ? <ProductInfo className="product-info" product={product} styles={styles}/> : null }
          { styles ? <StyleSelector className="style-selector" styles={styles}/> : null }
          { styles ? <AddToCart className="add-to-cart" styles={styles}/> : null }
        </Col>
      </Row>
    </Container>
  );
}


export default Overview;
