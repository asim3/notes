## compose file
```yaml
cat <<EOF > docker-compose.yaml
version: '3.8'

services:
    my-service:
        container_name: my_jenkins_container
        image: asim3/whoami:1.3
        restart: unless-stopped
        ports:
        - 8000:8080
EOF
```


## deploy
```bash
sudo docker stack deploy --compose-file docker-compose.yaml my-test_stack
```


## info
```bash
sudo docker stack ls
# NAME            SERVICES
# my-test_stack   1


sudo docker stack ps my-test_stack
# ID             NAME                         IMAGE              NODE      DESIRED STATE   CURRENT STATE           ERROR     PORTS
# tuo9xms3i1kv   my-test_stack_my-service.1   asim3/whoami:1.3   dhil-2    Running         Running 7 minutes ago             


sudo docker ps
# CONTAINER ID   IMAGE              COMMAND                  CREATED         STATUS         PORTS     NAMES
# 6fd1dc696b99   asim3/whoami:1.3   "docker-php-entrypoi…"   2 minutes ago   Up 2 minutes   80/tcp    my-test_stack_my-service.1.tuo9xms3i1kver5a6alp0xlzp


sudo docker stack services my-test_stack
# ID             NAME                       MODE         REPLICAS   IMAGE              PORTS
# z4tslrf6emwu   my-test_stack_my-service   replicated   1/1        asim3/whoami:1.3   *:8000->8080/tcp
```
