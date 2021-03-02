const axios = require('axios');
const config = require('../env/config.js');

const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/';

const queries = {
  // get a given product based on id - used for product information component
  getProducts: (id, callback) => {
    const options = {
      method: 'get',
      url: `${apiUrl}products`,
      // Add product id
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
  // get a given products style GET /products/:product_id/styles
  // used for product information component, style selector
  // component, add to cart component, & image gallery component
  getStyles: (id, callback) => {
    const options = {
      method: 'get',
      url: `${apiUrl}products${id}styles`,
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`,
        'Content-Type': 'application/json',
        Connection: 'keep-alive',
      },
    };
    axios(options).then((response) => {
      callback(null, response.data);
    }).catch((error) => {
      console.log(error, null);
    });
  },
};

module.exports.queries = queries;
