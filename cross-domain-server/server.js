var express = require('express');
var app = express();
var port = 3000;

// Only google.com is allowed to send CORS request
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "google.com");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, function() {
	console.log('Server listening on port:', port);
});
