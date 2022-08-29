[docs](https://nginx.org/en/docs/http/configuring_https_servers.html)


# Reverse Proxy
add 3 servers
```bash
sudo docker container run -dp 8005:80 asim3/whoami:1.3
# 06e7b43ac027


ss -lptu | grep 8005
# tcp    LISTEN  0     4096      0.0.0.0:8005   0.0.0.0:* 
# tcp    LISTEN  0     4096         [::]:8005      [::]:* 
```


### Generate self-signed certificates
```bash
sudo mkdir -p /etc/letsencrypt/manual/asim-docker.com
cd /etc/letsencrypt/manual/asim-docker.com

sudo openssl req -sha256 -nodes -x509 -days 365 \
  -newkey rsa:4096 \
  -keyout ./my_private.key \
  -out    ./my_https.crt
```


## create a server block
`sudo nano /etc/nginx/sites-available/docker-site.com`
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name asim-docker.com www.asim-docker.com;

    if ($host = asim-docker.com) {
        return 301 https://$host$request_uri;
    }

    return 404;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl ipv6only=on;

    server_name asim-docker.com www.asim-docker.com;

    ssl_certificate     /etc/letsencrypt/manual/asim-docker.com/my_https.crt;
    ssl_certificate_key /etc/letsencrypt/manual/asim-docker.com/my_private.key;
    
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
sudo certbot --nginx \
  -d asim-docker.com \
  -d www.asim-docker.com \
  --email asim@asim.com \
  --agree-tos \
  --no-eff-email \
  --redirect
  

  --no-verify-ssl
  --staging


# Test auto-renewal
sudo certbot renew --dry-run

# List all certificates
sudo certbot certificates


# Manual
sudo certbot certonly --manual -d asim-docker.com
# Create a file containing just this data:
# JoarBr3utWPosTsFMVMM7ukJAD_tfRXqvFA-wtPRDj8.lTo91m7k2ZHXl-do3ORBUcjSGmi1G06MpEfDCaH6peQ
# And make it available on your web server at this URL:
# http://asim-docker.com/.well-known/acme-challenge/JoarBr3utWPosTsFMVMM7ukJAD_tfRXqvFA-wtPRDj8
```
