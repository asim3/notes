# Configuring
`nano  heroku.yml`

# !!!

## add-ons
```yaml
setup:
  addons:
  - plan: heroku-postgresql
    as: DATABASE
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
