## new Eloquent Model
```bash
php artisan make:model MyModel -mcf;
# Model      app/Models/MyModel.php
# Factory    database/factories/MyModelFactory.php
# Migration  database/migrations/2023_02_20_102943_create_my_models_table.php
# Controller app/Http/Controllers/MyModelController.php


php artisan make:model MyModel -mcfs;
# -s Create a new seeder for the model
```


## migration
`my_project/database/migrations/2023_01_24_104343_create_my_models_table.php`
```php
public function up()
{
    Schema::create('my_models', function (Blueprint $table) {
        $table->id();
        $table->string("first_name");
        $table->string("last_name");
        $table->text("body");
        $table->longText("description");
        $table->timestamps();
        $table->timestamp("published_at")->nullable();
    });
}
```


## migrate
```php
php artisan migrate
```
