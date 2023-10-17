# Virtualization Environment
[docs](https://wiki.qemu.org/Category:User_documentations)

## check processor support
```bash
lscpu | grep Virtual
# Virtualization: VT-x
```


## install QEMU kvm2
```bash
sudo adduser $USER kvm
sudo adduser $USER libvirt

sudo apt install qemu-kvm

# Libvirt daemon configuration files
sudo apt install libvirt-daemon-system 

# Programs for the libvirt library
sudo apt install libvirt-clients

# Utilities for configuring the Linux Ethernet bridge
sudo apt install bridge-utils

sudo reboot


# desktop app for managing virtual machines
sudo apt install virt-manager

# sudo apt install qemu-system-gui
# sudo apt install qemu-system-data
```


## list all VM
```bash
virsh list --all
#  Id   Name   State
# --------------------
```


## check KVM
```bash
sudo systemctl status libvirtd
```


## add new VM CLI
```bash
sudo virt-install \
    --name=MyNewVM \
    --memory 1024 \
    --vcpus 2 \
    --disk size=10 \
    --graphics vnc \
    --cdrom /home/asim/Downloads/iso/rhel-server-7.9-x86_64-dvd.iso 
```
