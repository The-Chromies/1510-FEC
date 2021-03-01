const config = require('../env/config.js');
const axios = require('axios')

const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/'

let queries = {
    // get a given product based on id - used for product information component
    getProducts: function (id, callback) {
        let options = {
            method:'get',
            // add product id
            url: apiUrl+'products'+id,
            headers: {
            'User-Agent': 'request',
            'Authorization': `${config.TOKEN}`,
            'Content-Type': `application/json`,
            'Connection': 'keep-alive'
            }
        };
        //console.log(options.url);
        axios(options).then((response) => {
            callback(response.data)
        }).catch( (error) => {
            console.log(error)
        }
        )
    },
    // get a given products style GET /products/:product_id/styles
    // used for product information component, style selector component, add to cart component, & image gallery component
    getStyles: function (id, callback) {
        let options = {
            method: 'get',
            url: apiUrl+'products'+id+'styles',
            headers: {
            'User-Agent': 'request',
            'Authorization': `${config.TOKEN}`,
            'Content-Type': `application/json`,
            'Connection': 'keep-alive'
            }
        };
        axios(options).then((response) => {
            callback(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }
}


module.exports.queries = queries;