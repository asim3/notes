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
sudo apk del .asim-package
```


## install Debian
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

/bin/sh <<EOF
sudo apt install -y bash-completion curl
sudo apt install -y gnome-tweaks
sudo apt install -y git-hub

# Navigation Dock
sudo apt install -y gnome-shell-extension-dashtodock

# Theme
sudo apt install -y dmz-cursor-theme moka-icon-theme

EOF
```

```txt
# then enable tweaks > extensions > Dash to Dock
# then open   tweaks > appearance > themes > applications > Adwaita-dark
# then open   tweaks > appearance > themes > cursor       > DMZ-White
# then open   tweaks > appearance > themes > icons        > Humanity
```

[Install virtualbox](https://www.virtualbox.org/wiki/Linux_Downloads)


## Automatic suspend
```bash
sudo nano /etc/gdm3/greeter.dconf-defaults
```


## Install RPM Package Directly on Ubuntu
```txt
sudo alien -i <name of package>.rpm
```


## Install RPM Packages On Ubuntu
```txt
sudo add-apt-repository universe
sudo apt-get update
sudo apt-get install -y alien

# convert .rpm package to .deb
sudo alien <name of package>.rpm
```


## install the Java Runtime Environment (JRE)
```txt
sudo apt install -y default-jre
java -version

sudo apt install -y default-jdk
javac -version
```
