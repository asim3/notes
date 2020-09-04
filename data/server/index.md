Get Server IP 
```  bash
ip route
# ... kernel scope link src 190.168.my.local.ip 
ifconfig
```


[My Public IP](https://ifconfig.co/ip)


Login to Server
```  bash
ssh username@server.ip

# run bash on remote server
ssh username@remote.server.ip 'pwd'
ssh username@remote.server.ip 'ls -al'
```


Add a New User
```  bash
# useradd is a low level utility for adding users. 
# sudo useradd -m my-new-user
# On Debian, administrators should usually use adduser(8) instead.

sudo adduser my-new-user

# set a password
sudo passwd my-new-user

# add User to sudo
sudo adduser my-new-user sudo

# switch user
su - my-new-user
```


change hostname
```  bash
hostnamectl set-hostname my-test-server
cat /etc/hostname 

# change hostname ip
sudo nano /etc/hosts
127.0.0.1       localhost
192.168.1.1     my-test-server
192.168.100.44  my-admin-server
```


Granting sudo Privileges to Users
```  bash
sudo visudo

# /etc/sudoers.tmp

# after %sudo
asim    ALL=(ALL:ALL) NOPASSWD: ALL
asim    ALL=(ALL:ALL) NOPASSWD: /usr/bin/ansible

# user hostname=(runas-user:runas-group) command
```
