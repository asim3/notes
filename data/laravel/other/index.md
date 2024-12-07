[Laravel with Docker](https://laravel.com/docs/9.x/sail)


## setup SRC
```bash
docker container run -it -v ./:/app --rm ubuntu:22.04 /bin/bash -c "
mv /app/app                /app/src/app               ;
mv /app/artisan            /app/src/artisan           ;
mv /app/bootstrap          /app/src/bootstrap         ;
mv /app/composer.json      /app/src/composer.json     ;
mv /app/composer.lock      /app/src/composer.lock     ;
mv /app/config             /app/src/config            ;
mv /app/database           /app/src/database          ;
mv /app/.editorconfig      /app/src/.editorconfig     ;
mv /app/.env               /app/src/.env              ;
mv /app/.env.example       /app/src/.env.example      ;
mv /app/.gitattributes     /app/src/.gitattributes    ;
mv /app/.gitignore         /app/src/.gitignore        ;
mv /app/lang               /app/src/lang              ;
mv /app/package.json       /app/src/package.json      ;
mv /app/phpunit.xml        /app/src/phpunit.xml       ;
mv /app/postcss.config.js  /app/src/postcss.config.js ;
mv /app/public             /app/src/public            ;
mv /app/README.md          /app/src/README.md         ;
mv /app/resources          /app/src/resources         ;
mv /app/routes             /app/src/routes            ;
mv /app/server.php         /app/src/server.php        ;
mv /app/storage            /app/src/storage           ;
mv /app/tailwind.config.js /app/src/tailwind.config.js;
mv /app/.styleci.yml       /app/src/.styleci.yml      ;
mv /app/tests              /app/src/tests             ;
mv /app/vendor             /app/src/vendor            ;
mv /app/vite.config.js     /app/src/vite.config.js    ;
mv /app/webpack.mix.js     /app/src/webpack.mix.js    ;
ls -al /app;
ls -al /app/src;"
```


## array
```php
<?php

$my_arr = [5, 6, 7, 8, 1, 2, 3, 4, 9];

$my_arr_2 = array_map(fn($my_int) => $my_int + 1, $my_arr);
// [6,7,8,9,2,3,4,5,10]

$my_arr_3 = collect($my_arr)
  ->map(fn($my_int) => $my_int + 2)
  ->map(fn($my_int) => $my_int + 8);
// [15,16,17,18,11,12,13,14,19]

$my_arr_4 = collect($my_arr)
  ->sort()
  ->sortDesc();
// {"8":9,"3":8,"2":7,"1":6,"0":5,"7":4,"6":3,"5":2,"4":1}
// {old_index: new_index}
```


## info
```php
<?php

phpinfo();
```


## Test database connection
```php
<?php

use Illuminate\Support\Facades\DB;

// Test database connection
try {
    DB::connection()->getPdo();
    echo "<h2>connection is OK</h2>";
} catch (Exception $e) {
    die("<h2>Could not connect to the database.  Please check your configuration.</h2> error:" . $e );
}
```


## artisan
```php
php artisan --version

php artisan serve
php artisan down
php artisan up

php artisan make:controller MyController -m
php artisan make:model MyModel -m # m == make migration

php artisan make:migration create_my_migration
php artisan migrate
php artisan migrate:fresh

php artisan clear-compiled
php artisan optimize

php artisan cache:clear
php artisan auth:clear-resets
php artisan key:generate
php artisan session:table
php artisan view:clear
```
