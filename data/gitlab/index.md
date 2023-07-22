## install service
```bash
sudo adduser --disabled-password gitlab-runner

sudo mkdir -p /home/gitlab-runner/runner-data/

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


# user: gitlab-runner
sudo -u gitlab-runner /bin/bash
gitlab-runner register  --url https://gitlab.com  --token qqqwwweeerrr
```


## Logs
```bash
journalctl -u gitlab-runner

journalctl -u gitlab-runner -f
```
