`nano src/dir_1/MyClass.php`
```php
<?php

namespace My_Namespace_1;

class MyClass {
    public function __construct() {
        echo "Hi from dir 1 <br>";
    }
}
```


`nano src/dir_2/MyClass.php`
```php
<?php

namespace My_Namespace_2;

class MyClass {
    public function __construct() {
        echo "Hi from dir 2 <br>";
    }
}
```


`nano src/home.php`
```php
<?php

require_once "./dir_1/MyClass.php";
require_once "./dir_2/MyClass.php";

echo "Hi from home <br>";

$my_user = new MyClass();
// Fatal error: Uncaught Error: Class 'MyClass' not found
// in /var/www/html/src/home.php:8 Stack trace: #0 {main}
// thrown in /var/www/html/src/home.php on line 8


$my_user = new My_Namespace_1\MyClass();
// Hi from dir 1


$my_user = new My_Namespace_2\MyClass();
// Hi from dir 2
```

