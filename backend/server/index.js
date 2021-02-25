//Request Parsing
const express = require('express');
let app = express();
const bodyParser = require('body-parser')

//Data
const gitToken = require('../env/config.js')
const atelier = require('../externalAPI/atelierAPI.js')
const data = require('../database/index.js');
const mongoose = require('mongoose');

//Middleware Execution
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client/dist'));


//Server Routing
app.get('/', function (req, res) {
});




//Closing Arguments
let port = 3000; //Not sure the right port

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

