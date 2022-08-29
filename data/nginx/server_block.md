## available and enabled
```bash
ls -al /etc/nginx/sites-available/
# -rw-r--r-- 1 root root default

ls -al /etc/nginx/sites-enabled/
# lrwxrwxrwx 1 root root default -> /etc/nginx/sites-available/default
```


## Welcome configuration
`cat /etc/nginx/sites-enabled/default`
```nginx
server {
	listen 80 default_server;
	listen [::]:80 default_server;

	root /var/www/html;

	index index.html index.htm index.nginx-debian.html;

	server_name _;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ =404;
	}
}
```


## Welcome page
```bash
cat /var/www/html/index.nginx-debian.html
# <!DOCTYPE html>
# <html>
# <title>Welcome to nginx!</title>
```


## add new site
```bash
sudo mkdir -p /var/www/my-site.com/other
sudo sh -c 'echo  "my page"       > /var/www/my-site.com/index.html'
sudo sh -c 'echo "home my page"   > /var/www/my-site.com/home.html'
sudo sh -c 'echo "blue my page"   > /var/www/my-site.com/blue.html'
sudo sh -c 'echo "red my page"    > /var/www/my-site.com/red.html'
sudo sh -c 'echo "green my page"  > /var/www/my-site.com/other/green.html'
sudo sh -c 'echo "yellow my page" > /var/www/my-site.com/other/yellow.html'


sudo find /var/www/my-site.com -type d -exec chmod 755 {} +
sudo find /var/www/my-site.com -type f -exec chmod 644 -- {} +
```


## create a server block
`sudo nano /etc/nginx/sites-available/my-site.com`
```nginx
server {
        listen 80;
        listen [::]:80;
        server_name asimt.com www.asimt.com;

        root /var/www/my-site.com;
        index index.html index.htm;

        location / {
                # rewrite ^/$ AR/ redirect;
                try_files $uri $uri/ =404;
        }
}
```


## enable my-site.com
```bash
# remove old conf
sudo rm /etc/nginx/sites-enabled/default

# add my-site.com
sudo ln -s /etc/nginx/sites-available/my-site.com /etc/nginx/sites-enabled/my-site.com

# restart
sudo nginx -t && sudo systemctl restart nginx.service
```


## test
```bash
curl http://192.168.1.104/
# my page 

curl http://192.168.1.104/home
# 404 Not Found

curl http://192.168.1.104/home.html
# home my page 

curl http://192.168.1.104/red.html
# red my page

curl http://192.168.1.104/other/
# 403 Forbidden

curl http://192.168.1.104/other/green.html
# green my page
```
