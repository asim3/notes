## Factories
`my_project/database/factories/MyModelFactory.php`
```php
public function definition()
{
    return [
        "first_name" => $this->faker->sentence(),
        "last_name" => $this->faker->sentence(),
        "description" => $this->faker->paragraph(5),
        // "first_name" => $this->faker->company(),
        // "first_name" => $this->faker->companyEmail(),
        // "first_name" => $this->faker->url(),
        // "first_name" => $this->faker->city(),
        // "first_name" => "tag_1, tag_2, tag_3",
    ];
}
```


## seeders 
`my_project/database/seeders/DatabaseSeeder.php`
```php
public function run()
{
    \App\Models\MyModel::factory(10)->create();
    
    // \App\Models\User::factory(10)->create();
    // ========================================
    // \App\Models\User::factory()->create([
    //     'name' => 'Test User',
    //     'email' => 'test@example.com',
    // ]);
}
```


## add to DB
```bash
php artisan db:seed
```
