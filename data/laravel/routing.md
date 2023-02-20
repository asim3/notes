## Routes
`nano laravel_root\my_project\routes\web.php`
```php
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('my_view');
});

Route::get('/data', function () {
    return view('my_view', [
        'my_object_1' => 'my 1 value',
        'my_object_2' => 'my 2 value'
    ]);
});


# =====================
use App\Models\MyModel;

Route::get('/data', function () {
    return view('my_view', MyModel::all());
});
```


`nano my_project\routes\web.php`
```php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
    // @ my_project\resources\views\welcome.blade.php
});

Route::get('/my-home/', function () {
    // return 'Hello from my home';
    // OR
    return response('Hello from my home', 200);
});

Route::get('/my-header/', function () {
    return response('Hello from my home', 200)
        ->header('Content-Type', 'text/plain')
        ->header('foo', 'bar');
});
```


## argument
```php
Route::get('/my-user/{my_user_id}', function ($my_user_id) {
    return response("Hi $my_user_id User", 200);
})->where('my_user_id', '[0-9]+');
```


## args
```php
Route::get('/my-model/{my_id}', function (MyModel $my_id) {
    return view('my_view', [
        "object_list" => $my_id
    ]);
});
```


## Dump, Die, Debug
```php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/my-dd', function () {
    dd("Asim");
});

Route::get('/my-rr', function (Request $request) {
    dd($request);
});

Route::get('/my-ddd', function () {
    ddd("Asim");
});

Route::get('/my-rrr', function (Request $request) {
    ddd($request);
});
```


## API
`nano my_project\routes\api.php`
```php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;


Route::get('/', function () {
    return view('my_view', [
        "object_list" => User::all()
    ]);
});


Route::get('/my-list', function () {
    return response()->json([
        'my-name' => 'Asim',
        'my-date' => '4-12-2022'
    ]);
});
```
