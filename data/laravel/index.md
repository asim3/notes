[docs](https://laravel.com/docs/9.x/routing)

## add new project
```bash
cd ~/webapps

composer create-project --prefer-dist laravel/laravel my_project

cd ~/webapps/my_project

composer install

cp .env.example .env;

php artisan key:generate;

php artisan serve --host=localhost --port=8000
```


## SQL
```sql
CREATE USER 'laravel'@'localhost' IDENTIFIED BY 'Top-secret@123';

GRANT ALL PRIVILEGES ON * . * TO 'laravel'@'localhost';

FLUSH PRIVILEGES;

SELECT User, Host FROM mysql.user;
```


## add
```bash
php artisan make:model MyModel -mcf;
# Model      app/Models/MyModel.php
# Factory    database/factories/MyModelFactory.php
# Migration  database/migrations/2023_02_20_102943_create_my_models_table.php
# Controller app/Http/Controllers/MyModelController.php

php artisan migrate --seed
```


## Views
`nano my_project/resources/views/my_view.blade.php`
```html
<h1>My View</h1>

<h2>{{ $object_list }}</h2>

<h2>{{$request}}</h2>
```


## Controllers
`nano my_project/app/Http/Controllers/MyModelController.php`
```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MyModel;

class MyModelController extends Controller
{
    public function my_homepage_view(Request $request) {
        return view('my_view',[
            "object_list" => MyModel::all(),
            "request" => $request
        ]);
    }
}
```


## migrations
`nano database/migrations/2023_02_20_102943_create_my_models_table.php`
```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('my_models', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("first_name");
            $table->string("last_name");
            $table->longText("description");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('my_models');
    }
};
```


## routes
`nano my_project\routes\web.php`
```php
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MyModelController;


Route::get('/', [MyModelController::class, "my_homepage_view"]);
```
