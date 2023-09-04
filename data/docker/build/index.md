[docker-cheat-sheet](https://github.com/wsargent/docker-cheat-sheet#dockerfile)


## alpine
`nano Dockerfile`
```dockerfile
FROM nginx:stable-alpine3.17-slim

RUN apk add bash

RUN adduser -S -s /bin/bash -u 1000 -D d_user

ENV MY_ENV="asim"

COPY --chown=d_user --chmod=550  . /d_new_dir
```


## nginx
```dockerfile
FROM nginx:mainline-alpine3.17-slim

RUN apk add bash

RUN adduser -S -s /bin/bash -u 1000 -D d_user

COPY --chown=d_user --chmod=550  ./src /usr/share/nginx/html
```


## python
Debian 13: `trixie`
Debian 12: `bookworm`
Debian 11: `bullseye`
Debian 10: `buster`
```dockerfile
FROM python:3.11-alpine3.18

RUN apk update && apk add bash
# RUN apk update --no-check-certificate && apk add --no-check-certificate bash

RUN adduser -S -s /bin/bash -u 1000 -D d_user

RUN pip install django gunicorn

COPY --chown=d_user --chmod=550  .  /my_app

WORKDIR /my_app

ENTRYPOINT [ "/bin/sh", "-c" ]

CMD [ "/my_app/manage.py" ]
```


## Python Web
```dockerfile
FROM python:3.11-slim-bullseye

RUN apt-get -y update && apt-get -y install gcc python3-dev libpq-dev

RUN adduser --system --shell /bin/bash --uid 1000 --group --disabled-password --disabled-login d_user

ENV APP_HOME=/home/d_user/web

RUN install -d -m 0750 -o d_user -g d_user $APP_HOME $APP_HOME/tmp

COPY --chown=d_user:d_user --chmod=550 ./requirements.txt $APP_HOME/requirements.txt

RUN pip install --no-cache-dir -r $APP_HOME/requirements.txt

COPY --chown=d_user:d_user --chmod=550 ./__proj__ $APP_HOME

WORKDIR $APP_HOME

USER d_user

ENTRYPOINT ["gunicorn --bind :8000 --workers 3 __proj__.wsgi"]

## Django
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]

## Flask
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
```


## COPY from build
```dockerfile
FROM ubuntu:22.04 AS build

RUN curl -L https://...

RUN echo "9f99  file.tar.gz" | shasum -a 256 -c

RUN tar xzf ./file.tar.gz  --directory /home/d_dir


FROM python:3.11-alpine3.18

COPY --from=build --chown=d_user --chmod=500  /home/d_dir /home/d_python
```


## build - push
```bash
docker image build -t asim3/my_image:latest .


docker image build \
  -t asim3/my_php_test:mytag \
  -t asim3/my_php_test:1.0 \
  -t asim3/my_php_test:latest \
  ./my_docker_file/


docker login
docker push asim3/my_new_image:mytag
```
