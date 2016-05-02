Docker Demo -  [Talks](http://dev.im-bot.com/talks/docker-psu/)
------

1. `express-redis-simple`

	show simple `docker-compose`

	```sh
	$ export DOCKER_IP=192.168.99.100

	$ docker-compose build
	$ docker-compose up -d

	$ open http://$DOCKER_IP:3000

	$ docker-compose log
	$ docker-compose ps
	$ docker-compose stop
	$ docker-compose rm
	```

2. `nginx-express-redis`

	show `docker-compose` network, `docker` port mapping

	```sh
	$ export DOCKER_IP=192.168.99.100

	$ docker-compose up -d

	# should not found on port 3000, work on 8080
	$ open http://$DOCKER_IP:3000
	$ open http://$DOCKER_IP:8080

	$ docker-compose exec nginx ping web
	$ docker-compose exec nginx ping redis
	$ docker-compose exec web ping nginx
	$ docker-compose exec web ping redis
	$ docker-compose exec redis ping nginx
	$ docker-compose exec redis ping web
	```

3. `express-redis-scale`, Inspirations from [jpetazzo/dockercoins](https://github.com/jpetazzo/orchestration-workshop/tree/master/dockercoins)

	show `docker-compose` scale

	```sh
	$ export DOCKER_IP=192.168.99.100

	$ docker-compose up -d

	$ open http://$DOCKER_IP:3000

	$ docker-compose scale worker=5
	$ docker-compose scale worker=50
	$ docker-compose scale worker=25
	```

4. `express-mongo`

	show multi `docker-compose` file and `docker volume`

	```sh
	$ export DOCKER_IP=192.168.99.100
	$ docker-compose up -d

	# open http://$DOCKER_IP:3000
	# add some tweets
	# open http://$DOCKER_IP:3000/tweets

	$ docker-compose stop
	$ docker-compose rm

	$ docker-compose up -d
	# Is data still exist ?
	# open http://$DOCKER_IP:3000/tweets

	$ docker-compose stop
	$ docker-compose rm
	```

	```sh
	# try other compose
	$ docker-compose -f mongo2.yml up -d

	# open http://$DOCKER_IP:3000
	# add some tweets
	# open http://$DOCKER_IP:3000/tweets

	$ docker-compose stop
	$ docker-compose rm

	$ docker-compose up -d
	# Is data still exist ?
	# open http://$DOCKER_IP:3000/tweets
	```

5. `express-tdd`

	show tdd in `docker`

	```sh
	$ docker-compose build
	$ docker-compose run --rm npm test

	# edit file

	$ docker-compose build
	$ docker-compose run --rm npm test

	# try mount volume
	```

### References
- [jpetazzo/orchestration-workshop](https://github.com/jpetazzo/orchestration-workshop) - [video](https://www.youtube.com/watch?v=qbIvUvwa6As)
