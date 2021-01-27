## Install deb Package
```txt
sudo dpkg -i <name of package>.deb
```


## Unpack an archive
```txt
tar -xzf Postman.tar.gz 
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

sudo apt install -y bash-completion curl gnome-tweaks git-hub

# Navigation Dock
sudo apt install -y gnome-shell-extension-dashtodock

# Theme
sudo apt install -y dmz-cursor-theme moka-icon-theme

# then enable tweaks > extensions > Dash to Dock
# then open   tweaks > appearance > themes > applications > Adwaita-dark
# then open   tweaks > appearance > themes > cursor       > DMZ-White
# then open   tweaks > appearance > themes > icons        > Humanity
```

[Install virtualbox](https://www.virtualbox.org/wiki/Linux_Downloads)

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
