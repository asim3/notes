# Docker - Community
[12 factor app](https://12factor.net/)

```bash
sudo docker system info
sudo docker version

sudo docker image     ls -a
sudo docker container ls -a
sudo docker volume    ls
sudo docker network   ls

# swarm
sudo docker service   ls
sudo docker stack     ls
```


## Images
Pull an image from a registry or a repository
```bash
sudo docker image pull __id__
sudo docker image rm   __id__
```


## Containers
```bash
sudo docker container run     hello-world
# access command line
sudo docker container run -it hello-world

# Overwrite the default ENTRYPOINT of the image
sudo docker container run -it --entrypoint=/bin/sh   alpine
sudo docker container run -it --entrypoint=/bin/ls   alpine

# set environment
sudo docker container run -e ASIM_ENV=my_name_is_asim  hello-world

# link to a port
sudo docker container run -p 8000:80 asim3/whoami:1.3

wget localhost:8000
# Connecting to localhost (localhost)|127.0.0.1|:8000... connected.
# HTTP request sent, awaiting response... 200 OK
# Length: 1332 (1.3K) [text/html]
```


## run ubuntu cli
```bash
mkdir /tmp/my_docker_home/
cd /tmp/my_docker_home/

docker run --rm \
  -v "/tmp/my_docker_home:/home" \
  -it ubuntu:latest  bash
```


## live stream statistics
Display a live stream of all containers statistics
```bash
sudo docker container stats
```


## execute shell commands
get into a Docker container's shell
```bash
docker run -it __image_name__ bash
docker run -it gitlab/gitlab-runner bash


sudo docker exec -it __id__ bash
sudo docker exec -it __id__ whoami
sudo docker exec -it __id__ ls -al /var/
sudo docker exec -it __id__ mkdir ~/asim
sudo docker exec -it __id__ touch ~/done-exec-by-docker.txt
```


## Logs
```bash
sudo docker logs    __id__
sudo docker inspect __id__
```


## Prune
```bash
# remove unused images
sudo docker image prune

# remove all images
sudo docker image prune -a

# remove stopped containers
sudo docker container prune

# remove all images, containers, volumes, and networks
sudo docker system prune -a
```
