# Virtualization Environment

## check KVM Support
```bash
egrep -c '(vmx|svm)' /proc/cpuinfo
# 40


cat /proc/cpuinfo | egrep -c '(vmx|svm)'
# 40
```


## check KVM Support
```bash
sudo kvm-ok
# sudo: kvm-ok: command not found

sudo apt install cpu-checker

sudo kvm-ok
# INFO: /dev/kvm exists
# KVM acceleration can be used
```


## Install KVM
```bash
sudo apt install qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils

sudo apt install virt-manager


# Authorize Users
sudo adduser "$(whoami)" libvirt
sudo deluser "$(whoami)" libvirt
```

## check KVM
```bash
virsh list --all
#  Id   Name   State
# --------------------


# OR
sudo systemctl status libvirtd
```

## add new VM
```bash
# GUI
sudo virt-manager


# CLI
sudo virt-install \
    --name=MyNewVM \
    --memory 1024 \
    --vcpus 2 \
    --disk size=10 \
    --graphics vnc \
    --cdrom /home/asim/Downloads/iso/rhel-server-7.9-x86_64-dvd.iso 
```
