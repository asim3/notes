# Docker swarm - Container Orchestration

## install
```bash
sudo docker swarm init --advertise-addr 192.168.100.14


sudo docker system info | grep -i "swarm"
# Swarm: active
```


## add a manager node 
```bash
sudo docker swarm join-token manager
```


## add a worker node
```bash
sudo docker swarm join --token AAAA...AAAA 192.168.100.14:2377

# OR

sudo docker swarm join-token worker
```


## manage swarm nodes
```bash
sudo docker node ls


sudo docker node promote __hostname__
sudo docker node demote __hostname__

# stop a node
sudo docker node update --availability drain __hostname__

# node must be shutdown
sudo docker node rm __hostname__
```

## inspect node
```bash
sudo docker node ps __hostname__

# get all node info in JSON
sudo docker node inspect __hostname__
```
