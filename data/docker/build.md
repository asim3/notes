[docker-cheat-sheet](https://github.com/wsargent/docker-cheat-sheet#dockerfile)
[Environment replacement](https://docs.docker.com/engine/reference/builder/#environment-replacement)


## making php file
`mkdir -p ~/my_docker_file/my-php/`     
```txt
echo "<?php echo 'Hello, World'; ?>" > ~/my_docker_file/my-php/index.php
```


## making php Dockerfile
`nano ~/my_docker_file/Dockerfile`
```dockerfile
FROM php:7.0-apache
MAINTAINER asim <asim@gmail.com>

RUN echo "runs on build only"
CMD echo "only one CMD can be run after every startup"
# Avoid ADD and use COPY instead.
ADD  my-php/ /var/www/html
COPY my-php/ /var/www/html
RUN echo "<br> RUN: $(date '+%x %X')     by $(whoami)" >> /var/www/html/index.php
EXPOSE 80
```


## Build docker image
```txt
sudo docker image build -t my_php_test:mytag ~/my_docker_file/

# remove unused images
sudo docker image prune
```


## run
> `-d` for: Run container in background
```txt
sudo docker container run -d -p 80:80 my_php_test:mytag

sudo docker container run -d -p 80:80 \
  -v ~/my_docker_file/my-php/:/var/www/html/    \
  my_php_test:mytag
```



```txt
sudo docker container ls -a
sudo docker container stop __id__
sudo docker container rm __id__
```



## Push Image
Push Image to Docker Hub
> `sudo apt-get install pass gnupg2`
```txt
sudo docker commit __id__ asim3/my-image-1:mytag

sudo docker login

sudo docker push asim3/my-image-1:mytag
```
