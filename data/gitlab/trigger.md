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
    IMAGE_NAME: ${CI_REGISTRY_IMAGE}:v${CI_PIPELINE_IID}
    REGISTRY_USER: $CI_REGISTRY_USER
    REGISTRY_PASSWORD: $CI_REGISTRY_PASSWORD
    JOB_NAME: $CI_JOB_NAME
    COMMIT_BRANCH: $CI_COMMIT_BRANCH
    PROJECT_NAME: $CI_PROJECT_NAME
    PROJECT_NAMESPACE: $CI_PROJECT_NAMESPACE
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
    - echo $IMAGE_NAME
    # registry.gitlab.com/asimweb/test-ci-cd:v55
    - echo $REGISTRY_USER
    # 
    - echo $REGISTRY_PASSWORD
    # 
    - echo $JOB_NAME
    # Go To Downstream
    - echo $COMMIT_BRANCH
    # main
    - echo $PROJECT_NAME
    # test-ci-cd
    - echo $PROJECT_NAMESPACE
    # asimweb
  environment: staging
```
