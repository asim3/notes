`nano my_project\routes\web.php`
```php
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


## Dump, Die, Debug
```php
Route::get('/my-ddd', function () {
    ddd("request");
});
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


## 
```php

```


## 
```php

```


## 
```php

```

