[install](https://docs.docker.com/engine/install/ubuntu/)

**Docker Engine**: Community package is now called docker-ce

**Docker Engine**: Enterprise package is now called docker-ee


## Install
```bash
distributor=$(lsb_release -is)

sudo apt-get -y remove docker docker-engine docker.io runc \
&& sudo apt-get -y update \
&& sudo apt-get install -y apt-transport-https ca-certificates curl gnupg2 software-properties-common \
&& curl -Lf https://download.docker.com/linux/${distributor,,}/gpg -o /tmp/gpg \
&& sudo apt-key add /tmp/gpg \
&& sudo apt-key fingerprint 0EBFCD88 \
&& sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/${distributor,,} $(lsb_release -cs) stable" \
&& sudo apt-get -y update \
&& sudo apt-get install -y docker-ce docker-ce-cli containerd.io \
&& echo "done installing docker $(sudo docker version --format='{{.Client.Version}}')"

sudo docker version
sudo docker version --format='{{.Client.Version}}'
```


## Uninstall old versions
```txt
sudo apt-get remove docker docker-engine docker.io containerd runc
```


## dependency packages
```txt
sudo apt-get update \
&& sudo apt-get install -y apt-transport-https ca-certificates curl gnupg2 software-properties-common
```


## Docker’s PUBLIC KEY
```txt
distributor=$(lsb_release -is)

curl -Lf https://download.docker.com/linux/${distributor,,}/gpg -o /tmp/gpg
sudo apt-key add /tmp/gpg

# Verify GPG PUBLIC KEY fingerprint
sudo apt-key fingerprint 0EBFCD88

# pub   rsa4096 2017-02-22 [SCEA]
#       9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
# uid   [ unknown] Docker Release (CE deb) <docker@docker.com>
# sub   rsa4096 2017-02-22 [S]
```


## Docker stable repo
```txt
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```


## Install
Docker Engine - Community
```txt
sudo apt-get update \
&& sudo apt-get install -y docker-ce docker-ce-cli containerd.io

sudo docker version
```


## hello-world
Verify that docker-ce is installed correctly
```bash
sudo docker run hello-world
```

## version
```bash
sudo docker version --format '{{.Server.Version}}'
sudo docker version --format='{{.Client.Version}}'
sudo docker version --format='{{.Client.Context}}'
sudo docker version --format '{{json .}}'
```
