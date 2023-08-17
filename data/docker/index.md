# Docker
[12 factor app](https://12factor.net/)

```bash
docker system info
docker version

docker image     ls -a
docker container ls -a
docker volume    ls
docker network   ls

# swarm
docker service   ls
docker stack     ls
```


## images
```bash
docker image pull __id__


# delete all
docker image prune -a
docker container prune

docker system prune
docker system prune -a
```


## RUN
```bash
docker container run --rm hello-world


docker run -p 3000:80 asim3/notes:latest

docker run -it asim3/notes:latest /bin/sh -c "ls -al; ls -al /tmp"


docker container run --rm \
  -e AAAAAAAA_ENV=dddddddddddddddddddd \
  -e BBBBBBBBBBBB=cccccccccccccccccccc \
  -p 8000:80 \
  asim3/whoami:1.3
```


## shell
```bash
docker exec -it __image_id__ /bin/sh

docker exec -it 00a26dc8d0e1 /bin/sh -c "ls -al; pwd; cat /var/www/html/index.php"
```


## info
live containers statistics
```bash
docker container stats
```


## Logs
```bash
docker logs    __id__

docker inspect __id__
```
