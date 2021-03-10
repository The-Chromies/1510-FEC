const models = require('../models');

const query = models.overview.queries;

module.exports = {
  getProduct: (req, res) => {
    query.getProduct(req.params.id, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  getStyles: (req, res) => {
    query.getStyles(req.params.id, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  addToCart: (req, res) => {
    query.addToCart(req.body, (err, message) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send(message);
      }
    });
  },
};
