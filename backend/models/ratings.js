
const config = require('../env/config.js');
const axios = require('axios')

const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/'

let queries = {
    getProducts: function (callback) {
        let options = {
            method:'get',
            url: apiUrl+'products',
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
    },
    getReviews: function (callback) {
        let options = {
            method:'get',
            url: apiUrl+'reviews?product_id=18445&page=1&count=10&sort=helpful',
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
}


module.exports.queries = queries;