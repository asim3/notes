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



[Environment replacement](https://docs.docker.com/engine/reference/builder/#environment-replacement)


## tag
```bash
docker tag my_new_image:mytag asim3/my_new_image
```


`nano ./Dockerfile`
```dockerfile
FROM php:7.3-apache

MAINTAINER asim <asim@gmail.com>

# Avoid ADD and use COPY instead.
ADD  ./my-php/ /var/www/html

RUN echo "<br>RUN: $(date '+%x %X') - by $(whoami)" >> /var/www/html/index.php

EXPOSE 80

ENV MY_ENV="my environment variables" \
    PORT_NUMBER="443" \
    NAME=""

ENTRYPOINT [ "/my-bash.sh" ]

CMD [ "httpd", "-f", "/opt/apache/conf/httpd.conf", "-DFOREGROUND" ]
```