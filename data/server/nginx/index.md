# Installing Nginx
[docs](https://nginx.org/en/docs/beginners_guide.html)

[tutorial](https://www.digitalocean.com/community/tutorials/understanding-nginx-server-and-location-block-selection-algorithms)


## red server block
`sudo nano /etc/nginx/sites-available/red.example.com`
```txt
server {
    server_name red.example.com www.example.com;
    listen 80;

    root /var/www/myexample.com/html;
}
```


## green server block
`sudo nano /etc/nginx/sites-available/green.example.com`
```txt
server {
    server_name green.example.com
    listen 80;

    root /var/www/myexample.com/html;
}
```



## blue server block
`sudo nano /etc/nginx/sites-available/blue.example.com`
```txt
server {
    server_name blue.example.com
    listen 80;    listen 80;

    root /var/www/myexample.com/html;
}
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
