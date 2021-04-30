## python
```bash
python3 -m venv .venv

source .venv/bin/activate

pip install django gunicorn

echo -e "wheel \nDjango==3.2 \ngunicorn==20.1.0" > ./requirements.txt

nano my_project/my_project/settings.py
# ALLOWED_HOSTS = ["*"]

django-admin startproject my_project
```


## Dockerfile
`nano Dockerfile`
```dockerfile
FROM alpine:latest

RUN apk add --no-cache --update python3 py3-pip

# RUN apk add --no-cache --update gettext

# pip install psycopg2
# RUN apk add --no-cache --update postgresql-dev gcc musl-dev python3-dev
# gcc            : GNU C compiler
# musl-dev       : standard C library development files
# python3-dev    : header files and a static library for Python (default)
# postgresql-dev : 


COPY ./requirements.txt /tmp/requirements.txt

RUN pip3 install --no-cache-dir -q -r /tmp/requirements.txt

COPY ./my_project /opt/my_project/

WORKDIR /opt/my_project

# RUN python3 manage.py migrate

# RUN python3 manage.py collectstatic

# RUN python3 manage.py compilemessages

RUN adduser -D djangouser

USER djangouser

CMD gunicorn --workers 3 --bind 0.0.0.0:8000 my_project.wsgi
```


## build
```bash
docker image build -t asim3/django_test .

docker run -p 8000:5000 asim3/django_test

curl http://localhost:8000
```


## push
```bash
docker push asim3/django_test

docker push asim3/django_test:1.0

docker push asim3/django_test:latest
```


## run postgres
```bash
docker run -e POSTGRES_PASSWORD=topsecret -p 8001:5432 postgres
```
