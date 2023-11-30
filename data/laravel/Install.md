## Installation
```bash
sudo apt-get update --fix-missing

# install PHP
sudo apt install php php-xml php-curl mysql-server php8.1-mysql


# install Composer
mkdir /tmp/install_composer \
  && cd /tmp/install_composer \
  && curl -sS https://getcomposer.org/installer | php \
  && sudo mv composer.phar /usr/local/bin/composer \
  && sudo chmod +x /usr/local/bin/composer


# Install Laravel
cd ~/webapps

composer create-project --prefer-dist laravel/laravel my_project

cd ~/webapps/my_project

composer install

cp .env.example .env;

php artisan key:generate;

# run
php artisan serve --host=localhost --port=8000
```


## login to mysql
```bash
sudo mysql
```


## vs code extensions
```php
PHP Intelephense
PHP Namespace Resolver
laravel blade snippets
```


## docker
```bash
docker container run -it --entrypoint=/bin/bash composer:2.3


# start new project
composer create-project laravel/laravel my_project

cd my_project


# run server
php artisan serve
php artisan serve --host=0.0.0.0 --port=8000
```


## docker-compose.yml
```yaml
version: "3"

services:
  db:
    image: mysql:5.7
    container_name: db
    environment:
      MYSQL_ROOT_PASSWORD: my_secret_pw_shh
      MYSQL_DATABASE: test_db
      MYSQL_USER: devuser
      MYSQL_PASSWORD: devpass
  web:
    image: php:8.2-apache
    container_name: laravel_web
    command: >
      /bin/sh -c "
        docker-php-ext-install pdo_mysql \\
          && composer create-project laravel/laravel my_project \\
          || cd /app/my_project \\
          && php artisan migrate \\
          && php artisan serve --host=0.0.0.0 --port=8000
      "
    depends_on:
      - db
    volumes:
      - ./laravel_root/:/app/
    ports:
      - "8000:8000"
    stdin_open: true
    tty: true
  php-admin:
    image: phpmyadmin:5.2
    ports:
      - "8080:80"
```
