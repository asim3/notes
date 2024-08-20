## Linux Desktop Environments
- GNOME Desktop Environment
- KDE Desktop Environment
- MATE Desktop Environment
- LXDE Desktop Environment
- Enlightenment Desktop Environment
- Deepin Desktop Environment
- Cinnamon Desktop Environment
- Budgie Desktop Environment


## GNOME @ `apt`
```bash
sudo apt update
sudo apt install ubuntu-desktop-minimal

# Vanilla GNOME
sudo apt install vanilla-gnome-desktop vanilla-gnome-default-settings
```


## GNOME @ `yum`
```bash
sudo yum update
sudo yum -y groups install "Workstation"
# sudo yum -y groups install "Server with GUI"

startx 
# OR
sudo systemctl set-default graphical.target
```


## KDE @ `yum`
```bash
sudo yum update
sudo yum groupinstall "KDE Plasma Workspaces"

startkde
# OR
sudo systemctl set-default graphical.target
```

