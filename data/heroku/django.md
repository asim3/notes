`nano requirements.txt`
```txt
Django
django-heroku
gunicorn
```
> fix postgresql by:
> - sudo apt install -y libpq-dev 


`nano runtime.txt`
```txt
python-3.7.1
```


`nano Procfile`
```bash
web: gunicorn <project>.wsgi
# OR
web: gunicorn --chdir <folder> <project>.wsgi
```


`settings.py`
```python
import django_heroku


django_heroku.settings(locals())

STATIC_ROOT = os.path.join(BASE_DIR, "heroku_static")
```


## Run
```txt
heroku run python manage.py makemigrations
heroku run python manage.py migrate -a _

heroku run python manage.py createsuperuser -a _
heroku run python manage.py shell -a _
heroku run python manage.py collectstatic -a _
```
