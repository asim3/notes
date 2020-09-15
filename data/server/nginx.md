# Installing Nginx

```txt
sudo apt update
sudo apt install -y nginx
```


## Adjusting the Firewall
```txt
# check Firewall Available applications 
sudo ufw app list

sudo ufw allow 'Nginx HTTP'
sudo ufw status
```


## Checking your Web Server
```txt
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


## Setting Up Server Blocks
```txt
sudo mkdir -p /var/www/myexample.com/html
sudo chown -R $USER:$USER /var/www/myexample.com/html
sudo chmod -R 755 /var/www/myexample.com
nano /var/www/myexample.com/html/index.html
```


## create a server block
```txt
sudo nano /etc/nginx/sites-available/myexample.com
@ ...
server {
        listen 80;
        listen [::]:80;

        root /var/www/myexample.com/html;
        index index.html index.htm index.nginx-debian.html;

        server_name myexample.com www.myexample.com;

        location / {
                # rewrite ^/$ AR/ redirect;
                try_files $uri $uri/ =404;
        }
}
```


## enable server block
```txt
sudo ln -s /etc/nginx/sites-available/myexample.com /etc/nginx/sites-enabled/
```


## avoid a possible hash bucket memory problem
```txt
sudo nano /etc/nginx/nginx.conf
@ ...
http {
        server_names_hash_bucket_size 64;

sudo nginx -t
sudo systemctl restart nginx
```
