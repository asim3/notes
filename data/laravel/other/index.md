[Laravel with Docker](https://laravel.com/docs/9.x/sail)


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
