[docs](https://devcenter.heroku.com/articles/build-docker-images-heroku-yml)

## Building with Dockerfile
Build your Docker images with heroku.yml


## Dockerfile
`cat <<eof > ./heroku.yml`
```yaml
build:
  docker:
    web: Dockerfile
run:
  web: bundle exec puma -C config/puma.rb
```
> If you don’t include a `run` section,
> Heroku uses the `CMD` specified in the `Dockerfile`.



## Commit
```bash
heroku stack:set container

git push heroku master
```


# Overview
`nano  heroku.yml`

## setup
```yaml
setup:
  addons:
    - plan: heroku-postgresql
      as: DATABASE
  config:
    S3_BUCKET: my-example-bucket
```


## build
```yaml
build:
  docker:
    web: Dockerfile
    worker: worker/Dockerfile
  config:
    RAILS_ENV: development
    FOO: bar
```


## release
```yaml
release:
  command:
    - ./deployment-tasks.sh
  image: worker
```


## run
```yaml
run:
  web: bundle exec puma -C config/puma.rb
  worker: python myworker.py
  asset-syncer:
    command:
      - python asset-syncer.py
    image: worker
```
