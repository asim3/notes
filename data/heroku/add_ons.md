## List all
```bash
heroku addons

heroku addons:info postgresql-curly-89184
heroku addons:info postgresql-trapezoidal-44118
```


## list available add-on
```bash
heroku addons:services

# price
heroku addons:plans heroku-postgresql
heroku addons:plans deadmanssnitch
```


## upgrade
```bash
heroku addons:upgrade

heroku addons:downgrade
```


## Heroku Postgres
```bash
heroku addons:create heroku-postgresql:hobby-basic
heroku addons:create heroku-postgresql:standard-0
heroku addons:create heroku-postgresql:standard-2
```


## attach
attach an existing add-on resource to an app
```bash
heroku addons:attach
heroku addons:detach

```


## add & remove
```bash
heroku addons:create

heroku addons:destroy

heroku addons:rename
```
