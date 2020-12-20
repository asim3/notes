```txt
heroku -v
heroku login
heroku apps
heroku create _
heroku git:clone -a _
heroku git:remote -a _
heroku apps:destroy -a _
```


## Run app locally
```txt
heroku local web
```


## push to heroku
```txt
git push heroku master

heroku open
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
