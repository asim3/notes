## create
`php artisan tinker`
```php
$user = new App\Models\User;

$user->name = "Asim";
$user->email = "asim@test.com";
$user->password = bcrypt("!password");

$user->save();
```


## find
```php
use App\Models\User;

User::count();
// 1

$users = User::all();

$users->pluck("name");
$users->first();
$users[0];


User::find(1);
// {
//     id: 1,
//     name: "Asim",
//     ...
// }


User::find(444);
// null


User::findOrFail(444);
// modelNoFoundException
```
