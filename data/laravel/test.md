## run
```bash
composer create-project --prefer-dist laravel/laravel my_project
cd my_project
composer install
php artisan key:generate

# run
php artisan test
```


## make new test
```bash
php artisan make:test MyNewTest
```


## add new
`my_project/tests/Feature/MyNewTest.php`
```php
<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MyNewTest extends TestCase
{
    public function test_my_home_page_contains_empty_text(): void
    {
        $response = $this->get(uri:'/');

        $response->assertStatus(200);
        $response->assertSee(__(key:'Laravel News is a community driven portal'));
    }
}
```
