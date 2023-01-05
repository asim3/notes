## Eloquent Model

```bash
`php artisan make:model my_model`
```

# OR

## add new normal Model

`laravel_root\my_project\app\Models\my_model.php`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class my_model extends Model
{
    use HasFactory;
}
```

```blade
@if(isset($object_list))
    @forelse ($object_list as $object)
        <h2>{{ $object['title'] }}</h2>
    @empty
        <p>No users</p>
    @endforelse
@endif
```
