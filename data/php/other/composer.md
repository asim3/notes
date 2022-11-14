[docs](https://packagist.org/)


## start new project
```bash
docker container run -it --entrypoint=/bin/bash composer:2.3

composer -V

composer init \
  --name=asim_vendor-1/my_project \
  --description=my_new_app \
  --author=Asim \
  --type=project \
  --autoload=src/ \
  --no-interaction
```


## install components
[symfony components](https://symfony.com/components)
```bash
composer require symfony/dom-crawler

composer require symfony/css-selector

composer require ramsey/uuid


ls -al ./vendor/
# -rw-r--r-- 1 root root  427 Nov 14 10:35 autoload.php
# drwxr-xr-x 2 root root 4096 Nov 14 10:36 composer
# drwxr-xr-x 4 root root 4096 Nov 14 10:36 ramsey
# drwxr-xr-x 7 root root 4096 Nov 14 10:36 symfony
```


## composer
```bash
# Install dependencies from lock file
composer install
composer install composer.json


composer update
composer update vendor-name/package-name


composer outdated

composer show
# masterminds/html5         2.7.6   An HTML5 parser and serializer.
# symfony/css-selector      v6.1.3  Converts CSS selectors to XPath expressions
# symfony/dom-crawler       v6.1.7  Eases DOM navigation for HTML and XML documents
# symfony/polyfill-ctype    v1.27.0 Symfony polyfill for ctype functions
# symfony/polyfill-mbstring v1.27.0 Symfony polyfill for the Mbstring extension

composer remove vendor-name/package-name

composer dump-autoload
```


## index.php
```php
<?php

require __DIR__ . './vendor/autoload.php';

// ramsey/uuid
$my_uuid = new \Ramsey\Uuid\UuidFactory();

echo $uuid->uuid4();
```
