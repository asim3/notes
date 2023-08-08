## stack
`docker stack deploy -c my_stack_file.yml my_stack-name`
```yml
version: "3.8"
services:
  app:
    image: asim3/whoami:1.3
    ports:
      - "8001:80"
    deploy:
      mode: replicated
      replicas: 2
    environment:
      TZ: Asia/Riyadh
      MY___11111111111111: "22222222222222222222222222222222"
      MY___22222222222222: my Env
```


## services
`mkdir -p my_compose_dir/`     
`nano my_compose_dir/docker-compose.yml`
```yaml
version: "3.3"

services:
    my-service:
        image: asim3/whoami:1.3
        # OR
        # build: ./my_docker_file/
        
        deploy:
            reblicas:

        restart: unless-stopped
        container_name: wp
        networks:
            - backend
        ports:
            - "8000:80"
        volumes:
            - ./my-php/:/var/www/html/
            - my_compose-volume:/var/www/html/
        command: --api.insecure=true --providers.docker
        environment:
            MYSQL_DATABASE: exampledb
            MYSQL_USER: exampleuser
            MYSQL_PASSWORD: examplepass
        labels:
          - "traefik.enable=true"
          - "traefik.entrypoints=web"
```


## volumes 
```yaml
volumes:
    my_compose-volume:
        driver: local
        driver_opts:
            type: 'none'
            o: 'bind'
            device: '/var/asim-compose-volume'
```


## networks 
```yaml
networks:
  web:
    external: true
  backend:
    external: false
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
