[install](https://docs.docker.com/compose/install)
```bash
sudo apt  install docker-compose
```


```bash
compose_version='1.25.4'

cd /tmp/ \
&& sudo echo 'update compose to ' $compose_version \
&& curl -fLO https://github.com/docker/compose/releases/download/$compose_version/docker-compose-Linux-x86_64 \
&& curl -fLO https://github.com/docker/compose/releases/download/$compose_version/docker-compose-Linux-x86_64.sha256 \
&& sha256sum --ignore-missing -c ./docker-compose-Linux-x86_64.sha256 \
&& chmod +x ./docker-compose-Linux-x86_64 \
&& sudo mv ./docker-compose-Linux-x86_64 /usr/local/bin/docker-compose \
&& echo 'done updating compose'


docker-compose version
```
