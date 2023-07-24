## CI
```yaml
stages:
  - deploy


Deploy Staging:
  stage: deploy
  tags:
    - docker
  before_script:
    - apk add git
  script:
    - echo $CI_PIPELINE_IID
    - whoami
    - pwd
    - rm -Rf ~/delete-1
    - mkdir ~/delete-1
    - cd ~/delete-1
    - pwd
  environment:
    name: staging-2
    url: https://staging-x.asim.com
```


## install service
```bash
sudo adduser --disabled-password gitlab-runner

sudo mkdir -p /home/gitlab-runner/runner-data/
sudo chown -R gitlab-runner:gitlab-runner /home/gitlab-runner
sudo mv /home/gitlab-runner/.bash_logout /home/gitlab-runner/.bash_logout.old

sudo gitlab-runner install \
  --user=gitlab-runner \
  --working-directory=/home/gitlab-runner/runner-data \
  -c /home/gitlab-runner/.gitlab-runner/config.toml


# uninstall service
sudo gitlab-runner uninstall

# start service
sudo gitlab-runner start
sudo gitlab-runner stop
sudo gitlab-runner restart


sudo gitlab-runner status
# OR
sudo systemctl status gitlab-runner
```


## register
register a new runner
```bash
gitlab-runner list

sudo -u gitlab-runner gitlab-runner list
sudo -u gitlab-runner /bin/bash


# user: gitlab-runner
gitlab-runner register
# OR
gitlab-runner register  --url https://gitlab.com  --token qqqwwweeerrr
```


## Logs
```bash
journalctl -u gitlab-runner

journalctl -u gitlab-runner -f
```
