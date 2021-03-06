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
    console.log('revcount: ', revCount);
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
        // console.log(results);
        res.status(200).send(results);
      }
    });
  },
  createReview (req, res) {
    console.log(req.body);
    const data=req.body;
    // console.log('WE ARE HITTING THE CONTROLLER');
    query.getReviewMeta(data, (err, results) => {
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
