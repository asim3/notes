[docker-cheat-sheet](https://github.com/wsargent/docker-cheat-sheet#dockerfile)


## Dockerfile
`nano Dockerfile`
```dockerfile
FROM nginx:mainline-alpine3.17-slim

COPY src /usr/share/nginx/html
```


## alpine
```dockerfile
FROM nginx:stable-alpine3.17-slim

RUN apk add bash

COPY . /usr/share/nginx/html
```


## python
Debian 13: `trixie`
Debian 12: `bookworm`
Debian 11: `bullseye`
Debian 10: `buster`
```dockerfile
FROM python:3.11-alpine3.18

RUN pip install django gunicorn

COPY . /my_app

WORKDIR /my_app

ENTRYPOINT [ "/bin/sh", "-c" ]

CMD [ "/my_app/manage.py" ]
```


## Django
```dockerfile
FROM python:3.11-slim-bullseye

COPY requirements.txt /main/requirements.txt

RUN pip3 install -r /main/requirements.txt
```


## Flask
```dockerfile
FROM python:3.11-slim-bullseye

COPY requirements.txt /flask/requirements.txt

RUN pip3 install -r /flask/requirements.txt

COPY . /flask

WORKDIR /flask

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
```


<!-- ======================================================================================== -->
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
```bash
docker image build -t asim3/my_image:latest .


sudo docker image build -t asim3/my_php_test:latest ~/my_docker_file/

sudo docker image build \
  -t asim3/my_php_test:mytag \
  -t asim3/my_php_test:1.0 \
  -t asim3/my_php_test:latest \
  ~/my_docker_file/

# OR

docker image build -t asim3/my_new_image:mytag .

docker push asim3/my_new_image:mytag
```


## run
```bash
sudo docker container run -d -p 80:80   asim3/my_php_test:mytag

# with volumes
sudo docker container run -d -p 80:80 \
  -v ~/my_docker_file/my-php/:/var/www/html/   asim3/my_php_test:mytag
```


## Push Image
Push Image to Docker Hub
> the image name must start with "docker hub username"
```bash
sudo docker login

sudo docker push asim3/my_php_test:mytag
```


## Build then Push
```bash
docker image build -t asim3/my_new_image:latest .

docker push asim3/my_new_image:latest
```
