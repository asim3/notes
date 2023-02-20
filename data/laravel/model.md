## Driver
```bash
# install mysql driver
docker-php-ext-install pdo_mysql
```


## Models
`nano laravel_root\my_project\app\Models\MyModel.php`
```php
namespace App\Models;

class MyModel
{
    public static function all()
    {
        return [
            'my_object_1' => 'my 1 model value',
            'my_object_2' => 'my 2 model value'
        ];
    }
}
```


## Eloquent Model
```bash
php artisan make:model MyModel -fcm

# -f, --factory         Create a new factory for the model
# -m, --migration       Create a new migration file for the model
# -c, --controller      Create a new controller for the model
# -s, --seed            Create a new seeder for the model


INFO  Model      [app/Models/MyModel.php] created successfully.  
INFO  Factory    [database/factories/MyModelFactory.php] created successfully.  
INFO  Migration  [database/migrations/2023_01_24_104343_create_my_models_table.php] created successfully.  
INFO  Controller [app/Http/Controllers/MyModelController.php] created successfully.  
```


## views
`samiphp2/resources/views/my_view.blade.php`
```php
@if(isset($object_list))
    @foreach ($object_list as $object)
        {{ $object['id'] }}
        <br />
        {{ $object['first_name'] }}
        <br />
        {{ $object['last_name'] }}
        <br />
        {{ $object['description'] }}
        <hr />
    @endforeach
@endif
```


## routes
`samiphp2/routes/web.php`
```php
use App\Models\MyModel;

Route::get('/my-route/', function () {
    return view('my_view', [
        "object_list" => MyModel::all()
    ]);
});
```


## migration
`my_project/database/migrations/2023_01_24_104343_create_my_models_table.php`
```php
public function up()
{
    Schema::create('my_models', function (Blueprint $table) {
        $table->id();
        $table->timestamps();
        $table->string("first_name");
        $table->string("last_name");
        $table->longText("description");
    });
}
```


## migrate
```php
php artisan migrate
# OR Drop all tables
php artisan migrate:fresh
php artisan migrate:refresh --seed
```


## SQL
```bash
export DB_DATABASE=my_project
sudo mysql $DB_DATABASE -e "INSERT INTO my_models (first_name, last_name, description) VALUES ('test1', 'test2', 'test3');"


sudo mysql $DB_DATABASE -e "SHOW TABLES;"
// +------------------------+
// | Tables_in_my_project   |
// +------------------------+
// | failed_jobs            |
// | migrations             |
// | my_models              |
// | password_resets        |
// | personal_access_tokens |
// | users                  |
// +------------------------+


sudo mysql $DB_DATABASE -e "SELECT * FROM my_models;"
// +----+------------+------------+------------+-----------+-------------+
// | id | created_at | updated_at | first_name | last_name | description |
// +----+------------+------------+------------+-----------+-------------+
// |  1 | NULL       | NULL       | test1      | test2     | test3       |
// |  2 | NULL       | NULL       | test1      | test2     | test3       |
// +----+------------+------------+------------+-----------+-------------+
```


## model query
function name must starts with scope
```php
# function name must starts with scope
public function scopeMyNameFilter($query, $s_name) {
    if($s_name ?? false) {
        $query->where('first_name', 'like', '%' . $s_name . '%');
    }
}



public function scopeMyFilter($query, array $filters) {
    if($filters['s_name'] ?? false) {
        $query->where('first_name', 'like', '%' . $filters['s_name'] . '%');
    }

    if($filters['search_value'] ?? false) {
        $query->where('first_name',  'like', '%' . $filters['search_value'] . '%')
            ->orWhere('last_name',   'like', '%' . request('search_value') . '%')
            ->orWhere('description', 'like', '%' . $filters['search_value'] . '%');
    }
}
```


## routes
```php
Route::get('/my-name-filter', function () {
    return view('my_view', [
        "object_list" => MyModel::latest()->MyNameFilter("similique")->get()
    ]);
});


Route::get('/my-filter', function () {
    return view('my_view', [
        "object_list" => MyModel::latest()->MyFilter(request(["s_name", "search_value"]))->get()
    ]);
});
```


# !!!
## model fillable
```php
protected $fillable = ['first_name', 'last_name', 'description'];
```


## Relationship
```php
// Relationship To User
public function user() {
    return $this->belongsTo(User::class, 'user_id');
}
```
