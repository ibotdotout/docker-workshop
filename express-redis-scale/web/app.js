var express = require('express');
var redis = require('redis');
var path = require("path");

var app = express();
var client = redis.createClient('redis://redis');

app.get('/count', function (req, res) {
	client.get('viewCount', function(err, reply) {
		var now = Date.now() / 1000;
		res.status(200).json( { val : reply, now: now });
	})
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname+'/index.html'))
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
