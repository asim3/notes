## Setting Up Server Blocks
```bash
sudo mkdir -p /var/www/myexample.com/html
sudo chown -R $USER:$USER /var/www/myexample.com/html
sudo chmod -R 755 /var/www/myexample.com
nano /var/www/myexample.com/html/index.html
```


## create a server block
```nginx
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
```bash
sudo ln -s /etc/nginx/sites-available/myexample.com /etc/nginx/sites-enabled/
```
