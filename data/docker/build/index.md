## making php Dockerfile
`nano ~/my_docker_file/Dockerfile`
```dockerfile
FROM php:7.3-apache
MAINTAINER asim <asim@gmail.com>

EXPOSE 80
ENV MY_ENV="asim"

COPY ./my-php/ /var/www/html
COPY ./my-bash.sh /

RUN chmod +x /my-bash.sh
RUN /my-bash.sh

# RUN: runs on build only.
# CMD: only one CMD can be run after every startup.
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
