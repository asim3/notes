# Docker stacks


## deploy
deploy a new stack files to swarm cluster
```txt
sudo docker stack deploy -c ./my_compose_dir/docker-compose.yml my-stack-name
```


```txt
sudo docker stack ls

sudo docker stack services   my-stack-name
sudo docker service logs -f  my-stack-name_my_compose-service

sudo docker stack ps my-stack-name
sudo docker stack rm my-stack-name
```
