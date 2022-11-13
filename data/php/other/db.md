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


## add table
```php

```


## SELECT data
```php
$query = 'SELECT table_name FROM information_schema.tables';

$result = mysqli_query($connection, $query);
// object(mysqli_result)#2 (5) { ["current_field"]=> int(0) ["field_count"]=> int(1) ["lengths"]=> NULL ["num_rows"]=> int(61) ["type"]=> int(0) }

$objects_array = mysqli_fetch_all($result);

foreach($objects_array as $item) {
  echo '<br>';
  var_dump($item);
}

/*
  Connected successfully
  array(1) { [0]=> string(7) "COLUMNS" }
  array(1) { [0]=> string(8) "SCHEMATA" }
  array(1) { [0]=> string(6) "TABLES" }
  array(1) { [0]=> string(15) "USER_PRIVILEGES" }
  array(1) { [0]=> string(5) "VIEWS" }
*/
```


## Errors
```php

```
