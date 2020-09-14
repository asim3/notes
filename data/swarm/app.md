[docker app](https://github.com/docker/app)
[porter](https://porter.sh/)
[CNAB](https://cnab.io/)


## install
```
curl -fSL --output "/tmp/docker-app-$(uname | tr A-Z a-z).tar.gz" "https://github.com/docker/app/releases/download/v0.8.0/docker-app-$(uname | tr A-Z a-z).tar.gz"

# extract tar file
tar xf "/tmp/docker-app-$(uname | tr A-Z a-z).tar.gz" -C /tmp/

# install as a Docker CLI plugin
mkdir -p ~/.docker/cli-plugins
cp "/tmp/docker-app-plugin-$(uname | tr A-Z a-z)" ~/.docker/cli-plugins/docker-app
```

## !!

```txt
docker app init hello-world

sudo docker-app inspect
```
