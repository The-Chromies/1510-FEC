//Request Parsing
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

//Data
const gitToken = require('../env/config.js')
const queries = require('../database/index.js');

//Middleware Execution
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client'));
app.use(cors());


//Server Routing
app.get('/', function (req, res) {
});




//Closing Arguments
let port = 3001; //Not sure the right port

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = app
