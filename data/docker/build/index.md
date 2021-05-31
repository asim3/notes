## Official Images
[node](https://hub.docker.com/_/node)
[busybox](https://hub.docker.com/_/busybox)
[alpine](https://hub.docker.com/_/alpine)
[django](https://hub.docker.com/_/django)
[php](https://hub.docker.com/_/php)
[wordpress](https://hub.docker.com/_/wordpress)
[debian](https://hub.docker.com/_/debian)
[python](https://hub.docker.com/_/python)
[docker](https://hub.docker.com/_/docker)
[httpd](https://hub.docker.com/_/httpd)
[ubuntu](https://hub.docker.com/_/ubuntu)


## Dockerfile
`nano Dockerfile`
```dockerfile
FROM debian:latest

LABEL multi.label1="value1" multi.label2="value2" other="value3"

ENV MY_ENV="asim"

COPY ./deployer.deb /
COPY ./tests/ /tests/


RUN apt-get -y update \
    && apt-get -y install git dpkg curl sudo python3-venv lsb-release \
    && git clone --depth 1 https://github.com/sstephenson/bats.git \
    && /bats/install.sh /usr/local \
    && dpkg --install /deployer.deb


RUN groupadd -r myuser \
    && useradd --no-log-init -r -g myuser -G sudo myuser \
    && echo "myuser ALL=(ALL:ALL) NOPASSWD: ALL" > /etc/sudoers.d/myuser
USER myuser

USER 1000

WORKDIR /path/to/workdir

ENTRYPOINT [ "/bin/sh", "-c" ]
CMD [ "bats -t /tests " ]
```


## making php Dockerfile
`nano ~/my_docker_file/Dockerfile`
```dockerfile
FROM busybox:latest
FROM alpine:latest

FROM php:latest
FROM python:latest
FROM httpd:latest

FROM debian:latest
FROM ubuntu:latest


EXPOSE 80
ENV MY_ENV="asim"

COPY ./my-php/ /var/www/html
COPY ./my-bash.sh /

RUN chmod +x /my-bash.sh
RUN /my-bash.sh

# RUN >>> runs on build only.
# CMD >>> only one CMD can be run after every startup.
```


## making shell file
`nano ~/my_docker_file/my-bash.sh`     
```bash
echo "<br> RUN: $(date '+%x %X') - by $(whoami) - env: $(echo $MY_ENV)" >> /var/www/html/index.php
```


## making php file
`mkdir -p ~/my_docker_file/my-php/`     
`nano     ~/my_docker_file/my-php/index.php`
```html
<?php echo 'from index.php <br>'; ?>
<p>you will see this if you don't use volumes.</p>
<p>volumes will override this file.</p>
```


## Build docker image
```txt
sudo docker image build -t asim3/my_php_test:1.0 ~/my_docker_file/

sudo docker image build \
  -t asim3/my_php_test:mytag \
  -t asim3/my_php_test:1.0 \
  -t asim3/my_php_test:latest \
  ~/my_docker_file/
```


## run
```txt
sudo docker container run -d -p 80:80   asim3/my_php_test:mytag

# with volumes
sudo docker container run -d -p 80:80 \
  -v ~/my_docker_file/my-php/:/var/www/html/   asim3/my_php_test:mytag
```


## Push Image
Push Image to Docker Hub
> the image name must start with "docker hub username"
```txt
sudo docker login

sudo docker push asim3/my_php_test:mytag
```
