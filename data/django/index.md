## start
```sh
python3 -m venv .venv \
  && source ./.venv/bin/activate \
  && pip install django \
  && django-admin startproject my_name
```


## django manage
```txt
django-admin startproject my_name

python manage.py startapp app_name

python manage.py makemigrations && python manage.py migrate
python manage.py collectstatic

python manage.py runserver
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
```bash
workers=$(nproc --all | awk -F " " '{print $1 * 2 + 1 }')

# 3 workers "pid"
gunicorn --chdir my_project --workers 3 --bind 0.0.0.0:8000 wsgi

# threads lightweight (less memory consumption)
gunicorn --chdir my_project --threads 3 --bind 0.0.0.0:8000 wsgi


# 1 worker
gunicorn --chdir my_project --bind 0.0.0.0:8000 wsgi

gunicorn --chdir my_project wsgi
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
