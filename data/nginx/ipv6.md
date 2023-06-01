## make ssl certificate
Create a default self signed certificate
```bash
sudo mkdir -p /etc/nginx/ssl

sudo openssl req \
  -x509 \
  -nodes \
  -days 3650 \
  -newkey rsa:2048 \
  -keyout /etc/nginx/ssl/nginx.key \
  -out /etc/nginx/ssl/nginx.crt \
  -subj "/CN=asimt.sa"
```


## add a default server block
`sudo nano /etc/nginx/sites-available/default_server`
```nginx
server {
    server_name _;

    listen 80 default_server;
    listen [::]:80;
    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl default_server;

    ssl_certificate /etc/nginx/ssl/nginx.crt;
    ssl_certificate_key /etc/nginx/ssl/nginx.key;

    return 404;

    location = /favicon.ico { 
        access_log off; 
        log_not_found off; 
    }
}
```


## enable server block
```bash
sudo ln -s /etc/nginx/sites-available/default_server /etc/nginx/sites-enabled/default_server

# Remove old default block
sudo rm /etc/nginx/sites-enabled/default

# test conf
sudo nginx -t

sudo systemctl restart nginx
```
