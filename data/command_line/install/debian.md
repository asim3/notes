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
# open   tweaks   > appearance > themes   > icons        > Moka
```
