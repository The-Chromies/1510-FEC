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

function Overview({ goToReviews, productId }) {
  const [ product, setProduct ] = useState(null);
  const [ styles, setStyles ] = useState(null);
  const [ selected, setSelected ] = useState(null);

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
          { selected ? <ImageGallery className="image-gallery" selected={selected}/> : null }
        </Col>
        <Col xs={12} s={12} md={6} lg={4}>
          { product && styles ? <ProductInfo className="product-info" product={product} styles={styles} selected={selected} goToReviews={goToReviews}/> : null }
          { styles ? <StyleSelector className="style-selector" styles={styles} setSelectedStyle={setSelectedStyle}/> : null }
          { styles ? <AddToCart className="add-to-cart" styles={styles} selected={selected}/> : null }
        </Col>
      </Row>
    </Container>
  );
}


export default Overview;
