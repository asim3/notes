## Django
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
    ca-certificates

COPY ./my_project /opt/my_project/

WORKDIR /opt/my_project

RUN python3 -m pip install --upgrade pip

RUN pip3 install --no-cache-dir --quiet gunicorn

RUN if [ -f ./requirements.txt ]; then \
      pip3 install --no-cache-dir -r ./requirements.txt; \
    else \
      pip3 install --no-cache-dir --quiet django; \
    fi;

RUN python3 manage.py migrate

# RUN python3 manage.py collectstatic

# RUN python3 manage.py compilemessages

RUN adduser -D django_user

USER django_user

# CMD ["/bin/sh","-c","gunicorn --workers 3 --bind 0.0.0.0:8000 brandat.wsgi"]

CMD ["/bin/sh","-c","python3 manage.py runserver 0.0.0.0:8000"]
```


## ignore
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
