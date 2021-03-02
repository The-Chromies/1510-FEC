const models = require('../models');

const query = models.questions.queries;

module.exports = {
  get: (req, res) => {
    query.getProducts((err, results) => {
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
