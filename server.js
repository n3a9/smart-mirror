var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var livereload = require('livereload');
var statLocation = __dirname + '/public';

var port = process.env.PORT || 1337;

// HTTP request logger
app.use(morgan('dev'));

// static files location
app.use(express.static(statLocation));

// main page of app
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/index.html'));
});

server = livereload.createServer();
server.watch(statLocation);

app.listen(port);
console.log('Server started on localhost:' + port);