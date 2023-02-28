
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
