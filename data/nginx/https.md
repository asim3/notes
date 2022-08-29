# Reverse Proxy
add 3 servers
```bash
sudo docker container run -dp 8005:80 asim3/whoami:1.3
# 06e7b43ac027


ss -lptu | grep 8005
# tcp    LISTEN  0     4096      0.0.0.0:8005   0.0.0.0:* 
# tcp    LISTEN  0     4096         [::]:8005      [::]:* 
```


## create a server block
`sudo nano /etc/nginx/sites-available/docker-site.com`
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name asim-docker.com www.asim-docker.com;

    location / {
        include proxy_params;
        proxy_pass http://127.0.0.1:8005;
    }
}
```


## enable docker-site.com
```bash
sudo ln -s /etc/nginx/sites-available/docker-site.com /etc/nginx/sites-enabled/docker-site.com

sudo nginx -t && sudo systemctl restart nginx.service
```


## install certbot & NGINX plugin
```bash
sudo apt install certbot python3-certbot-nginx

# obtain new certificates
sudo certbot --nginx -d asim-docker.com -d www.asim-docker.com --agree-tos

# Test auto-renewal
sudo certbot renew --dry-run


# Manual
sudo certbot certonly --manual -d asim-docker.com
# Create a file containing just this data:
# JoarBr3utWPosTsFMVMM7ukJAD_tfRXqvFA-wtPRDj8.lTo91m7k2ZHXl-do3ORBUcjSGmi1G06MpEfDCaH6peQ
# And make it available on your web server at this URL:
# http://asim-docker.com/.well-known/acme-challenge/JoarBr3utWPosTsFMVMM7ukJAD_tfRXqvFA-wtPRDj8
```
