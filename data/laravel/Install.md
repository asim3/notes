## Installation

## composer
```php
docker pull composer:2.3
```


## laravel installer
```bash
composer global require laravel/installer

laravel new my_project
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


## 
```php

```


## 
```php

```


## 
```php

```


## 
```php

```


```php

```


## 
```php

```


## 
```php

```


## 
```php

```


## 
```php

```


## 
```php

```


## 
```php

```


## 
```php

```


## 
```php

```
