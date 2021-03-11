const axios = require('axios');
const config = require('../env/config.js');

const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/';

const queries = {
  addInteraction: (clickData, callback) => {
    const options = {
      method: 'post',
      url: `${apiUrl}interactions`,
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`,
        'Content-Type': 'application/json',
        Connection: 'keep-alive',
      },
      data: clickData,
    };

    axios(options).then((response) => {
      callback(null, response.data);
    }).catch((error) => {
      console.log(error);
    });
  },
};

module.exports.queries = queries;
