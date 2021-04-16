## Run app locally
```txt
heroku local web
```


## database info
```txt
heroku pg:info -a _
watch "heroku pg:info -a _"
```


## scale Dynos
```txt
heroku ps:scale web=1 -a _
```


## Run
```txt
heroku run python manage.py makemigrations
heroku run python manage.py migrate -a _

heroku run python manage.py createsuperuser -a _
heroku run python manage.py shell -a _
heroku run python manage.py collectstatic -a _
```


## other
```txt
heroku access -a kfupm-pledge
```
