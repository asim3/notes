`php artisan make:factory MyTable`

`laravel_root\my_project\database\factories\MyTableFactory.php`

```php
    public function definition()
    {
        return [
            'first_name' => fake()->name(),
            'last_name' => fake()->company(),
            'last_name' => fake()->companyEmail(),
            'last_name' => fake()->url(),
            'last_name' => fake()->city(),
            'last_name' => fake()->paragraph(5),
        ];
    }
```

## migrate

```php
php artisan db:seed

# OR Drop all tables

php artisan migrate:refresh --seed
```

`laravel_root\my_project\database\seeders\DatabaseSeeder.php`

```php
    public function run()
    {
        \App\Models\MyTable::factory(13)->create();
    }
```
