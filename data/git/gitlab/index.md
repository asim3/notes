## CI
`nano .gitlab-ci.yml`
```yml
image: node:23-bookworm
stages:
  - build
  - test
  - deploy

build-job:
  stage: build
  script:
    - whoami
    - pwd
    - python3 --version

deploy-staging:
  stage: deploy
  environment: my-new-staging-2
  image: alpine:latest
  before_script:
    - whoami
    - apk add git
  script:
    - echo $CI_PIPELINE_IID
    - pwd
    - rm -Rf ~/delete-1
    - mkdir ~/delete-1
    - cd ~/delete-1
    - pwd
```


## IF
`nano .gitlab-ci.yml`
```yml
Deploy Production:
  stage: deploy
  environment: production
  tags:
    - asim
  script: 
    - make production
  # Rules are evaluated in order until the first True.
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
      when: never
    - if: $CI_COMMIT_BRANCH == "prod"
      when: manual
    - if: $CI_PIPELINE_SOURCE == "push" && $CI_COMMIT_BRANCH == "main"
    - if: $CI_COMMIT_BRANCH == "main"
    - if: $CI_COMMIT_BRANCH == "development"
    - if: $CI_COMMIT_BRANCH == "staging"
    - if: $CI_COMMIT_BRANCH == "production"
  retry: 2
  # retry: Defaults to 0 and can max be retried 2 times (3 times total).
  allow_failure: false
```


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


## Docker-in-Docker (DinD)
```yml
stages:
  - build

docker-build:
  image: docker:cli
  stage: build
  # Run the Docker daemon as a service
  services:
    - docker:dind
  variables:
    DOCKER_IMAGE_NAME: $CI_REGISTRY_IMAGE:$CI_COMMIT_REF_SLUG
    # registry.gitlab.com/asim/my-repository:main
  script:
    - whoami
    - docker run hello-world
    - echo $DOCKER_IMAGE_NAME
    - docker compose version
    # Docker Compose version v5.0.2
```
