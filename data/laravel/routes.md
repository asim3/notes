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
        'object_list' => ['my object_list'],
        'request' => 'my request'
    ]);
});
```


## get from model
```php
use Illuminate\Support\Facades\Route;
use App\Models\MyModel;

Route::get('/all', function () {
    return view('my_view', MyModel::all());
});


Route::get('/data/{my_id}', function (MyModel $my_id) {
    return view('my_view', [
        "object" => $my_id,
        'request' => 'my request'
    ]);
});


// MyModel::where('first_name', $my_id)->firstOrFail();
Route::get('/data/{my_id:first_name}', function (MyModel $my_id) {
    return view('my_view', [
        "object" => $my_id,
        'request' => 'my request'
    ]);
});
```
