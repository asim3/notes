## Docker executor: node
`nano .gitlab-ci.yml`
```yml
stages:
  - deploy

# Using Docker executor with image node:23-bookworm
image: node:23-bookworm

Deploy Staging:
  stage: deploy
  # Using Docker executor with image python:3.12-bookworm
  # image: python:3.9-bookworm
  before_script:
    - whoami
    # root
    - echo $CI_PIPELINE_IID
  script:
    - python3 --version
    # Python 3.12.8
    - pwd
    # /builds/qu-devops/qu-ansible-playbooks
    - rm -Rf ~/delete-1
    - mkdir ~/delete-1
    - cd ~/delete-1
    - pwd
    # /root/delete-1
```


## Docker Executor
`nano .gitlab-ci.yml`
```yml
stages:
  - deploy

image: docker:27-cli

services:
  - docker:27-dind

Deploy Staging:
  stage: deploy
  before_script:
    - whoami
    # root
    - echo $CI_PIPELINE_IID
  script:
    - docker image ls -a
    - docker version
```
