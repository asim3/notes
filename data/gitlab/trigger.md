# multi-project pipelines
[docs](https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#multi-project-pipelines)


## upstream
```yml
upstream build:
  stage: build
  script:
    - pwd

Go To Downstream:
  stage: deploy
  variables:
    JOB_NAME: $CI_JOB_NAME
    COMMIT_BRANCH: $CI_COMMIT_BRANCH
    PROJECT_NAME: $CI_PROJECT_NAME
    PROJECT_NAMESPACE: $CI_PROJECT_NAMESPACE
    BY_ASIM: Env By Asim
  trigger:
    project: asimweb/delete-1
    branch: main
```


## downstream
```yml
deploy:
  stage: deploy
  rules:
    - if: $CI_PIPELINE_SOURCE == "pipeline"
  script:
    - echo $CI_PIPELINE_SOURCE
    # pipeline
    - echo $JOB_NAME
    # Go To Downstream
    - echo $COMMIT_BRANCH
    # main
    - echo $PROJECT_NAME
    # test-ci-cd
    - echo $PROJECT_NAMESPACE
    # asimweb
    - echo $BY_ASIM
    # Env By Asim
  environment: staging
```
