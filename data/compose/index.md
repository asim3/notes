## services
`mkdir -p ~/test-compose/`
`nano ~/test-compose/docker-compose.yml`
```yaml
version: '3'

services:
    my-test-service:
        build: ~/test/
        restart: always
        volumes:
          - ~/test/src/:/var/www/html
        ports:
          - "5000:80"

    my-test-website:
        image: php:apache
        restart: always
        volumes:
          - ../test/src:/var/www/html/
        ports:
          - "5001:80"
```


## volumes 
```yaml
volumes:
    my_volumes_data:
        driver: local
        driver_opts:
            type: 'none'
            o: 'bind'
            device: '/var/asim-volume'
```



## run
`cd ~/test-compose/`
```txt
sudo docker-compose up -d --scale __name__=3
sudo docker-compose start

sudo docker-compose stop

# stop then remove all containers
sudo docker-compose down
```


## OR 
```txt
sudo docker-compose -f ~/test-compose/docker-compose.yml   up
sudo docker-compose -f ~/test-compose/docker-compose.yml   down
```



## check compose file
`cd ~/test-compose/`
```txt
sudo docker-compose config
```


`cd ~/test-compose/`
```txt
sudo docker-compose ps
sudo docker-compose images
```
