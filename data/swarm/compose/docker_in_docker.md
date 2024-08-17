## Docker in Docker!
`docker-compose.yml`
```yml
version: "3.8"

services:
  docker:
    image: docker:27-dind
    privileged: true
    environment:
      DOCKER_TLS_CERTDIR: /certs
    networks:
      - docker_in_docker
    volumes:
      - "docker_in_docker-certs-ca:/certs/ca"
      - "docker_in_docker-certs-client:/certs/client"


  main:
    image: docker:27-cli
    # image: docker:27-dind-rootless
    environment:
      DOCKER_TLS_CERTDIR: /certs
    networks:
      - docker_in_docker
    ports:
      - 8000:8080
    volumes:
      - "docker_in_docker-certs-client:/certs/client:ro"


networks:
  docker_in_docker:

volumes:
  docker_in_docker-certs-ca:
  docker_in_docker-certs-client:
```


## run
```bash
docker compose up --build --force-recreate

docker compose run -i main '/bin/sh'

# stop then remove all containers
docker compose down
```
