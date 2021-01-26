[Debian 10 Buster](https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/)

```bash
mkdir /tmp/debian
cd /tmp/debian
curl -LO https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS

# cinnamon
curl -LO https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-10.7.0-amd64-cinnamon.iso

# gnome
curl -LO https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-10.7.0-amd64-gnome.iso

grep amd64-cinnamon.iso SHA256SUMS | sha256sum -c
grep amd64-gnome.iso SHA256SUMS | sha256sum -c
```


## setting up Debian
```bash
# open software & updates
# then enable downloadable from the internet

sudo apt install -y bash-completion

sudo apt install -y gnome-tweaks 
# then enable tweaks > extensions > applications menu

# Theme
sudo apt install -y dmz-cursor-theme humanity-icon-theme
# then open tweaks > appearance > themes > applications > Adwaita-dark
# then open tweaks > appearance > themes > cursor       > DMZ-White
# then open tweaks > appearance > themes > icons        > Humanity

sudo apt install -y gnome-shell-extension-dashtodock
# then enable tweaks > extensions > Dash to Dock
```


## Unpack an archive
```txt
tar -xzf Postman.tar.gz 
```


## Temporary Install
delete all 18 packages installed with the first command
```txt
sudo apk add --virtual .asim-package gcc vim
sudo apk del .asim-package
```


## Install virtualbox
```txt
sudo apt update
apt show virtualbox
sudo apt install -y virtualbox
```


## Install RPM Packages On Ubuntu
```txt
# setup
sudo add-apt-repository universe
sudo apt-get update
sudo apt-get install -y alien

# convert .rpm package to .deb
sudo alien <name of package>.rpm
```


## Install deb Package On Ubuntu
```txt
sudo dpkg -i <name of package>.deb
```


## Install RPM Package Directly on Ubuntu
```txt
sudo alien -i <name of package>.rpm
```


## install the Java Runtime Environment (JRE)
```txt
sudo apt install -y default-jre
java -version

sudo apt install -y default-jdk
javac -version
```


## Installing the Oracle JDK
```txt
# ???? not working
# add its package repository
sudo add-apt-repository ppa:webupd8team/java
sudo apt update

sudo apt install -y oracle-java8-installer
```
