`mkdir ~/traefik_test_1/`    
`nano ~/traefik_test_1/docker-compose.yml`
```yaml
version: '3'

services:
  reverse-proxy:
    # The official v2 Traefik docker image
    image: traefik:v2.2
    # Enables the web UI and tells Traefik to listen to docker
    command: --api.insecure=true --providers.docker
    ports:
      # The HTTP port
      - "80:80"
      # The Web UI (enabled by --api.insecure=true)
      - "8080:8080"
    volumes:
      # So that Traefik can listen to the Docker events
      - /var/run/docker.sock:/var/run/docker.sock
```


## run traefik
```txt
cd ~/traefik_test_1/
sudo docker-compose up -d reverse-proxy

curl http://localhost:8080/api/rawdata | json_pp 
```


EDIT docker-compose.yml file and add the following at the end
`nano ~/traefik_test_1/docker-compose.yml`
> must be within the same traefik-compose file
```yaml
# ...

  whoami:
    image: containous/whoami
    labels:
      - "traefik.http.routers.whoami.rule=Host(`mmm.com`)"
```
      
   

## run whoami
```txt
cd ~/traefik_test_1/
sudo docker-compose up -d whoami

# check if the site is running
curl -H Host:whoami.docker.localhost http://127.0.0.1

# add more Instances, Traefik will Load Balances Them
sudo docker-compose up -d --scale whoami=2

# check the site ip @
curl -H Host:whoami.docker.localhost http://127.0.0.1
```


## testing
```txt
sudo docker images
sudo docker container ls
```

```text
http://localhost:8080/api/rawdata

http://whoami.docker.localhost/
# Hostname: 9cfc613e5d9b
# IP: 127.0.0.1
# ...
```


## network & volume
```txt
sudo docker network create web
sudo docker volume create --name=wordpress

sudo docker-compose up -d --remove-orphans
```
