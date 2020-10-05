[docker app](https://github.com/docker/app)
[porter](https://porter.sh/)
[CNAB](https://cnab.io/)


## install
```
curl -fL https://github.com/docker/app/releases/download/v0.8.0/docker-app-linux.tar.gz -o /tmp/docker-app-linux.tar.gz

tar xf /tmp/docker-app-linux.tar.gz

# install as a Docker CLI plugin
mkdir -p ~/.docker/cli-plugins
cp "/tmp/docker-app-plugin-$(uname | tr A-Z a-z)" ~/.docker/cli-plugins/docker-app
```

## !!

```txt
docker app init hello-world

sudo docker-app inspect
```
