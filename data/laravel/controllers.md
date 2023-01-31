## Controllers
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
