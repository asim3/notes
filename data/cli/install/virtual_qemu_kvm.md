[docs](https://wiki.qemu.org/Category:User_documentations)

## install QEMU
```bash
# check processor support
lscpu | grep Virtual
# Virtualization: VT-x


sudo apt install qemu-kvm

# Libvirt daemon configuration files
sudo apt install libvirt-daemon-system 

# Programs for the libvirt library
sudo apt install libvirt-clients

sudo adduser $USER kvm

sudo reboot


# desktop application for managing virtual machines
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
