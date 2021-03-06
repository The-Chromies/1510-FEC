const axios = require('axios');
const config = require('../env/config.js');

const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/';

const queries = {
  getProduct: (id, callback) => {
    const options = {
      method: 'get',
      url: `${apiUrl}products/${id}`,
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`,
        'Content-Type': 'application/json',
        Connection: 'keep-alive',
      },
    };

    axios(options).then((response) => {
      callback(null, response.data);
    })
      .catch((error) => {
        console.log(error, null);
      });
  },



  getRelated: (id, cb) => {
    const options = {
      method: 'get',
      url: `${apiUrl}products/${id}/related`,
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`,
        'Content-Type': 'application/json',
        Connection: 'keep-alive',
      },
    };

    axios(options).then((response) => {
      cb(null, response.data);
    }).catch((err) => {
      console.log(err, null);
    });
  },
};

module.exports.queries = queries;
