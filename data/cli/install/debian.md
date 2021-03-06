## install Debian
[Debian 10 Buster](https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/)
```bash
curl -LO https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS

# gnome
curl -LO https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-10.9.0-amd64-gnome.iso

# standard
curl -LO https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-10.9.0-amd64-standard.iso

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


## setting up Ubuntu
```bash
sudo apt install -y \
  gnome-tweaks \
  moka-icon-theme \
  curl \
  git

# add    settings > devices    > keyboard > switch windows = Alt+Tab
# open   tweaks   > appearance > themes   > applications > Adwaita-dark
# open   tweaks   > appearance > themes   > cursor       > DMZ-White
# open   tweaks   > appearance > themes   > icons        > Moka
```


## alias
```bash
cat <<EOF >> ~/.bashrc

  alias ls='ls --color=auto'
  alias ll='ls -alhF'
  alias lll='ls -lhF'
  alias la='ls -A'
  alias l='ls -CF'

  alias grep='grep --color=auto'
  alias fgrep='fgrep --color=auto'
  alias egrep='egrep --color=auto'
EOF
```


## github SSH port
```bash
cat <<EOF | sudo tee -a ~/.ssh/config
Host github.com
    Hostname ssh.github.com
    Port 443
EOF

cat <<EOF >> ~/.gitconfig`
[user]
	email = asim@gmail.com
	name = asim3
EOF
```
