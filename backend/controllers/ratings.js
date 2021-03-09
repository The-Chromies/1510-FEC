const { isUndefined } = require('underscore');
const models = require('../models');

const query = models.ratings.queries;

module.exports = {
  getProducts(req, res) {
    query.getProducts((err, results) => {
      if (err) {
        // console.log('Error found');
        // console.log(err);
        res.status(404).send(err);
      } else {
        // console.log('Success found');
        // console.log(results);
        res.status(200).send(results);
      }
    });
  },
  getReviews(req, res) {
    // console.log('WE ARE HITTING THE CONTROLLER');
    const { id } = req.params;
    const { sortKey } = req.params;
    const { revCount } = req.params;
    // console.log('revcount: ', revCount);
    query.getReviews(id, sortKey, revCount, (err, results) => {
      if (err) {
        // console.log('Error found');
        // console.log(err);
        res.status(404).send(err);
      } else {
        // console.log('Success found');
        // console.log(results);
        res.status(200).send(results);
      }
    });
  },
  getReviewMeta(req, res) {
    const { id } = req.params;
    // console.log('WE ARE HITTING THE CONTROLLER');
    query.getReviewMeta(id, (err, results) => {
      if (err) {
        // console.log('Error found');
        // console.log(err);
        res.status(404).send(err);
      } else {
        // console.log('Success found');
        console.log(results);
        res.status(200).send(results);
      }
    });
  },
  putHelpful(req, res) {
    console.log('Adding Helpful');
    const { id } = req.params;
    query.putHelpful(id, (err, results) => {
      if (err) {
        // console.log('Error found');
        // console.log(err);
        // res.status(404).send(err);
      } else {
        // console.log('Success found');
        // console.log(results);
        res.status(200).send(results);
      }
    });
  },
  putReport(req, res) {
    console.log('Adding Report');
    const { id } = req.params;
    query.putReport(id, (err, results) => {
      if (err) {
        // console.log('Error found');
        // console.log(err);
        // res.status(404).send(err);
      } else {
        // console.log('Success found');
        // console.log(results);
        res.status(200).send(results);
      }
    });
  },
  createReview(req, res) {
    console.log('Creating Review: ');
    console.log(req.body);
    const data = {
      product_id: Number(req.body.product_id),
      rating: Number(req.body.rating),
      summary: req.body.summary,
      body: req.body.body,
      recommend: req.body.recommend,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
      characteristics: req.body.characteristics,
    };
    // console.log('WE ARE HITTING THE CONTROLLER');
    query.createReview(data, (err, results) => {
      if (err) {
        // console.log('Error found');
        // console.log(err);
        // res.status(404).send(err);
      } else {
        // console.log('Success found');
        // console.log(results);
        res.status(200).send(results);
      }
    });
  },
};
