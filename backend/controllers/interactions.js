const models = require('../models');

const query = models.interactions.queries;

module.exports = {
  post: (req, res) => {
    query.addInteraction(req.body, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send(results);
      }
    });
  },
};
