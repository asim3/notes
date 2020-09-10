# Uncomplicated Firewall

```txt
sudo apt-get update && sudo apt-get upgrade

sudo apt-get install ufw 
sudo ufw enable
sudo ufw disable
```

> Reset to installed defaults
> `sudo ufw reset`


## Firewall status
```txt
sudo ufw status
sudo ufw status verbose
sudo ufw status numbered
sudo ufw app list
```


## set default 
```txt
sudo ufw default allow outgoing
sudo ufw default deny incoming
```


## open ports 
```txt
sudo ufw allow ssh
sudo ufw allow http 
sudo ufw allow https
sudo ufw allow 8000
```


## close ports 
```txt
sudo ufw deny http 
sudo ufw deny https
sudo ufw deny 8000 
sudo ufw deny ftp

sudo ufw deny proto tcp from any to any port 80,443

sudo ufw deny from 192.168.1.1
sudo ufw deny from 192.168.1.1 to any port 22
```
