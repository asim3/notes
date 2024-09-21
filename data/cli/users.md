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
# add user to sudo group
sudo adduser $USER sudo

sudo adduser $USER docker
# will be update after logout


# add asim to my_group
sudo adduser asim my_group
# OR
sudo usermod -aG my_group asim

# AlmaLinux
sudo usermod -G my_group $USER
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
