var redis = require('redis');
var client = redis.createClient('redis://redis');


function inc()
{
	client.incr('viewCount', function(err, reply) {
		setTimeout(inc, process.env.TIMEOUT || 10000);
	});
}

inc()
