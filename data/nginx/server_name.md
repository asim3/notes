[docs](https://nginx.org/en/docs/http/server_names.html)


## add servers dir and index
```bash
mkdir -p /home/asim/main-server
mkdir -p /home/asim/blue-server
mkdir -p /home/asim/green-server
mkdir -p /home/asim/yellow-server
mkdir -p /home/asim/red-server
echo "main index server"   > /home/asim/main-server/index.html
echo "www index server"    > /home/asim/main-server/home.html
echo "blue index server"   > /home/asim/blue-server/index.html
echo "green index server"  > /home/asim/green-server/index.html
echo "yellow index server" > /home/asim/yellow-server/index.html
echo "red index server"    > /home/asim/red-server/index.html
```


## conf
`sudo nano /etc/nginx/nginx.conf`
```nginx
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
	worker_connections 768;
	# multi_accept on;
}

http {
    server {
        listen 80;
        server_name asimt.com www.asimt.com;
        location / {
            root /home/asim/main-server/;
        }
    }

    server {
        listen 80 default_server;
        server_name blue.asimt.com;
        location / {
            root /home/asim/blue-server/;
        }
    }

    server {
        listen 80;
        server_name red.asimt.com;
        location / {
            root /home/asim/red-server/;
        }
    }
}
```


## test
```bash
curl asimt.com
# main index server

curl www.asimt.com
# main index server

curl asimt.com/home.html
# www index server

curl blue.asimt.com
# blue index server

curl red.asimt.com
# red index server

curl yellow.asimt.com
# blue index server

curl 192.168.1.106
# blue index server

curl asimt.com/x.html
# <html>
# <head><title>404 Not Found</title></head>
# <body>
# <center><h1>404 Not Found</h1></center>
# <hr><center>nginx/1.18.0 (Ubuntu)</center>
# </body>
# </html>

curl asimt.com/x
# <html>
# <head><title>404 Not Found</title></head>
# <body>
# <center><h1>404 Not Found</h1></center>
# <hr><center>nginx/1.18.0 (Ubuntu)</center>
# </body>
# </html>
```
