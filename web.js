var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buf= new Buffer(256);
buf = fs.readFileSync('index.html'); //no encoding to return a buffer

var string= buf.toString('utf-8');

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
	response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
