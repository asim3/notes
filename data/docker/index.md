## Containerization


```txt
sudo docker version
```

## List all images
``` txt
sudo docker images
```


## Image
``` txt
sudo docker image build ~/Dockerfile_path/

sudo docker image rm __id__
# Pull an image or a repository from a registry
sudo docker image pull __id__
```


## Containers
``` txt
sudo docker container run __image_name__

# List all running containers
sudo docker container ls
sudo docker container ls -a

# Display a live stream of container(s) resource usage statistics
sudo docker container stats
```


## Other
``` txt
sudo docker container pause __id__
sudo docker container unpause __id__

sudo docker container start __id__
sudo docker container restart __id__
sudo docker container stop __id__
sudo docker container kill __id__
sudo docker container rm __id__
```


## execute shell commands
get into a Docker container's shell
```
sudo docker exec -it __id__ bash
sudo docker exec -it __id__ ls -al
sudo docker exec -it __id__ ls whoami
sudo docker exec -it __id__ ls /var/
sudo docker exec -it __id__ ls -al /var/
sudo docker exec -it __id__ touch /bitnami/asim-3
```
