## add servers dir and index
```bash
mkdir -p /home/asim/main-server
mkdir -p /home/asim/blue-server
mkdir -p /home/asim/green-server
mkdir -p /home/asim/yellow-server
mkdir -p /home/asim/red-server
echo "main location"   > /home/asim/main-server/index.html
echo "home location"    > /home/asim/main-server/home.html
echo "new location"    > /home/asim/main-server/new.txt
echo "blue location"   > /home/asim/blue-server/index.html
echo "green location"  > /home/asim/green-server/index.html
echo "yellow location" > /home/asim/yellow-server/index.html
echo "red location"    > /home/asim/red-server/index.html
```


## conf
`sudo nano /etc/nginx/nginx.conf`
```nginx
events {}

http {
    server {
        listen 80;
        server_name asimt.com www.asimt.com;

        location / {
            root /home/asim/main-server/;
        }
        
        location /blue {
            alias /home/asim/blue-server/;
        }
        
        location /red {
            alias /home/asim/red-server/;
        }
        
        location /yellow {
            return 307 /blue;
            # 307 Temporary Redirect
        }
        
        rewrite /green /red;
    }
}
```


## test
```bash
curl asimt.com
# main location

curl asimt.com/blue/
# blue location

curl asimt.com/red/
# red location

curl asimt.com/yellow-server/
curl asimt.com/yellow/
curl asimt.com/yellow
# --2022-08-27 23:33:38--  http://asimt.com/yellow
# HTTP request sent, awaiting response... 307 Temporary Redirect
# --2022-08-27 23:33:38--  http://asimt.com/blue
# HTTP request sent, awaiting response... 301 Moved Permanently
# --2022-08-27 23:33:38--  http://asimt.com/blue/
# HTTP request sent, awaiting response... 200 OK
# blue location

wget asimt.com/green/
# --2022-08-27 23:42:23--  http://asimt.com/green
# HTTP request sent, awaiting response... 301 Moved Permanently
# --2022-08-27 23:42:23--  http://asimt.com/red/
# HTTP request sent, awaiting response... 200 OK
# red location

curl asimt.com/x/
# <head><title>404 Not Found</title></head>

curl 192.168.1.106
# main location
```
