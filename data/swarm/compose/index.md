## stack
`docker stack deploy -c my_stack_file.yml my_stack-name`
```yml
version: "3.8"
services:
  app:
    image: asim3/whoami:1.3
    ports:
      - "8001:80"
```


## stack all
```yml
version: "3.8"
services:
  app:
    image: asim3/whoami:1.3
    user: "1000:1000"
    environment:
      TZ: Asia/Riyadh
      MY___11111111111111: "22222222222222222222222222222222"
      MY___22222222222222: my Env
    secrets:
      - source: secret_swarmcd_key
        target: /home/swarmcd/.ssh/id_ecdsa
        uid: "1000"
        gid: "1000"
        mode: 0400
    deploy:
      mode: replicated
      replicas: 2
      labels:
        - traefik.enable=false
      resources:
        reservations:
          memory: 128M
        limits:
          memory: 2048M
      placement:
        constraints:
          - node.role == manager
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
    networks:
      - main-public
    ports:
      - "8001:80"
networks:
  main-public:
    external: true
secrets:
  secret_swarmcd_key:
    external: true
```


## build
`nano docker-compose.yml`
```yaml
version: "3.8"

services:
  app:
    # image: asim3/notes:latest
    build:
      context: .
    ports:
      - "3000:80"
```


## check compose file
`cd my_compose_dir/`
```txt
sudo docker-compose config
sudo docker-compose ps
sudo docker-compose images
```


## run
`cd my_compose_dir/`
```txt
sudo docker-compose up -d
sudo docker-compose up -d --scale __name__=3
sudo docker-compose start

sudo docker-compose stop

# stop then remove all containers
sudo docker-compose down
```


## OR 
```txt
sudo docker-compose -f my_compose_dir/docker-compose.yml   up
sudo docker-compose -f my_compose_dir/docker-compose.yml   down
```
