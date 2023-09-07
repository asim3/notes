## Official Images
[alpine](https://hub.docker.com/_/alpine/tags)
[busybox](https://hub.docker.com/_/busybox/tags)
[python](https://hub.docker.com/_/python/tags)


[docker](https://hub.docker.com/_/docker/tags)
[debian](https://hub.docker.com/_/debian/tags)
[ubuntu](https://hub.docker.com/_/ubuntu/tags)


[node](https://hub.docker.com/_/node/tags)
[httpd](https://hub.docker.com/_/httpd/tags)
[php](https://hub.docker.com/_/php/tags)
[wordpress](https://hub.docker.com/_/wordpress/tags)


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