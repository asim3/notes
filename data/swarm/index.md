# Docker swarm - Container Orchestration

## create a new swarm cluster
```txt
sudo docker system info | grep -i "swarm"
# Swarm: inactive

# create a manager node
sudo docker swarm init
```


## add a worker node to the swarm cluster
```txt
# manager node
sudo docker swarm join-token manager
sudo docker swarm join-token worker

# worker node
sudo docker swarm join --token SWMTKN... 192.168.100.134:2377
```


## manage swarm nodes
```txt
sudo docker node ls

sudo docker node promote __hostname__
sudo docker node demote __hostname__
```

## inspect node
```txt
sudo docker node ps __hostname__

# get all node info in JSON
sudo docker node inspect __hostname__
```


## swarm Service
```txt
sudo docker service ls
```
