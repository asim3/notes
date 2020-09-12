[docker-cheat-sheet](https://github.com/wsargent/docker-cheat-sheet#dockerfile)
[Environment replacement](https://docs.docker.com/engine/reference/builder/#environment-replacement)


## making php file
`mkdir -p ~/my_docker_file/my-php/`     
```txt
echo "<?php echo 'from ~/my_docker_file/my-php/index.php <br>'; ?>" > ~/my_docker_file/my-php/index.php
```


## making php Dockerfile
`nano ~/my_docker_file/Dockerfile`
```dockerfile
FROM php:7.3-apache
MAINTAINER asim <asim@gmail.com>
EXPOSE 80

# Avoid ADD and use COPY instead.
ADD  ./my-php/ /var/www/html
COPY ./my-php/ /var/www/html

RUN echo "you will see this if you don't use volumes." >> /var/www/html/index.php
RUN echo "<br>volumes will override this file." >> /var/www/html/index.php
RUN echo "<br>RUN: $(date '+%x %X') - by $(whoami)" >> /var/www/html/index.php

RUN echo "runs on build only"
# CMD echo "only one CMD can be run after every startup"
```


## Build docker image
```txt
sudo docker image build \
  -t my_php_test:mytag \
  -t my_php_test:1.0 \
  -t my_php_test:latest \
  ~/my_docker_file/
```


## run
```txt
sudo docker container run -d -p 80:80   my_php_test:mytag

# with volumes
sudo docker container run -d -p 80:80 \
  -v ~/my_docker_file/my-php/:/var/www/html/   my_php_test:mytag
```
