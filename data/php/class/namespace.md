`nano src/dir_1/MyClass.php`
```php
<?php

namespace My_Namespace_1;

class MyClass {
    public function __construct() {
        echo "Hi from dir 1 <br>";
        
        $my_date = new DateTime();
        // Fatal error: Uncaught Error: Class 'My_Namespace_1\DateTime' not found 

        $my_date = new \DateTime();
        echo $my_date->format('d/m/Y') . "<br>";
    }
}

class MyClass_1 {
    public function __construct() {
        echo "Hi from dir 1.1 <br>";
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


## OR
`nano src/home.php`
```php
<?php

require_once "./dir_1/MyClass.php";
require_once "./dir_2/MyClass.php";

use My_Namespace_1\{MyClass, MyClass_1};
use My_Namespace_2\MyClass as MyClass_2;

echo "Hi from home <br>";

$my_user = new MyClass();
// Hi from dir 1
// 14/11/2022

$my_user = new MyClass_1();
// Hi from dir 1.1

$my_user = new MyClass_2();
// Hi from dir 2
```
