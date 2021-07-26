## Upgrading Postgres
> Upgrading your major PostgreSQL version only via the `Heroku CLI`
```bash
# $50/month
heroku addons:create heroku-postgresql:standard-0 -a my-production


# notify me when complete
heroku pg:wait -a my-production
# Waiting for database postgresql-objective-77727... available


# Maintenance mode
heroku maintenance:on -a ataa-production


heroku addons -a ataa-production
# Add-on                                            Plan         Price      State  
# ────────────────────────────────────────────────  ───────────  ─────────  ───────
# heroku-postgresql (postgresql-trapezoidal-15099)  hobby-basic  $9/month   created
#  └─ as HEROKU_POSTGRESQL_ONYX

# heroku-postgresql (postgresql-cubed-23371)        hobby-dev    free       created
#  └─ as DATABASE

# heroku-postgresql (postgresql-objective-77727)    standard-0   $50/month  created
#  └─ as HEROKU_POSTGRESQL_PUCE


# copy
heroku pg:copy DATABASE HEROKU_POSTGRESQL_PUCE -a ataa-production


heroku pg:promote HEROKU_POSTGRESQL_PUCE -a ataa-production


heroku maintenance:off -a ataa-production

# delete old
heroku addons:destroy HEROKU_POSTGRESQL_ONYX -a ataa-production
```


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
heroku addons:upgrade postgresql-curly-89184:standard-0

heroku addons:downgrade
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
