/* eslint-disable max-len */
const axios = require('axios');
const config = require('../env/config.js');

const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/';

const queries = {
  createReview: (dataBody, callback) => {
    const options = {
      method: 'post',
      url: `${apiUrl}reviews`,
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`,
        'Content-Type': 'application/json',
        Connection: 'keep-alive',
      },
      data: dataBody,
    };

    axios(options).then((response) => {
      callback(null, response.data);
    })
      .catch((error) => {
        console.log(error, null);
      });
  },
  putHelpful: (id, callback) => {
    const options = {
      method: 'put',
      url: `${apiUrl}reviews/${id}/helpful`,
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
  putReport: (id, callback) => {
    const options = {
      method: 'put',
      url: `${apiUrl}reviews/${id}/report`,
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
  getReviews: (id, sortKey, revCount, callback) => {
    // console.log('WE ARE HITTING THE GET REVIEWS');
    console.log(`In Get Reviews with id: ${id} and sortKey: ${sortKey} and count=${revCount}`);
    const options = {
      method: 'get',
      url: `${apiUrl}reviews?product_id=${id}&page=1&count=${revCount}&sort=${sortKey}`,
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
        console.log('inCatch Error models');
        console.log(error, null);
      });
  },
  getReviewMeta: (id, callback) => {
    // console.log('InFindMeta server');
    // console.log(id);
    // console.log(`${apiUrl}reviews/meta?product_id=${id}`)
    // console.log('WE ARE HITTING THE GET REVIEWS');
    const options = {
      method: 'get',
      url: `${apiUrl}reviews/meta?product_id=${id}`,
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`,
        'Content-Type': 'application/json',
        Connection: 'keep-alive',
      },
    };

    axios(options).then((response) => {
      // console.log('InFindMeta success')
    //   console.log('inCatch success models');
      console.log('InFindMeta success');
      //   console.log('inCatch success models');
      const ratingArray = response.data.ratings;
      const keyArray = Object.keys(ratingArray);
      let sumValue = 0;
      let revCount = 0;
      for (let i = 0; i < keyArray.length; i += 1) {
        revCount += Number(ratingArray[keyArray[i]]);
        sumValue += Number(keyArray[i]) * Number(ratingArray[keyArray[i]]);
      }
      console.log('meta revcount: ', revCount);
      console.log('meta sumValue: ', sumValue);
      response.data.revCount = revCount;
      response.data.ratingAvg = revCount > 0 ? ((Math.round((sumValue / revCount) * 10) / 10).toFixed(2)) : 0;
      callback(null, response.data);
    })
      .catch((error) => {
        // console.log('inCatch Error models');
        console.log(error, null);
      });
  },
};

module.exports.queries = queries;
