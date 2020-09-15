# Docker stacks


## deploy
deploy a new stack files to swarm cluster
```txt
sudo docker stack deploy -c ./my_compose_dir/docker-compose.yml my-stack-name

sudo docker stack ls
sudo docker stack ps       my-stack-name
sudo docker stack services my-stack-name
sudo docker stack rm       my-stack-name
```
