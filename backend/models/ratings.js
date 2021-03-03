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
  getReviews: (callback) => {
    // console.log('WE ARE HITTING THE GET REVIEWS');
    const options = {
      method: 'get',
      url: `${apiUrl}reviews?product_id=18445&page=1&count=10&sort=helpful`,
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`,
        'Content-Type': 'application/json',
        Connection: 'keep-alive',
      },
    };

    axios(options).then((response) => {
    //   console.log('inCatch success models');
      callback(null, response.data);
    })
      .catch((error) => {
        // console.log('inCatch Error models');
        console.log(error, null);
      });
  },
  getReviewMeta: (callback) => {
    // console.log('WE ARE HITTING THE GET REVIEWS');
    const options = {
      method: 'get',
      url: `${apiUrl}reviews/meta?product_id=18445`,
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`,
        'Content-Type': 'application/json',
        Connection: 'keep-alive',
      },
    };

    axios(options).then((response) => {
    //   console.log('inCatch success models');
      const ratingArray = response.data.ratings;
      const keyArray = Object.keys(ratingArray);
      let sumValue = 0;
      let revCount = 0;
      for (let i = 0; i < keyArray.length; i += 1) {
        revCount += Number(ratingArray[keyArray[i]]);
        sumValue += Number(keyArray[i]) * Number(ratingArray[keyArray[i]]);
      }
      response.data.revCount = revCount;
      response.data.ratingAvg = (Math.round((sumValue / revCount) * 4) / 4).toFixed(2);
      callback(null, response.data);
    })
      .catch((error) => {
        // console.log('inCatch Error models');
        console.log(error, null);
      });
  },
};

module.exports.queries = queries;
