import React, { useState, useEffect } from 'react';
import '../localStyles/ov.css';
import axios from 'axios';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ImageGallery from './components/imageGallery';
import ProductInfo from './components/productInfo';
import StyleSelector from './components/styleSelector';
import AddToCart from './components/addToCart';

function Overview() {
  const [ product, setProduct] = useState({});

  const getProduct = () => {
    axios.get('http://localhost:3000/overview/product')
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(error);
      })
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="overview-container">
        <ImageGallery className="image-gallery" product={product}/>
        <ProductInfo className="product-info" product={product}/>
        <StyleSelector className="style-selector" product={product}/>
        <AddToCart className="add-to-cart" product={product}/>
      </div>
    </React.Fragment>
    // <Container>
    //   {/* Overview */}
    //   <Col><ImageGallery product={product}/></Col>
    //   <Col>
    //     <Row>
    //       <Col><ProductInfo product={product}/></Col>
    //     </Row>
    //     <Row>
    //       <StyleSelector product={product}/>
    //     </Row>
    //     <Row>
    //       <AddToCart product={product}/>
    //     </Row>
    //   </Col>
    // </Container>
  );
}

export default Overview;
