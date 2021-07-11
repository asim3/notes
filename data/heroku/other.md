## Run app locally
```txt
heroku local web
```


## database info
```txt
heroku pg:info -a __app__
watch "heroku pg:info -a __app__"
```


## scale Dynos
```txt
heroku ps:scale web=1 -a __app__
```


## other
```txt
heroku access -a kfupm-pledge
```
