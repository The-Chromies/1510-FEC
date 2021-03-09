const models = require('../models');

const query = models.interactions.queries;

module.exports = {
  post: (req, res) => {
    query.addInteraction(req.body, (err, results) => {
      if (err) {
        console.log('Error found in click tracking');
        console.log(err);
        res.status(400).send(err);
      } else {
        console.log('Success stored click interaction!');
        console.log(results);
        res.status(201).send(results);
      }
    });
  },
};
