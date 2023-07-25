# multi-project pipelines
[docs](https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#multi-project-pipelines)


## upstream
```yml
build_3:
  stage: build
  script:
    - pwd
    - rm -Rf ./delete-3
    - mkdir ./delete-3
    - date > ./delete-3/by-asim.txt
  artifacts:
    paths:
      - delete-3

goto-downstream:
  stage: deploy
  variables:
    BY_ASIM: MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM3
  trigger:
    project: asimweb/delete-1
    branch: main
```


## downstream
```yml
build:
  stage: build
  script:
    - echo $CI_PIPELINE_SOURCE
    # pipeline
    - env
    # BY_ASIM=MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM3
  environment: staging


deploy:
  stage: deploy
  script:
    - echo $CI_PIPELINE_SOURCE
    # pipeline
  environment: staging by Asim
  when: manual
```
