## upstream
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
    - ls -al
  artifacts:
    paths:
      - server.php

deploy-development:
  stage: deploy
  tags:
  - asim
  environment: env-dev-name
  script:
    - env
    - ls -al

goto-downstream:
  stage: deploy
  trigger:
    project: asimweb/downstream
    branch: main
    strategy: depend
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
    - ls -al

deploy-development:
  stage: deploy
  tags:
  - asim
  environment: env-dev-name
  script:
    - env
    - ls -al
  needs:
    - project: asimweb/courses
      job: build
      ref: main
      artifacts: true

deploy-staging:
  stage: deploy
  tags:
  - asim
  environment: env-stag-name
  script:
    - env
    - ls -al

deploy-production:
  stage: deploy
  tags:
  - asim
  environment: env-prod-name
  script:
    - env
    - ls -al
  when: manual
```
