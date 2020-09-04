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
```


Install SSH Over LAN
```bash
sudo apt install openssh-server
sudo systemctl status ssh

# Enable SSH
sudo systemctl enable ssh
```
> make sure to open the SSH port


Copy public key to remote server
```  bash
ssh-copy-id asim@10.68.15.202

# OR 

ssh asim@192.168.100.100 'mkdir ~/.ssh/'
ssh asim@192.168.100.100 'chmod 700 ~/.ssh/'
scp ~/.ssh/id_rsa.pub asim@192.168.100.100:~/.ssh/authorized_keys
```
> make sure you add it to .ssh/authorized_keys file


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


disable password and root login
```  bash
sudo nano /etc/ssh/sshd_config 
sudo systemctl restart sshd

# /etc/ssh/sshd_config
PermitRootLogin no
PasswordAuthentication no 
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
