var express = require('express')
var path = require("path");
var bodyParser = require('body-parser');


// Mongoose
var mongoose = require('mongoose')
mongoose.connect('mongodb://mongo/test')

var tweetSchema = new mongoose.Schema({
	tweet: String
})
var Tweet = mongoose.model('Tweet', tweetSchema)


// Express
var app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname+'/index.html'))
});

app.post('/tweets', function (req, res) {
	var tweet = req.body.tweet
	var newTweet = Tweet({tweet: tweet})
	newTweet.save(function(err) {
		if (err) throw err;

		console.log('Tweet created!');
		res.status(200).json({success: true})
	})
})

app.get('/tweets', function (req, res) {
	Tweet.find({}, function(err, tweets) {
		if (err) throw err;

		console.log('List Tweets');
		res.status(200).json({success: true, tweets: tweets})
	});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
