## Docker Engine - Community package is now called docker-ce
## Docker Engine - Enterprise package is now called docker-ee


[install](https://docs.docker.com/install/linux/docker-ce/debian/#install-using-the-repository)


## Uninstall old versions
```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
```


## Install dependency packages
```bash
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl gnupg2 software-properties-common


## download Docker’s GPG PUBLIC KEY
```
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Verify GPG PUBLIC KEY fingerprint
sudo apt-key fingerprint 0EBFCD88
```


## Add Docker stable repository
```bash
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```


## Install Docker Engine - Community
```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io


sudo docker version

# Verify that docker-ce is installed correctly
sudo docker run hello-world
```
