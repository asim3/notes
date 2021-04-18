## python
```bash
python3 -m venv .venv

source .venv/bin/activate

pip install django gunicorn

echo -e "Django==3.2 \ngunicorn==20.1.0" > ./requirements.txt

django-admin startproject my_project
```


## Dockerfile
`nano Dockerfile`
```dockerfile
FROM alpine:latest

RUN apk add --no-cache --update bash python3 py3-pip postgresql-client

COPY ./requirements.txt /tmp/requirements.txt

RUN pip3 install --no-cache-dir -q -r /tmp/requirements.txt

COPY ./my_project /opt/my_project/

WORKDIR /opt/my_project

RUN adduser -D myuser

USER myuser

CMD gunicorn --chdir my_project --workers 3 --bind 0.0.0.0:5000 wsgi 
```


## build
```bash
docker image build -t asim3/django_test .

docker run -p 8000:5000 asim3/django_test

curl http://localhost:8000
```
