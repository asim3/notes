## install
```bash
sudo apt update
sudo apt install -y nginx
```


## Adjusting the Firewall
```bash
sudo ufw default allow outgoing
sudo ufw default deny incoming
sudo ufw allow ssh
sudo ufw enable


sudo ufw status verbose
```


## Checking your Web Server
```bash
systemctl status nginx

# start automatically when the server boots
sudo systemctl enable nginx
sudo systemctl disable nginx

# Managing the Nginx Process
sudo systemctl reload nginx
sudo systemctl restart nginx
sudo systemctl start nginx
sudo systemctl stop nginx
```
