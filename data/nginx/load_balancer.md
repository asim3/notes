## add 3 servers
```bash
sudo docker container run -dp 8001:80 asim3/whoami:1.3
# 78d0150e22c7
sudo docker container run -dp 8002:80 asim3/whoami:1.3
# d63e8de02ca9
sudo docker container run -dp 8003:80 asim3/whoami:1.3
# 3a591e7748a2
```


## conf
`sudo nano /etc/nginx/nginx.conf`
```nginx
events {}

http {

    upstream my-load_balancer {
        server 127.0.0.1:8001;
        server 127.0.0.1:8002;
        server 127.0.0.1:8003;
    }

    server {
        listen 80;
        server_name asimt.com www.asimt.com;

        location /round-robin/ {
            proxy_pass http://my-load_balancer/;
        }

        location /blue/ {
            proxy_pass http://127.0.0.1:8001/;
        }

        location /yellow/ {
            proxy_pass http://127.0.0.1:8002/;
        }

        location /red/ {
            proxy_pass http://127.0.0.1:8003/;
        }
    }
}
```


## test
```bash
curl asimt.com
# <title>Welcome to nginx!</title>

curl asimt.com/blue/
# HOSTNAME = 78d0150e22c7 @ 8001

curl asimt.com/yellow/
# HOSTNAME = d63e8de02ca9 @ 8002

curl asimt.com/red/
# HOSTNAME = 3a591e7748a2 @ 8003

curl asimt.com/green/
# <head><title>404 Not Found</title></head>
```


## round robin
```bash
curl asimt.com/round-robin/
# HOSTNAME = 78d0150e22c7 @ 8001

curl asimt.com/round-robin/
# HOSTNAME = d63e8de02ca9 @ 8002

curl asimt.com/round-robin/
# HOSTNAME = 3a591e7748a2 @ 8003

curl asimt.com/round-robin/
# HOSTNAME = 78d0150e22c7 @ 8001
```
