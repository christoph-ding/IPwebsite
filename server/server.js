// NPM Dependencies
var express = require('express');
var path = require('path');

// Define Server
var app = express();
var port = 8000;

// Pages and Files
var staticFiles = '/../client';
var landingPage = '/../client/pages/index.html';

// Serve Static Files
app.use(express.static(path.join(__dirname + staticFiles)));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + landingPage));
})

// Connect to server
app.listen(port, function() {
  console.log('Connected to server.  Listening in on port ', port)
});
