[docs](https://laravel.com/docs/9.x/routing)

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

## Views

`nano laravel_root\my_project\resources\views\my_view.php`

```php
<h1>My View</h1>

<h2><?php echo $my_object_1; ?></h2>

<h2><?php echo $my_object_2; ?></h2>
```

## Blade View

`nano laravel_root\my_project\resources\views\my_view.blade.php`

```php
<h1>My View</h1>

<hr>

<h2>{{ $my_object_1 }}</h2>

<h2>{{$my_object_2}}</h2>
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

##

```php

```

##

```php

```

##

```php

```
