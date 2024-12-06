## needs
```yaml
stages:
  - Staging
  - Production_1
  - Production_2
  - Production_3

Deploy to Staging:
  stage: Staging
  environment: Staging
  tags: ["asim"]
  script:
    - echo Staging

Deploy to Production - Host 1:
  stage: Production_1
  environment: Production-1
  tags: ["asim"]
  script:
    - echo Production-1
  when: manual
  allow_failure: false

Deploy to Production - Host 2:
  stage: Production_2
  environment: Production-2
  tags: ["asim"]
  script:
    - echo Production-2
  needs:
    - Deploy to Production - Host 1
  when: on_success

Deploy to Production - Host 3:
  stage: Production_3
  environment: Production-3
  tags: ["asim"]
  script:
    - echo Production-3
  needs:
    - Deploy to Production - Host 2
  when: on_success
```


## artifacts
```yaml
linux build:
  stage: build
  script:
    - date > by-linux-build.txt
    - pwd; ls -al
  artifacts:
    paths:
      - by-linux-build.txt


linux rspec:
  stage: test
  script:
    - date > by-linux-rspec.txt
    - pwd; ls -al
    # drwxrwxr-x 5 gitlab-runner gitlab-runner 4096 Jul 25 00:07 .git
    # -rw-rw-r-- 1 gitlab-runner gitlab-runner  345 Jul 25 00:07 .gitlab-ci.yml
    # -rw-rw-r-- 1 gitlab-runner gitlab-runner 6165 Jul 24 23:46 README.md
    # -rw-rw-r-- 1 gitlab-runner gitlab-runner   29 Jul 25 00:07 by-linux-build.txt
    # -rw-rw-r-- 1 gitlab-runner gitlab-runner   29 Jul 25 00:07 by-linux-rspec.txt
  needs: 
    - linux build


production:
  stage: deploy
  script:
    - date > by-production.txt
    - pwd; ls -al
    # drwxrwxr-x 5 gitlab-runner gitlab-runner 4096 Jul 25 00:09 .git
    # -rw-rw-r-- 1 gitlab-runner gitlab-runner  345 Jul 25 00:07 .gitlab-ci.yml
    # -rw-rw-r-- 1 gitlab-runner gitlab-runner 6165 Jul 24 23:46 README.md
    # -rw-rw-r-- 1 gitlab-runner gitlab-runner   29 Jul 25 00:07 by-linux-build.txt
    # -rw-rw-r-- 1 gitlab-runner gitlab-runner   29 Jul 25 00:09 by-production.txt
```
