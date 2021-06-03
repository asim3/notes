## python
```bash
python3 -m venv .venv

source .venv/bin/activate

pip install django gunicorn

echo -e "wheel \nDjango==3.2 \ngunicorn==20.1.0 \npsycopg2-binary>=2.8" > ./requirements.txt

nano my_project/my_project/settings.py
# ALLOWED_HOSTS = ["*"]

django-admin startproject my_project
```


## Dockerfile
`nano Dockerfile`
```dockerfile
FROM python:3-alpine

ENV VIRTUAL_ENV=/opt/venv

RUN python3 -m venv $VIRTUAL_ENV

ENV PATH="$VIRTUAL_ENV/bin:$PATH"

RUN apk add --no-cache \
    gcc \
    postgresql-dev \
    musl-dev \
    libffi-dev \
    jpeg-dev \
    gettext \
    zlib-dev \
    linux-headers \
    ca-certificates \
    cairo

RUN adduser -D django_user


COPY ./brandat /opt/brandat/

WORKDIR /opt/brandat

RUN pip3 install --no-cache-dir --quiet gunicorn
RUN pip3 install --no-cache-dir -r ./requirements.txt

RUN python3 manage.py migrate

# RUN python3 manage.py collectstatic

RUN python3 manage.py compilemessages

USER django_user

# CMD ["/bin/sh","-c","gunicorn --workers 3 --bind 0.0.0.0:8000 brandat.wsgi"]

CMD ["/bin/sh","-c","python3 manage.py runserver 0.0.0.0:8000"]
```


## Dockerfile
`nano .dockerignore`
```txt
*/*.log
*/*.pot
*/*.pyc
*/__pycache__

*/staticfiles
*/static_collected

*/media
*/MEDIA_ROOT

*/local_settings.py
*/db.sqlite3

*/.venv
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
