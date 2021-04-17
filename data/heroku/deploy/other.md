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
