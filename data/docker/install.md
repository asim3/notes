## Docker Engine
Community package is now called docker-ce
## Docker Engine
Enterprise package is now called docker-ee


[install](https://docs.docker.com/engine/install/ubuntu/)


## Uninstall old versions
```txt
sudo apt-get remove docker docker-engine docker.io containerd runc
```


## dependency packages
```txt
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl gnupg2 software-properties-common
```


## Docker’s PUBLIC KEY
```txt
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Verify GPG PUBLIC KEY fingerprint
sudo apt-key fingerprint 0EBFCD88
```


## Docker stable repo
```txt
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```


## Install 
Docker Engine - Community
```txt
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io


sudo docker version

# Verify that docker-ce is installed correctly
sudo docker run hello-world
```
