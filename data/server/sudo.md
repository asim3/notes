## Granting sudo Privileges to Users
```txt
sudo visudo

# /etc/sudoers.tmp

# after %sudo
asim    ALL=(ALL:ALL) NOPASSWD: ALL
asim    ALL=(ALL:ALL) NOPASSWD: /usr/bin/ansible
asim    ALL=(ALL:ALL) NOPASSWD: /usr/bin/docker

# user hostname=(runas-user:runas-group) command
```


## add User to sudo
```txt
sudo adduser my-new-user sudo
```
