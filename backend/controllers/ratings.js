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
    query.getReviews((err, results) => {
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
};
