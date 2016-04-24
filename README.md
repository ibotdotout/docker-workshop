Docker Demo
------

1. `express-redis-simple`

show simple `docker-compose`

```sh
$ docker-compose build
$ docker-compose up -d
$ docker-compose log
$ docker-compose ps
$ docker-compose stop
$ docker-compose rm
```

2. `nginx-express-redis`
	
	show `docker-compose` network

```sh
$ docker-compose up -d
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
$ docker-compose up -d
$ docker-compose scale worker=5
$ docker-compose scale worker=50
$ docker-compose scale worker=25
```

### References
- [jpetazzo/orchestration-workshop](https://github.com/jpetazzo/orchestration-workshop) - [video](https://www.youtube.com/watch?v=qbIvUvwa6As)
