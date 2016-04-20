// NPM Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); 

// Define Server and database
var app = express();
var port = 8000;
var db = require(path.join(__dirname, './dbConfig.js'));

// Pages and Files
var staticFiles = '/../client';
var landingPage = '/../client/pages/index.html';
var communityPage = '/../client/pages/infoPage.html';

// Serve Static Files
app.use(express.static(path.join(__dirname + staticFiles)));

// Routing between Pages

// Sign-up
app.use('/', bodyParser.urlencoded());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + landingPage));
})

app.post('/', function(req, res) {
  console.log('===============', req.body);
  res.sendStatus(200);
})

// Community
app.get('/community', function(req, res) {
  res.sendFile(path.join(__dirname + communityPage));
})

app.get('')
// Connect to server
app.listen(port, function() {
  console.log('Connected to server.  Listening in on port ', port)
});
