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
};
