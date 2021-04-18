## python
```bash
python3 -m venv .venv

source .venv/bin/activate

pip install django gunicorn

echo -e "wheel \nDjango==3.2 \ngunicorn==20.1.0" > ./requirements.txt

django-admin startproject my_project
```


## Dockerfile
`nano Dockerfile`
```dockerfile
FROM alpine:latest

RUN apk add --no-cache --update bash python3 py3-pip gettext postgresql-client

COPY ./my_project /opt/my_project/

WORKDIR /opt/my_project

RUN pip3 install --no-cache-dir -q -r ./requirements.txt

RUN python3 manage.py migrate

RUN python3 manage.py collectstatic

RUN python3 manage.py compilemessages

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
