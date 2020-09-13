# Docker - Community

```txt
sudo docker version
sudo docker image     ls -a
sudo docker container ls -a
```


## Images
Pull an image from a registry or a repository
```txt
sudo docker image pull __id__
sudo docker image rm __id__
```


## Containers
```txt
sudo docker container run __image_name__
sudo docker container start __id__
```


## run
> `-d` for: Run container in background
```txt
sudo docker container run -d -P containous/whoami

sudo docker container run __image_name__

--name my-container_name
-e MYKEY=my_environment_variables

# Run in background
-d

# Publish or expose ports
-p 80:80

# Publish all exposed ports to random ports
-P

# mount volume
-v ~/my_file/:/container_file/
-v ~/my_logs/:/container_logs/
```


## stop containers
```txt
sudo docker container pause __id__
sudo docker container unpause __id__

sudo docker container kill __id__
sudo docker container restart __id__
sudo docker container stop __id__
sudo docker container rm __id__
```


## statistics live stream
Display a live stream of containers resource usage statistics
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
