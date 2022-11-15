## Installation


## start new project
```bash
docker container run -it --entrypoint=/bin/bash composer:2.3

composer -V

composer create-project laravel/laravel my_project

cd my_project

ls -al
-rw-r--r--  1 root root    258 Oct 28 13:38 .editorconfig
-rw-r--r--  1 root root   1120 Nov 15 06:14 .env
-rw-r--r--  1 root root   1069 Oct 28 13:38 .env.example
-rw-r--r--  1 root root    179 Oct 28 13:38 .gitattributes
-rw-r--r--  1 root root    227 Oct 28 13:38 .gitignore
-rw-r--r--  1 root root   4134 Oct 28 13:38 README.md
drwxr-xr-x  7 root root   4096 Oct 28 13:38 app
-rwxr-xr-x  1 root root   1686 Oct 28 13:38 artisan
drwxr-xr-x  3 root root   4096 Oct 28 13:38 bootstrap
-rw-r--r--  1 root root   1814 Oct 28 13:38 composer.json
-rw-r--r--  1 root root 285666 Nov 15 06:14 composer.lock
drwxr-xr-x  2 root root   4096 Oct 28 13:38 config
drwxr-xr-x  5 root root   4096 Oct 28 13:38 database
drwxr-xr-x  3 root root   4096 Oct 28 13:38 lang
-rw-r--r--  1 root root    286 Oct 28 13:38 package.json
-rw-r--r--  1 root root   1175 Oct 28 13:38 phpunit.xml
drwxr-xr-x  2 root root   4096 Oct 28 13:38 public
drwxr-xr-x  5 root root   4096 Oct 28 13:38 resources
drwxr-xr-x  2 root root   4096 Oct 28 13:38 routes
drwxr-xr-x  5 root root   4096 Oct 28 13:38 storage
drwxr-xr-x  4 root root   4096 Oct 28 13:38 tests
drwxr-xr-x 39 root root   4096 Nov 15 06:14 vendor
-rw-r--r--  1 root root    263 Oct 28 13:38 vite.config.js
```


## docker-compose.yml
```yaml
version: '3'

services:
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: my_secret_pw_shh
      MYSQL_DATABASE: test_db
      MYSQL_USER: devuser
      MYSQL_PASSWORD: devpass
    ports:
      - "9905:3306"
  web:
    image: composer:2.3
    container_name: laravel_web
    depends_on:
      - db
    volumes:
      - ./laravel_root/:/var/www/html/
    ports:
      - "8000:80"
    stdin_open: true
    tty: true
```


## 
```php

```


## 
```php

```
