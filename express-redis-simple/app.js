var express = require('express');
var redis = require('redis');

var app = express();
var client = redis.createClient('redis://redis');

app.get('/', function (req, res) {
	client.incr('viewCount', function(err, reply) {
		res.send('views: ' + reply)
	});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
