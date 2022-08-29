# Reverse Proxy
add 3 servers
```bash
sudo docker container run -dp 8005:80 asim3/whoami:1.3
# 06e7b43ac027
```


## create a server block
`sudo nano /etc/nginx/sites-available/docker-site.com`
```nginx
server {
        listen 80;
        listen [::]:80;
        server_name asim-docker.com www.asim-docker.com;

        location / {
            proxy_pass http://127.0.0.1:8005;
        }
}
```


## enable docker-site.com
```bash
sudo ln -s /etc/nginx/sites-available/docker-site.com /etc/nginx/sites-enabled/docker-site.com

sudo nginx -t && sudo systemctl restart nginx.service
```



## Serving Static
`nano /etc/nginx/nginx.conf`
```nginx

```
