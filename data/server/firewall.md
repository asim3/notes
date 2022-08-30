# Uncomplicated Firewall

```txt
sudo apt-get update && sudo apt-get upgrade

sudo apt-get install -y ufw 
sudo ufw enable
sudo ufw disable
```


## Reset
Resetting all rules to installed defaults
```bash
sudo ufw reset
```


## configuration file
- `nano /etc/default/ufw`


## Firewall status
```bash
sudo ufw status
# Status: inactive

sudo ufw status verbose
# Status: inactive

sudo ufw status numbered
# Status: inactive

sudo ufw app list
# Available applications:
#   Nginx Full
#   Nginx HTTP
#   Nginx HTTPS
#   OpenSSH
```


## set default 
```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
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
