## Routes
`nano laravel_root\my_project\routes\web.php`
```php
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return 'hello world';
});


Route::get('/view', function () {
    return view('my_view');
});


Route::get('/data', function () {
    return view('my_view', [
        'object_list' => 'my 1 value',
        'request' => 'my 2 value'
    ]);
});
```


## wild card
```php
Route::get('/int/{my_var}', function ($my_var) {
    return "int: " . $my_var;
})->whereNumber("my_var"); # [0-9]+


Route::get('/str/{my_var}', function ($my_var) {
    return "str: " . $my_var;
})->whereAlphaNumeric("my_var"); # [a-zA-Z0-9]+


Route::get('/slug/{my_var}', function ($my_var) {
    return "slug: " . $my_var;
})->where("my_var", "[a-zA-Z0-9_\-]+");


Route::get('/any/{my_var}', function ($my_var) {
    return "any: " . $my_var;
});
```


## get from model
```php
use Illuminate\Support\Facades\Route;
use App\Models\MyModel;

Route::get('/data', function () {
    return view('my_view', MyModel::all());
});


Route::get('/data/{my_id}', function (MyModel $my_id) {
    return view('my_view', [
        "object_list" => $my_id
    ]);
});
```


## Dump, Die, Debug
```php
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


Route::get('/my-dd', function () {
    dd("Asim");
});


Route::get('/my-ddd', function () {
    ddd("Asim");
});


Route::get('/my-rr', function (Request $request) {
    dd($request);
});


Route::get('/my-rrr', function (Request $request) {
    ddd($request);
});
```
