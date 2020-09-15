## Service
> run only on a swarm manager.    
> you can use `docker container run` if you wish "without swarm"
```txt
sudo docker service ls
sudo docker service ps          my-DNS-name
sudo docker service logs -f     my-DNS-name
sudo docker service inspect     my-DNS-name
```


## create
> **Replicated mode** : control the number of containers copies    
> **Global mode** : one copy of the container in every node
```txt
sudo docker service create --name my-DNS-name --mode global asim3/whoami:1.3
# OR
sudo docker service create --name my-DNS-name --replicas 2 \
    --publish published=8080,target=80 asim3/whoami:1.3
```


## update
```txt
sudo docker service create --name my-DNS-nginx nginx

sudo docker service update --publish-add  published=8081,target=80   my-DNS-nginx
sudo docker service update --publish-rm   published=80,target=80     my-DNS-nginx
```


## manage
```txt
sudo docker service scale my-DNS-name=3
sudo docker service rm    my-DNS-name

#sudo docker service rollback 
```
