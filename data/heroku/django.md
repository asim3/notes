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
heroku run "cd _ && python manage.py migrate" -a _
heroku run "cd _ && python manage.py createsuperuser" -a _
heroku run "cd _ && python manage.py compilemessages" -a _
heroku run "cd _ && python manage.py shell" -a _
cd _ && 

heroku run " \
    cd _ && \
    python manage.py migrate && \
    python manage.py createsuperuser && \
    python manage.py compilemessages \
    " -a _
```
