## upstream
```yml
include:
  project: new-group-by-asim/pipeline
  ref: main
  file:
    - downstream/swarm.yml
    - downstream/echo.yml
```



## downstream
```yml
build:
  stage: build
  script:
    - env

deploy-development:
  stage: deploy
  environment: env-dev-name
  script:
    - ls -al
    - env

deploy-staging:
  stage: deploy
  environment: env-stag-name
  script:
    - ls -al
    - env

deploy-production:
  stage: deploy
  environment: env-prod-name
  script:
    - ls -al
    - env
  when: manual
```
