## install gitlab-runner
```bash
# redhat
curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.rpm.sh" -o script.rpm.sh

sudo bash script.rpm.sh

sudo yum update

sudo yum install gitlab-runner

sudo gitlab-runner list
# Runtime platform                                    arch=amd64 os=linux version=18.8.0
# Listing configured runners                          ConfigFile=/etc/gitlab-runner/config.toml
```


## install runner service
```bash
# redhat
sudo useradd -c "GitLab Runner" gitlab-runner
# sudo useradd -c "GitLab Runner" -G "wheel" gitlab-runner
# sudo adduser --shell /bin/bash --uid 1000 --group --disabled-password --disabled-login gitlab-runner
# sudo adduser --disabled-password gitlab-runner

sudo mkdir -p /home/gitlab-runner/runner-data/
sudo chown -R gitlab-runner:gitlab-runner /home/gitlab-runner
sudo mv /home/gitlab-runner/.bash_logout /home/gitlab-runner/.bash_logout.old

sudo gitlab-runner install \
  --user=gitlab-runner \
  --working-directory=/home/gitlab-runner/runner-data \
  -c /home/gitlab-runner/.gitlab-runner/config.toml


sudo chown -R gitlab-runner:gitlab-runner /home/gitlab-runner/.gitlab-runner


sudo -u gitlab-runner /bin/bash
gitlab-runner register  --url https://gitlab.asimt.sa  --token gabc-abcdefg
# Enter the GitLab instance URL (for example, https://gitlab.com/):
# Verifying runner... is valid                        runner=dvms7mD6z
# Enter a name for the runner. This is stored only in the local config.toml file:
# Enter an executor: parallels, virtualbox, docker-windows, docker-autoscaler, instance, custom, shell, ssh, docker, docker+machine, kubernetes:
# Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded!


sudo systemctl status gitlab-runner
```


[install docker](https://docs.docker.com/engine/install/rhel/)


## configuration file
```bash
sudo cat /etc/gitlab-runner/config.toml

cat /etc/systemd/system/gitlab-runner.service
```


## Logs
```bash
journalctl -u gitlab-runner
journalctl -u gitlab-runner -f
journalctl -u gitlab-runner.service -f
```


## uninstall runner service
```bash
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
