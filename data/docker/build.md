[docker-cheat-sheet](https://github.com/wsargent/docker-cheat-sheet#dockerfile)
[Environment replacement](https://docs.docker.com/engine/reference/builder/#environment-replacement)

# Docker Engine - Community

## making php file
`mkdir -p ~/my_docker_file/my-php/`     
```txt
echo "<?php echo 'Hello, World'; ?>" > ~/my_docker_file/my-php/index.php
```


## making php Dockerfile
`nano ~/my_docker_file/Dockerfile`
```dockerfile
FROM php:7.0-apache
COPY my-php/ /var/www/html
EXPOSE 80
```


## Build docker image
```txt
sudo docker image build -t my_php_test:mytag ~/my_docker_file/

sudo docker images
sudo docker images -a
```


## run
> `-d` for: Run container in background
```txt
sudo docker container run -d -p 80:80 my_php_test:mytag


sudo docker container ls -a

sudo docker container stop __id__
sudo docker container rm __id__
```


## volume
Bind mount a volume
```txt
sudo docker container run -p 80:80 \
 -v ~/my_docker_file/my-php/:/var/www/html/ my_php_test:mytag
```



## Push Image
Push Image to Docker Hub
> `sudo apt-get install pass gnupg2`
```txt
sudo docker commit __id__ asim3/my-image-1:mytag

sudo docker login

sudo docker push asim3/my-image-1:mytag
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
