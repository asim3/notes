## Service
> **replicated mode** : control the number of containers copies    
> **global mode** : one copy of the container in every node
```txt
sudo docker service ls

sudo docker service create --name __name__ --mode global nginx
sudo docker service create --name __name__ --replicas 2 nginx
sudo docker service scale __name__=2

sudo docker service rm __name__
```
