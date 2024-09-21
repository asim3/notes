## info
```bash
# Group account information
cat /etc/group
cat /etc/group | grep asim

# Secure group account information
sudo cat /etc/gshadow
sudo cat /etc/gshadow | grep asim

# Shadow password suite configuration.
sudo cat /etc/login.defs
```


## add user
```bash
sudo adduser asim

# set a password
sudo passwd my-new-user
```


## list users
```bash
cat /etc/passwd

grep 'asim' /etc/passwd
```


## list group
```bash
cat /etc/group

# show USER groups
id

whoami
```


## add to group
```bash
sudo groupadd my_group

# -a, --append
sudo usermod -aG my_group $USER

# -G, --groups
sudo usermod -G adm,cdrom,sudo,dip,plugdev,kvm,lpadmin,lxd,sambashare,docker,libvirt,my_group $USER

# OR
sudo nano /etc/group


# OLD ====================================================
# add user to sudo group
sudo adduser $USER sudo

sudo adduser $USER docker
# will be update after logout


# add asim to my_group
sudo adduser asim my_group
```


## become other user
```bash
sudo -i
# OR
sudo -u root -s /bin/bash

sudo -u other-user -s /bin/bash

sudo -u other-user -s whoami
# other-user
```


## rename user
```bash
usermod -l new-name old-name

# or only update UID from 1000 to 1002

usermod -u 1002 old-name
```


## Delete user
```bash
# Debian and its derivatives
sudo deluser --remove-home my-new-user
sudo deluser --remove-home debian
sudo deluser --remove-home ubuntu


# RedHat/CentOS based systems
userdel --remove my-new-user
```
