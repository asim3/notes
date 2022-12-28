## Docker

[docs](https://nsirap.com/posts/039-docker-best-practice-multi-stage-build/)

```dockerfile
FROM node:lts-alpine as node_build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY webpack.mix.js ./
COPY resources/ ./resources/
COPY public/ ./public/
# fail du purge sinon
RUN mkdir -p /public/css
RUN touch /public/css/app.css
RUN mkdir -p /public/js
RUN touch /public/js/app.js
RUN npm run prod


FROM composer:2.1.9 as composer_build
# voir pour le .lock
COPY ./composer.json /app/
RUN composer install --no-dev --no-autoloader --no-scripts
COPY . /app
RUN composer install --no-dev --optimize-autoloader


FROM php:8.0-fpm-alpine
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
RUN docker-php-ext-install pdo pdo_mysql
COPY devops/docker/php/*.conf /usr/local/etc/php-fpm.d/
COPY --chown=www-data --from=composer_build /app/ /var/www/html/
COPY --from=node_build /app/public/ /var/www/html/public/
RUN  php artisan view:cache
```
