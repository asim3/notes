[Laravel with Docker](https://laravel.com/docs/9.x/sail)


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
