## Models

`nano laravel_root\my_project\app\Models\MyModel.php`

```php
namespace App\Models;

class MyModel
{
    public static function all()
    {
        return [
            'object_list' => [
                ['title' => 'my 1 model value'],
                ['title' => 'my 2 model value'],
                ['title' => 'my 3 model value'],
                ['title' => 'my 4 model value'],
                ['title' => 'my 5 model value']
            ]
        ];
    }
}


// @if(isset($object_list))
//     @forelse ($object_list as $object)
//         <h2>{{ $object['title'] }}</h2>
//     @empty
//         <p>No users</p>
//     @endforelse
// @endif
```

## migrations

```bash
php artisan make:migration create_my_model_table
php artisan migrate

# OR Drop all tables
php artisan migrate:fresh




php artisan make:controller MyController -m
php artisan make:model MyModel -m # m == make migration

php artisan make:migration create_my_migration
php artisan migrate
php artisan migrate:fresh
```

# ORM

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

##

```php

```
