# multi-project pipelines
[docs](https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#multi-project-pipelines)


## Upstream
```yml
build:
  stage: build
  environment: staging
  rules:
    - if: $CI_PIPELINE_SOURCE == "push" && $CI_COMMIT_BRANCH == "main"
      changes:
        - Dockerfile
    - if: $CI_PIPELINE_SOURCE == "push" && $CI_COMMIT_BRANCH == "main"
      changes:
        - src/**/*
  script:
    - docker image build -t $CI_REGISTRY_IMAGE:latest -t $CI_REGISTRY_IMAGE:v$CI_PIPELINE_IID .
    - echo $CI_REGISTRY_PASSWORD | docker login -u $CI_REGISTRY_USER --password-stdin $CI_REGISTRY
    - docker push $CI_REGISTRY_IMAGE:v$CI_PIPELINE_IID
    - docker push $CI_REGISTRY_IMAGE:latest
  after_script:
    - docker logout


Go To Downstream:
  stage: deploy
  rules:
    - if: $CI_PIPELINE_SOURCE == "push" && $CI_COMMIT_BRANCH == "main"
      changes:
        - Dockerfile
    - if: $CI_PIPELINE_SOURCE == "push" && $CI_COMMIT_BRANCH == "main"
      changes:
        - src/**/*
  trigger:
    project: asim/downstream
    branch: main
  variables:
    PIPELINE_PROJECT_NAME: $CI_PROJECT_NAME
    PIPELINE_IMAGE_TAG: v$CI_PIPELINE_IID
    PIPELINE_COMMIT_BRANCH: $CI_COMMIT_BRANCH
```


## Downstream
```yml
Update Stack Tag:
  stage: deploy
  environment: staging
  rules:
    - if: $CI_PIPELINE_SOURCE == "pipeline" && $PIPELINE_COMMIT_BRANCH == "main"
  before_script:
    - git config user.email "$GITLAB_USER_EMAIL"
    - git config user.name "Test CI Bot"
    - git remote add new_origin https://oauth2:${ACCESS_TOKEN}@gitlab.com/asim/downstream.git
  script:
    - python3 update-stack.py $PIPELINE_PROJECT_NAME $PIPELINE_IMAGE_TAG
    - git add stacks/$PIPELINE_PROJECT_NAME.yml
    - git commit -m "Update $PIPELINE_PROJECT_NAME Stack To $PIPELINE_IMAGE_TAG"
    - git push new_origin HEAD:main -o ci.skip # prevent triggering pipeline again
  after_script:
    - git remote remove new_origin 
```
