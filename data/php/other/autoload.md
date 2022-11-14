`nano php_root\src\dir_1\MyClass.php`
```php
<?php

namespace dir_1;

class MyClass {
    public function __construct() {
        echo "Hi from dir 1 <br>";
    }
}
```


`nano php_root\home.php`
```php
<?php

spl_autoload_register(function($class) {
  var_dump($class);
  // string(13) "dir_1\MyClass"

  $path = 'src/' . str_replace('\\', '/', $class) . '.php';
  echo __DIR__ . '/' . $path;
  // /var/www/html/src/dir_1/MyClass.php

  require_once __DIR__ . '/' . $path;
});


use dir_1\MyClass;

$my_user = new MyClass();
// Hi from dir 1 
```
