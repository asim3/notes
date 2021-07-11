## Run
```bash
heroku run python manage.py makemigrations
heroku run python manage.py migrate -a __app__

heroku run python manage.py createsuperuser -a __app__
heroku run python manage.py shell -a __app__
heroku run python manage.py collectstatic -a __app__
```
