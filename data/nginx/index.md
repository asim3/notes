# Installing Nginx
[docs](https://nginx.org/en/docs/beginners_guide.html)

[tutorial](https://www.digitalocean.com/community/tutorials/understanding-nginx-server-and-location-block-selection-algorithms)

[default server](https://nginx.org/en/docs/http/request_processing.html)


## configuration file
- `nano /etc/nginx/nginx.conf`
- `nano /usr/local/nginx/conf/nginx.conf`
- `nano /usr/local/etc/nginx/nginx.conf`


## set local hostname
```bash
cat <<EOF | sudo tee -a /etc/hosts
192.168.1.106 asimt.com
192.168.1.106 www.asimt.com
192.168.1.106 blue.asimt.com
192.168.1.106 green.asimt.com
192.168.1.106 yellow.asimt.com
192.168.1.106 red.asimt.com
EOF
```


## add Static files
```bash
mkdir -p /home/asim/my-www
echo  "example page" > /home/asim/my-www/index.html
echo "www example page" > /home/asim/my-www/home.html
echo "blue example page" > /home/asim/my-www/blue.html
echo "green example page" > /home/asim/my-www/green.html
echo "yellow example page" > /home/asim/my-www/yellow.html
echo "red example page" > /home/asim/my-www/red.html
```


## Serving Static
`nano /etc/nginx/nginx.conf`
```nginx
events {}

http {
    server {
        location / {
            root /home/asim/my-www/;
        }
    }
}
```

> test configuration: `sudo nginx -t`
> restart nginx : `sudo systemctl restart nginx`


## test
```bash
curl asimt.com
# example page

curl www.asimt.com
# example page

curl red.asimt.com
# example page

curl red.asimt.com/red.html
# red example page

curl red.asimt.com/blue.html
# blue example page

curl red.asimt.com/x.html
# <html>
# <head>
#   <title>404 Not Found</title>
# </head>
# <body>
#   <center><h1>404 Not Found</h1></center>
#   <hr><center>nginx/1.18.0 (Ubuntu)</center>
# </body>
# </html>
```
