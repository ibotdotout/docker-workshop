var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.send('hello')
});

app.get('/docker', function (req, res) {
	res.send('Edit HERE')
});

app.get('/hi', function (req, res) {
	res.send('Edit HERE')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app
