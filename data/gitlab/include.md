## upstream
```yml
include:
  project: asimweb/downstream
  file: .gitlab-ci.yml

stages:
  - build
  - deploy
```



## downstream
```yml
stages:
  - build
  - deploy

build:
  stage: build
  tags:
  - asim
  script:
    - env

deploy-development:
  stage: deploy
  tags:
  - asim
  environment: env-dev-name
  script:
    - ls -al
    - env

deploy-staging:
  stage: deploy
  tags:
  - asim
  environment: env-stag-name
  script:
    - ls -al
    - env

deploy-production:
  stage: deploy
  tags:
  - asim
  environment: env-prod-name
  script:
    - ls -al
    - env
  when: manual
```
