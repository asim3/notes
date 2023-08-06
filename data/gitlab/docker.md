## GitLab Registry
```yml
build:
  stage: build
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
      changes:
        - Dockerfile
        - src/*
  script:
    - docker image build -t $CI_REGISTRY_IMAGE:latest -t $CI_REGISTRY_IMAGE:v$CI_PIPELINE_IID .
    - echo $CI_REGISTRY_PASSWORD | docker login -u $CI_REGISTRY_USER --password-stdin $CI_REGISTRY
    - docker push $CI_REGISTRY_IMAGE:v$CI_PIPELINE_IID
    - docker push $CI_REGISTRY_IMAGE:latest
  after_script:
    - docker logout
```


## Docker Hub Registry
```yml
build:
  stage: build
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
      changes:
        - Dockerfile
        - src/*
  script:
    - docker image build -t asim3/swarmcd:latest -t asim3/swarmcd:v$CI_PIPELINE_IID .
    - echo $Docker_Access_Token | docker login -u asim3 --password-stdin
    - docker push asim3/swarmcd:v$CI_PIPELINE_IID
    - docker push asim3/swarmcd:latest
  after_script:
    - docker logout
```
