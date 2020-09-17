# Docker stacks


## deploy
deploy a new stack files to swarm cluster
```txt
sudo docker stack deploy -c ./my_compose_dir/docker-compose.yml my-stack-name
```


```txt
sudo docker stack ls
sudo docker stack services my-stack-name

sudo docker stack   rm my-stack-name

sudo docker stack   ps my-stack-name
sudo docker service ps my-stack-name_my-service
```



## fix ERROR
> ERROR: "mkdir /var/lib/docker: read-only file system"
```txt
# remove docker from snap
sudo snap remove docker

# then remove the docker directory, and old version
sudo rm -R /var/lib/docker
sudo apt-get remove docker docker-engine docker.io


# install official docker
```
