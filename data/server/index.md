Get Server IP 
```text
ip route
# ... kernel scope link src 190.168.my.local.ip 
ifconfig
```


[My Public IP](https://ifconfig.co/ip)


Login to Server
```text
ssh username@server.ip
```



Copy public key to remote server
```text
ssh-copy-id username@server.ip

ssh-copy-id asim@10.68.15.202
```


Add a New User
```text
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
```text
hostnamectl set-hostname my-test-server
cat /etc/hostname 

# change hostname ip
sudo nano /etc/hosts
127.0.0.1       localhost
192.168.1.1     my-test-server
192.168.100.44  my-admin-server
```


disable password and root login
```text
sudo nano /etc/ssh/sshd_config 
sudo systemctl restart sshd

# /etc/ssh/sshd_config
PermitRootLogin no
PasswordAuthentication no 
```


Granting sudo Privileges to Users
```text
sudo visudo

# /etc/sudoers.tmp

# after %sudo
asim    ALL=(ALL:ALL) NOPASSWD: ALL
asim    ALL=(ALL:ALL) NOPASSWD: /usr/bin/ansible

# user hostname=(runas-user:runas-group) command
```
