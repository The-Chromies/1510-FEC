const models = require('../models');
// const axios = require('axios');
// const config = require('../env/config.js');

const query = models.questions.queries;
// const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/';

module.exports = {
  get: (req, res) => {
    query.getProducts((err, results) => {
      if (err) {
        console.log('Error found');
        console.log(err);
        res.status(404).send(err);
      } else {
        console.log('Success found');
        // console.log(results);
        res.status(200).send(results);
      }
    });
  },

  getQuestions(req, res) {
    console.log('IN CONTROLLER');
    console.log('THIS IS THE ID: ', req.params.id);
    query.getQuestions(req.params.id, (err, results) => {
      if (err) {
        console.log('FAILURE IN DA CONTROLLER');
        res.status(404).send(err);
      } else {
        console.log('SUCCESS IN DA CONTROLLER');
        // console.log(results);
        res.status(200).send(results);
      }
    });
    // res send stuff
    //   const options = {
    //     method: 'get',
    //     url: `${apiUrl}qa/questions?product_id=18201&page=1&count=5`,
    //     headers: {
    //       'User-Agent': 'request',
    //       Authorization: `${config.TOKEN}`,
    //       'Content-Type': 'application/json',
    //       Connection: 'keep-alive'
    //     },
    //   }
    //   axios(options).then((response) => {
    //     res.send(response.data);
    //   })
    //     .catch((error) => {
    //       console.err(err);
    //       res.status(500).send();
    //     });
    // }

    // need to get questions
  },
};
