var express = require('express');
var redis = require('redis');
var path = require("path");

var app = express();
var client = redis.createClient('redis://redis');

app.get('/count', function (req, res) {
	client.get('viewCount', function(err, reply) {
		res.send(reply)
	});
});

app.get('/clear', function (req, res) {
	client.set('viewCount', 0)
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname+'/index.html'))
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
