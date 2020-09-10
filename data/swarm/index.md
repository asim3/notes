## Docker swarm - Container Orchestration


```bash
sudo docker system info
# Swarm: inactive

sudo docker swarm init


## add a worker node to the swarm
```
```bash
# @ manager to show the command
sudo docker swarm join-token worker

# @ other machine
sudo docker swarm join --token SWMTKN-1-e...nnn 192.168.100.134:2377
```


## Manage Swarm nodes
```bash
sudo docker node ps
sudo docker node ls
sudo docker node ls -q

# get all node info in JSON
sudo docker node inspect __node_id__
```


## Swarm Stack Files
```bash
sudo docker stack ls
sudo docker stack deploy -c ./test-compose/docker-compose.yml my-stack-name
sudo docker stack rm my-stack-name
```



## Swarm Service
```bash
sudo docker service ls
```
