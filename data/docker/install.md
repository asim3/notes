[install](https://docs.docker.com/engine/install/ubuntu/)

**Docker Engine**: Community package is now called docker-ce

**Docker Engine**: Enterprise package is now called docker-ee


## Install with apt
```bash
for pkg in docker docker-engine docker.io docker-compose docker-doc podman-docker containerd runc; do sudo apt-get remove $pkg; done


distributor=debian \
&& distributor_release=bookworm \
&& sudo apt-get -y update \
&& sudo apt-get -y install ca-certificates curl \
&& sudo curl -Lf https://download.docker.com/linux/$distributor/gpg -o /etc/apt/trusted.gpg.d/docker.asc \
&& echo "deb [arch=amd64] https://download.docker.com/linux/$distributor $distributor_release stable" \
|  sudo tee /etc/apt/sources.list.d/docker.list \
&& sudo chmod 644 /etc/apt/sources.list.d/docker.list \
&& sudo apt-get -y update \
&& sudo apt-get -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin \
&& sudo usermod -aG docker $USER \
&& echo "done."

# Reboot the system.

docker version
```


## Docker's PUBLIC KEY (old!!!)
```txt
curl -Lf https://download.docker.com/linux/${distributor,,}/gpg -o /tmp/gpg
sudo apt-key add /tmp/gpg

# Verify GPG PUBLIC KEY fingerprint
sudo apt-key fingerprint 0EBFCD88

# pub   rsa4096 2017-02-22 [SCEA]
#       9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
# uid   [ unknown] Docker Release (CE deb) <docker@docker.com>
# sub   rsa4096 2017-02-22 [S]
```
