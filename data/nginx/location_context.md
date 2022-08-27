[docs](https://nginx.org/en/docs/http/ngx_http_core_module.html#location)


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
events {}

http {
    server {
        listen 80;
        server_name asimt.com www.asimt.com;

        location / {
            root /home/asim/main-server/;
        }
        
        location /yellow-server {
            root /home/asim/;
            # append the location to root as directory
        }
        
        location /blue {
            alias /home/asim/blue-server/;
        }
        
        location /red {
            alias /home/asim/red-server/;
        }
    }
}
```


## test
```bash
curl asimt.com
# main index server

curl asimt.com/yellow-server/
# yellow index server

curl asimt.com/blue-server/
# <head><title>404 Not Found</title></head>

curl asimt.com/red-server/
# <head><title>404 Not Found</title></head>

curl asimt.com/green-server/
# <head><title>404 Not Found</title></head>

curl asimt.com/blue/
# blue index server

curl asimt.com/yellow/
# <head><title>404 Not Found</title></head>

curl asimt.com/blue/
# blue index server

curl asimt.com/red/
# red index server

curl asimt.com/green/
# <head><title>404 Not Found</title></head>
```
