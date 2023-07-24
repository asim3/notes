## multi-project pipelines
[docs](https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#multi-project-pipelines)


## upstream
```yml
stages:
  - build
  - deploy

build:
  stage: build
  script:
    - pwd
    - rm -Rf ./delete-1
    - mkdir ./delete-1
    - date > ./delete-1/by-asim.txt
  artifacts:
    paths:
      - delete-1/by-asim.txt

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
