```
```bash
docker-compose version


[install](https://docs.docker.com/compose/install/#install-using-pip#install-compose-on-linux-systems)


```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
```


```bash
sudo docker-compose up -d --scale __name__=3
sudo docker-compose start

sudo docker-compose stop
sudo docker-compose down # stop then remove all containers
```


```yaml
mkdir -p ~/test-compose/ && nano ~/test-compose/docker-compose.yml
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

      
```yaml
volumes:
  my_volumes_data:
    driver: local
    driver_opts:
      type: 'none'
      o: 'bind'
      device: '/var/asim-volume'
```
  

# Check the validity of docker-compose.yml
```bash
# cd ~/test-compose/ 
sudo docker-compose config

# cd ~/test-compose/
sudo docker-compose up -d
sudo docker-compose up -d --scale __id__=3
sudo docker-compose up    --scale __id__=2
```


## OR 
```bash
sudo docker-compose -f ~/test-compose/docker-compose.yml up

# cd ~/test-compose/ 
sudo docker-compose down

# OR 
sudo docker-compose -f ~/test-compose/docker-compose.yml down
```



```bash
# cd ~/test-compose/ 
sudo docker-compose ps

# cd ~/test-compose/ 
sudo docker-compose images
```
