## Docker swarm - Container Orchestration


```txt
sudo docker system info
# Swarm: inactive

sudo docker swarm init
```


## add a worker node to the swarm
```txt
# @ manager to show the command
sudo docker swarm join-token worker

# @ other machine
sudo docker swarm join --token SWMTKN-1-e...nnn 192.168.100.134:2377
```


## Manage Swarm nodes
```txt
sudo docker node ps
sudo docker node ls
sudo docker node ls -q

# get all node info in JSON
sudo docker node inspect __node_id__
```


## Swarm Stack Files
```txt
sudo docker stack ls
sudo docker stack deploy -c ./test-compose/docker-compose.yml my-stack-name
sudo docker stack rm my-stack-name
```



## Swarm Service
```txt
sudo docker service ls
```
