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

docker system prune --all --force --volumes
```


## RUN
```bash
# 3.31 MB
docker container run -it --rm alpine:3.20 /bin/sh

# 28.17 MB
docker container run -it --rm ubuntu:22.04 /bin/bash
docker container run -it --rm ubuntu:22.04 /bin/bash -c "apt -y update && apt -y install net-tools dnsutils iputils-ping nmap && /bin/bash"

# 48.23 MB
docker container run -it --rm debian:bookworm /bin/bash

# 61.59 MB
docker container run -it --rm amazonlinux:2 /bin/bash

# 144.19 MB
docker container run -it --rm archlinux:base /bin/bash

# 68.46 MB
docker container run -it --rm almalinux:8 /bin/bash


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
