var models = require('../models');

const query = models.overview.queries

module.exports = {
    post: function (req, res) {
        query.addInteraction(function(err, results) {
        if (err) {
            console.log('Error found')
            console.log(err)
            res.status(400).send(err)
        } else {
            console.log('Success found')
            console.log(results)
            res.status(201).send(results);
        }
      });
    }
};