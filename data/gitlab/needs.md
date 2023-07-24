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
