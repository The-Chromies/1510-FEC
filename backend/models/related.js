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
            console.log('success')
            callback(null, response.data)

        }).catch( (error) => {
            callback(error, null)
        }
        )
    }
}


//Initial Test
// queries.getProducts((result) => {console.log(result)});
module.exports.queries = queries;