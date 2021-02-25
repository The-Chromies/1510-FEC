const axios = require('axios');
const config = require('../env/config.js');

let getProducts = (callback) => {
  let options = {
    method:'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products',
    headers: {
      'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`,
      'Content-Type': `application/json`,
      'Connection': 'keep-alive'
    }
  };

  axios(options).then((response) => {
    callback(response.data)

  }).catch( (error) => {
    console.log(error)
  }
  )

}

getProducts((result) => {console.log(result)});

module.exports.getProducts = getProducts;
