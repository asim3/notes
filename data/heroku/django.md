python manage.py
```shell
heroku run python manage.py makemigrations
heroku run python manage.py migrate -a _

heroku run python manage.py createsuperuser -a _
heroku run python manage.py shell -a _
heroku run python manage.py collectstatic -a _
```


app setup
```shell
pip install django-heroku gunicorn

echo "Django==2.1.4" >> requirements.txt
echo "django-heroku==0.3.1" >> requirements.txt
echo "gunicorn==19.9.0" >> requirements.txt
echo "python-3.7.1" >> runtime.txt

echo "web: gunicorn <project>.wsgi" >> Procfile
echo "web: gunicorn --chdir <folder> <project>.wsgi" >> Procfile
```


/settings.py
```python
import django_heroku
django_heroku.settings(locals())


STATIC_ROOT = os.path.join(BASE_DIR, "heroku_static")
```

