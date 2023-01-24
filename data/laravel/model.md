## Eloquent Model

```bash
php artisan make:model AsimModel -mcf

# -m, --migration       Create a new migration file for the model
# -c, --controller      Create a new controller for the model
# -f, --factory         Create a new factory for the model
# -s, --seed            Create a new seeder for the model


INFO  Model      [app/Models/AsimModel.php] created successfully.  
INFO  Factory    [database/factories/AsimModelFactory.php] created successfully.  
INFO  Migration  [database/migrations/2023_01_24_052001_create_asim_models_table.php] created successfully.  
INFO  Controller [app/Http/Controllers/AsimModelController.php] created successfully.  
```


## views
`samiphp2/resources/views/esaam.blade.php`
```php
@if(isset($object_list))
    @foreach ($object_list as $object)
        {{ $object['id'] }}
        <br />
        {{ $object['name'] }}
        <br />
        {{ $object['email'] }}
        <br />
        {{ $object['created_at'] }}
        <br />
        {{ $object['updated_at'] }}
        <hr />
    @endforeach
@endif
```


## routes
`samiphp2/routes/web.php`
```php
use App\Models\Esaam;
use App\Models\User;

Route::get('/esaam/', function () {
    return view('esaam', [
        "object_list" => User::all()
    ]);
});
```


## migration
`samiphp2/database/migrations/2023_01_24_062550_create_esaams_table.php`
```php
public function up()
{
    Schema::create('esaams', function (Blueprint $table) {
        $table->id();
        $table->timestamps();
        $table->string("first_name");
        $table->string("last_name");
        $table->longText("description");
    });
}
```


## seeders
`samiphp2/database/seeders/DatabaseSeeder.php`
```php
\App\Models\User::factory(10)->create();


# run migrations
php artisan migrate
php artisan db:seed
```




