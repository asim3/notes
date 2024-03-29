[My Public IP](https://ifconfig.co/ip)   


## Get Server IP 
```txt
ip route
# ... kernel scope link src 190.168.my.local.ip 
ifconfig
```


## Login to Server
> logout SSH `exit`
```bash
# test connection
ssh -T git@github.com

ssh username@server.ip

# run bash on remote server
ssh username@remote.server.ip 'pwd'
ssh username@remote.server.ip 'ls -al'
```


## add a new user
```txt
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

## add a new group
```txt
sudo groupadd my-group

# list users
sudo grep my-group /etc/group
```

## change hostname
```txt
hostnamectl set-hostname my-test-server
cat /etc/hostname 

# change hostname ip
sudo nano /etc/hosts
127.0.0.1       localhost
192.168.1.1     my-test-server
192.168.100.44  my-admin-server
```


## أداة متابعة الاستخدام
```txt
Apigee
Azure API Management
IBM API Management
AWS API Management
Kong
MuleSoft
NewRelic
Grafana
```
