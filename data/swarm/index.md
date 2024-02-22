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
# ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
# qn8ckdxyried44xl7m74rs6cc *   dhil-2     Ready     Active         Leader           24.0.2
```


## inspect node
```bash
sudo docker node ps __hostname__


sudo docker node inspect __hostname__
# [
#     {
#         "ID": "qn8ckdxyried44xl7m74rs6cc",
#         "Version": {
#             "Index": 9
#         },
#         "CreatedAt": "2023-05-30T11:50:42.394599877Z",
#         "UpdatedAt": "2023-05-30T11:50:43.012081838Z",
#         "Spec": {
#             "Labels": {},
#             "Role": "manager",
#             "Availability": "active"
#     ....
```


## Delete All
```bash
docker system prune --all --force --volumes
```
