[docker-cheat-sheet](https://github.com/wsargent/docker-cheat-sheet#dockerfile)
[Environment replacement](https://docs.docker.com/engine/reference/builder/#environment-replacement)

# Docker Engine - Community

## making php file
```dockerfile
mkdir -p ~/test_docker_build/src/ 
nano ~/test_docker_build/src/index.php
<?php

echo "Hello, World";
```


## making php Dockerfile
```dockerfile
nano ~/test_docker_build/Dockerfile
FROM php:7.0-apache
COPY src/ /var/www/html
EXPOSE 80
```


## Build docker image
```bash
sudo docker image build -t my_php_test:mytag ~/test_docker_build/
sudo docker images

sudo docker container run    -p 80:80 my_php_test:mytag
sudo docker container run -d -p 80:80 my_php_test:mytag
# -d for: Run container in background
```

## Bind mount a volume
```bash
sudo docker container run -p 80:80 -v ~/test_docker_build/src/:/var/www/html/ my_php_test
```


## Dockerfile
```dockerfile
# select Base OS
FROM ubuntu

# my name and email 
MAINTAINER asim <asim@gmail.com>

# execute on build
RUN apt-get update

# execute on run image
CMD ["echo", "Hello Worldddd"]
```


## Dockerfile for Django 
> !!
```dockerfile
FROM python:3
ENV pythonunbuffered 1
RUN mkdir /my_file
WORKDIR /my_file
COPY . /my_file/
RUN pip install -r requirements.txt
```
