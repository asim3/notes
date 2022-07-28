## start
```sh
python3 -m venv .venv \
  && source ./.venv/bin/activate \
  && pip install django==3.2 autopep8 \
  && django-admin startproject my_project \
  && code . \
  && cd ./my_project \
  && python ./manage.py startapp my_new_app
```


## django manage
```txt
django-admin startproject my_project

python manage.py startapp app_name

python manage.py makemigrations && python manage.py migrate
python manage.py collectstatic

python manage.py runserver
```


## deploy
```bash
python manage.py check --deploy
```


## super user
```txt
python manage.py createsuperuser
```


## Translation
```txt
python3 manage.py makemessages -l ar
python3 manage.py compilemessages
```


## gunicorn
robust web server that is built to handle production levels of traffic.
```bash
gunicorn my_project.wsgi

gunicorn --workers 3 --bind 0.0.0.0:8000 my_project.wsgi


# workers
workers=$(nproc --all | awk -F " " '{print $1 * 2 + 1 }')

# 3 workers "pid"
gunicorn --chdir my_project --workers 3 --bind 0.0.0.0:8000 wsgi

# threads lightweight (less memory consumption)
gunicorn --chdir my_project --threads 3 --bind 0.0.0.0:8000 wsgi


# 1 worker
gunicorn --chdir my_project --bind 0.0.0.0:8000 wsgi
```


## gunicorn sync
```text
workers = (2 * cpu) + 1
worker_class = sync
```

## gunicorn async `gevent`
```text
workers = 1
worker_class = gevent
worker_connections = a value (lets say 2000)
```
