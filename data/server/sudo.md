## Granting sudo Privileges to Users
```bash
sudo visudo

# /etc/sudoers.tmp

# after %sudo
asim    ALL=(ALL:ALL) NOPASSWD: ALL
asim    ALL=(ALL:ALL) NOPASSWD: /usr/bin/ansible
asim    ALL=(ALL:ALL) NOPASSWD: /usr/bin/docker

# user hostname=(runas-user:runas-group) command
```


## Granting sudo Privileges to Groups
```bash
# Allow members of group my-group to execute any command
%my-group   ALL=(ALL:ALL) ALL

# execute any command with no password
%my-group   ALL=(ALL:ALL) NOPASSWD: ALL

# execute docker command with no password
%my-group   ALL=(ALL:ALL) NOPASSWD: /usr/bin/docker
```


## add User to sudo
```bash
sudo adduser my-new-user sudo
```
