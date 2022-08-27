[docs](https://nginx.org/en/docs/http/ngx_http_core_module.html#location)


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
            try_files /new.txt /home.html =405;
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
# new location

curl asimt.com/yellow-server/
# yellow location

curl asimt.com/blue-server/
# <head><title>404 Not Found</title></head>

curl asimt.com/red-server/
# <head><title>404 Not Found</title></head>

curl asimt.com/green-server/
# new location

curl asimt.com/blue/
# blue location

curl asimt.com/yellow/
# new location

curl asimt.com/blue/
# blue location

curl asimt.com/red/
# red location

curl asimt.com/green/
# new location

curl 192.168.1.106
# new location
```


## try_files
```bash
curl asimt.com/x/
# new location


# @ 192.168.1.106:~$ 
rm /home/asim/main-server/new.txt

curl asimt.com/x/
# home location


# @ 192.168.1.106:~$ 
rm /home/asim/main-server/home.html

curl asimt.com/x/
# <head><title>405 Not Allowed</title></head>
```
