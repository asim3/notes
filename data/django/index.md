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
```
