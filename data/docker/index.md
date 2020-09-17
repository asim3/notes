# Docker - Community
[12 factor app](https://12factor.net/)

```txt
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
```txt
sudo docker image pull __id__
sudo docker image rm   __id__
```


## Containers
```txt
sudo docker container run             hello-world
sudo docker container run   -p 80:80  asim3/whoami:1.3
```


## live stream statistics
Display a live stream of all containers statistics
```txt
sudo docker container stats
```


## execute shell commands
get into a Docker container's shell
```txt
sudo docker exec -it __id__ bash
sudo docker exec -it __id__ whoami
sudo docker exec -it __id__ ls -al /var/
sudo docker exec -it __id__ mkdir ~/asim
sudo docker exec -it __id__ touch ~/done-exec-by-docker.txt
```


## Prune
```txt
# remove unused images
sudo docker image prune

# remove all images
sudo docker image prune -a

# remove stopped containers
sudo docker container prune

# remove all images, containers, volumes, and networks
sudo docker system prune -a
```
