## Install deb Package
```txt
sudo dpkg -i <name of package>.deb
```


## Extract tar file
```txt
tar -xf  my_archive.tar
tar -xzf my_archive.tar.gz

# print all files verbosely
tar -xvf my_archive.tar 
```


## Temporary Install
delete all 18 packages installed with the first command
```txt
sudo apk add --virtual .asim-package gcc vim

sudo apk del           .asim-package
```


## install Debian
[Debian 10 Buster](https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/)
```bash
curl -LO https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS

curl -LO https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-10.7.0-amd64-gnome.iso

sha256sum -c --ignore-missing SHA256SUMS
```


## setting up Debian
```bash
# open software & updates
# then enable downloadable from the internet

sudo apt install -y \
  bash-completion \
  curl \
  gnome-tweaks \
  git-hub \
  gnome-shell-extension-dashtodock \
  dmz-cursor-theme \
  moka-icon-theme

# enable tweaks   > extensions > Dash to Dock
# add    settings > devices    > keyboard > switch windows = Alt+Tab
# open   tweaks   > appearance > themes   > applications > Adwaita-dark
# open   tweaks   > appearance > themes   > cursor       > DMZ-White
# open   tweaks   > appearance > themes   > icons        > Humanity
```


## install Virtual Box
[Downloads](https://www.virtualbox.org/wiki/Linux_Downloads)
```bash
cd /tmp/ \
&& sudo echo 'install Virtual Box' \
&& sudo apt install -y libsdl1.2debian \
&& curl -LO 'https://download.virtualbox.org/virtualbox/6.1.18/virtualbox-6.1_6.1.18-142142~Debian~buster_amd64.deb' \
&& sudo dpkg -i virtualbox-6.1_6.1.18-142142~Debian~buster_amd64.deb \
&& echo Done.
```



## install VS Code
```bash
cd /tmp/ \
&& sudo echo 'install VS Code' \
&& curl -L 'https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64' -o /tmp/linux-deb-x64.deb \
&& sudo dpkg -i linux-deb-x64.deb \
&& echo Done.
```


## Install RPM Package Directly on Debian
```txt
sudo alien -i <name of package>.rpm
```


## Install RPM Packages On Debian
```txt
sudo add-apt-repository universe
sudo apt-get update
sudo apt-get install -y alien

# convert .rpm package to .deb
sudo alien <name of package>.rpm
```


## install the Java Runtime Environment (JRE)
```txt
sudo apt install -y default-jre default-jdk

java  -version
javac -version
```
