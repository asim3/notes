## Controllers
`nano my_project/app/Http/Controllers/MyModelController.php`
```php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MyModelController extends Controller
{
    public function my_homepage_view() {
        return view('my_view');
        // @ my_project\resources\views\my_view.blade.php
    }
}
```


## routes
`nano my_project\routes\web.php`
```php
use App\Http\Controllers\MyModelController;

Route::get('/my-homepage', [MyModelController::class, "my_homepage_view"]);
```


```php
use App\Models\MyModel;

// Show all
public function index() {};

//Show single
public function show(MyModel $my_id) {};

// Show Create Form
public function create() {};

// Store Data
public function store(Request $request) {};

// Show Edit Form
public function edit(MyModel $my_id) {};

// Update Data
public function update(Request $request, MyModel $my_id) {};

// Delete
public function destroy(MyModel $my_id) {};

// Manage
public function manage() {};
```


## request
```php
public function index() {
    dd(request());
    dd(request("my_parameter"));
    dd(request()->my_parameter);
};

# OR 

public function index(Request $request) {
    dd($request);
};
```

@ Tag Filter
