const config = require('../env/config.js');
const axios = require('axios')

const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/'

let queries = {
    addInteraction: function (callback) {
        let options = {
            method:'post',
            url: apiUrl+'products',
            headers: {
            'User-Agent': 'request',
            'Authorization': `${config.TOKEN}`,
            'Content-Type': `application/json`,
            'Connection': 'keep-alive'
            }
        };

        axios(options).then((response) => {
            callback(response)

        }).catch( (error) => {
            console.log(error)
        }
        )
    }
}


module.exports.queries = queries;