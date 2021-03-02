const models = require('../models');

const query = models.overview.queries;

module.exports = {
  getProduct: (req, res) => {
    query.getProducts(18201, (err, results) => {
      if (err) {
        console.log('Error found');
        console.log(err);
        res.status(404).send(err);
      } else {
        console.log('Success found');
        console.log(results);
        res.status(200).send(results);
      }
    });
  },
  getStyles: (req, res) => {
    query.getStyles(18201, (err, results) => {
      if (err) {
        console.log('Error found');
        console.log(err);
        res.status(404).send(err);
      } else {
        console.log('Success found');
        console.log(results);
        res.status(200).send(results);
      }
    });
  },
};
