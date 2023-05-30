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


sudo docker stack ls
# NAME            SERVICES
# my-test_stack   1


sudo docker ps
# CONTAINER ID   IMAGE              COMMAND                  CREATED         STATUS         PORTS     NAMES
# 6fd1dc696b99   asim3/whoami:1.3   "docker-php-entrypoi…"   2 minutes ago   Up 2 minutes   80/tcp    my-test_stack_my-service.1.tuo9xms3i1kver5a6alp0xlzp
```
