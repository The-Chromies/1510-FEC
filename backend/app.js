//Request Parsing
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

//Data
const gitToken = require('./env/config.js')

//Middleware Execution
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client'));
app.use(cors());

// Server Port
let port = 3001
app.set('port', port);

// Router
var router = require('./routes.js');


// Set up our routes
app.use('/', router);


app.listen(port, function() {
    console.log(`listening on port ${port}`);
  });



// // If we are being run directly, run the server.
// if (!module.parent) {
//   app.listen(app.get('port'));
//   console.log('Listening on', app.get('port'));
// }


// module.exports.app = app;