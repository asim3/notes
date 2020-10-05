[install](https://docs.docker.com/compose/install)


```txt
curl -fLO https://github.com/docker/compose/releases/download/1.25.4/docker-compose-Linux-x86_64
curl -fLO https://github.com/docker/compose/releases/download/1.25.4/docker-compose-Linux-x86_64.sha256

sha256sum --ignore-missing -c ./docker-compose-Linux-x86_64.sha256 &&
rm                            ./docker-compose-Linux-x86_64.sha256 && 
chmod +x ./docker-compose-Linux-x86_64 &&
sudo mv ./docker-compose-Linux-x86_64 /usr/local/bin/docker-compose
```


```txt
docker-compose version
```
