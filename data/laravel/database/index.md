## add new migrations

```bash
php artisan make:migration create_my_model_table
```

`laravel_root\my_project\database\migrations\2023_01_04_104615_create_my_model_table.php`

```php
function up()
{
    Schema::create('my_model', function (Blueprint $table) {
        $table->id();
        $table->timestamps();
    });
}

function down()
{
    Schema::dropIfExists('my_model');
}
```

## Columns

```php
$table->id();
$table->timestamps();
$table->string("first_name");
$table->string("last_name");

$table->longText("description");
```

## migrate

```
php artisan migrate

# OR Drop all tables

php artisan migrate:fresh
```

## other

```
php artisan make:controller MyController -m
php artisan make:model MyModel -m # m == make migration

php artisan make:migration create_my_migration
php artisan migrate
php artisan migrate:fresh
```
