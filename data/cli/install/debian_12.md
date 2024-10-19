## setting up Debian 12
```bash
cat /etc/apt/sources.list
sudo nano /etc/apt/sources.list

sudo apt -y update && sudo apt-get -y --fix-broken autoremove && sudo apt -y upgrade && sudo apt -y autoremove && sudo apt -y autoclean && echo Done.

sudo apt install -y git curl terminator


cat <<EOF >> ~/.bashrc
  alias uuu='set -x && sudo apt -y update && sudo apt-get -y --fix-broken autoremove && sudo apt -y upgrade && sudo apt -y autoremove && sudo apt -y autoclean && echo Done. && set +x;'
  alias ttt='rm -rf /tmp/asim-tmp-file/ 2> /dev/null; mkdir /tmp/asim-tmp-file/ && cd /tmp/asim-tmp-file/'
  alias ll='ls -alhF --color=auto'
  alias grep='grep --color=auto'
EOF
```


## hypervisor setup
```bash
lscpu | grep Virtual
# Virtualization: VT-x

sudo apt install -y \
  qemu-kvm \
  libvirt-daemon-system \
  libvirt-clients \
  bridge-utils \
  virtinst \
  libvirt-daemon \
  virt-manager

sudo systemctl status libvirtd

sudo virsh list --all
#  Id   Name   State
# --------------------

sudo virsh net-list
sudo virsh net-info default


sudo adduser $USER kvm
sudo adduser $USER libvirt
```


## install podman !!!
```bash
sudo apt install -y podman podman-compose podman-docker

docker version
# Emulate Docker CLI using podman. Create /etc/containers/nodocker to quiet msg.
# Client:       Podman Engine
# Version:      4.3.1
# API Version:  4.3.1
# Go Version:   go1.19.8
# Built:        Thu Jan  1 03:00:00 1970
# OS/Arch:      linux/amd64


docker stack deploy
# Error: unrecognized command `podman stack`

docker compose up
# Error: unrecognized command `podman compose`
```
