## connection
```php
define('DB_HOST', 'db');
define('DB_USER', 'devuser');
define('DB_PASS', 'devpass');
define('DB_NAME', 'test_db');

$connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
// Fatal error: Uncaught Error: Class 'mysqli' not found
// Shell: docker-php-ext-install mysqli

if ($connection->connect_error) {
    die('Connection failed: ' . $connection->connect_error);
}

echo 'Connected successfully';
```

## 
```php

```
