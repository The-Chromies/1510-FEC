var models = require('../models');

const query = models.ratings.queries

module.exports = {
    getProducts: function (req, res) {
        query.getProducts(function(err, results) {
        if (err) {
            console.log('Error found')
            console.log(err)
            res.status(404).send(err)
        } else {
            console.log('Success found')
            console.log(results)
            res.status(200).send(results);
        }
      });
    },
    getReviews: function (req, res) {
        query.getReviews(function(err, results) {
        if (err) {
            console.log('Error found')
            console.log(err)
            res.status(404).send(err)
        } else {
            console.log('Success found')
            console.log(results)
            res.status(200).send(results);
        }
      });
    }
};
