/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-undef */
const express = require('express');
const request = require('supertest');
const cors = require('cors');
const routes = require('../routes.js');

// create an instance of an express app
const app = express();
// set up routes
app.use('/', routes);
app.use(cors());
app.use(express.json());

// test for reviews
describe('Get all reviews', () => {
  it('Should get all the reviews given a good GET request', async () => {
    await request(app)
      .get('/ratings/product')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
  it('Should return a 404 status code given a bad GET request', async () => {
    await request(app)
      .get('/ratings/874khf9')
      .expect(404);
  });
//   it('Should return correct review data', async () => {
//     const { body } = await request(app)
//       .get('/ratings/reviews');
//     expect(body).toEqual();
//   });
});

// test for retrieving a given product
describe('Get a given product from overview endpoint', () => {
  it('Should get all the reviews given a good GET request', async () => {
    await request(app)
      .get('/overview/product/18078')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
  it('Should return a 404 status code given a bad GET request', async () => {
    await request(app)
      .get('/overview/prosdtdfct/dg83h8')
      .expect(404);
  });
  it('Should return correct review data', async () => {
    const { body } = await request(app)
      .get('/overview/product/18078');
    expect(body).toHaveProperty('category');
    expect(body).toHaveProperty('name');
    expect(body).toHaveProperty('description');
    expect(body).toHaveProperty('default_price');
  });
});

// test for retrieving a given product's style
describe("Get a given product's style from overview endpoint", () => {
  it('Should get all the reviews given a good GET request', async () => {
    await request(app)
      .get('/overview/styles/18201')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
  it('Should return a 404 status code given a bad GET request', async () => {
    await request(app)
      .get('/overview/styg83h8/18201')
      .expect(404);
  });
  it('Should return correct review data', async () => {
    const { body } = await request(app)
      .get('/overview/styles/18201');
    expect(body).toHaveProperty('results');
    expect(body.results[0]).toHaveProperty('name');
    expect(body.results[0]).toHaveProperty('original_price');
    expect(body.results[0]).toHaveProperty('sale_price');
    expect(body.results[0]).toHaveProperty('photos');
    expect(body.results[0].photos[0]).toHaveProperty('thumbnail_url');
    expect(body.results[0].photos[0]).toHaveProperty('url');
    expect(body.results[0].skus['565825']).toHaveProperty('quantity');
    expect(body.results[0].skus['565825']).toHaveProperty('size');
  });
});

// ADD TESTS FOR OVERVIEW POST ENDPOINT (i.e. add to cart)

// test for interactions endpoint
// interactions testing error: timeout err w/ no res const & reference error w/ res const
// come back to check req.body to ensure correct data is sent to API
describe('Interactions endpoint', () => {
  it('Should return a 201 status code given a good POST request', async () => {
    await request(app)
      .post('/interactions', { element: 'review-link', widget: 'Overview', time: '15:19:50 GMT-0700 (Mountain Standard Time)' })
      .type('form')
      // .send({ element: 'review-link', widget: 'Overview', time: '15:19:50 GMT-0700 (Mountain Standard Time)' })
      .expect(201);
    // .expect(res.statusCode).toEqual(201);
  });
//   it('Should return a 400 status code given a bad POST request', async () => {
//     await request(app)
//       .post('/interactions')
//       .send({ element: 12345, widget: 'Overview', time: '15:19:50 GMT-0700 (Mountain Standard Time)' })
//       .expect(400);
//   });
//   it('Should return a created message for a good POST request', async () => {
//     const { body } = await request(app)
//       .post('/interactions');
//     expect(body).toHaveProperty('category');
//   });
});
