const axios = require('axios');
const config = require('../env/config.js');

const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/';

const queries = {
  getProducts: (callback) => {
    const options = {
      method: 'get',
      url: `${apiUrl}products`,
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
  getQuestions: (id, callback) => {
    const options = {
      method: 'get',
      url: `${apiUrl}qa/questions?product_id=${id}&page=1&count=5`,
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
  getAnswers: (id, callback) => {
    const options = {
      method: 'get',
      url: `${apiUrl}qa/questions?product_id=${id}/answers&page=1&count=5`,
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`,
        'Content-Type': 'application/json',
        Connection: 'keep-alive',
      },
    };
    axios(option).then((response) => {
      callback(null, response.data);
    })
      .catch((error) => {
        console.log(error, null);
      });
  },
};

module.exports.queries = queries;
