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
$query = 'CREATE TABLE Person (
  ID int NOT NULL,
  FirstName varchar(255),
  LastName varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);';

$result = mysqli_query($connection, $query);

if (!$result) {
  echo 'ERROR: ' . mysqli_error($connection);
  // ERROR: Table 'Person' already exists
}
else {
  echo 'OK: ' . mysqli_info($connection);
  // OK: 
}
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


> `mysqli_query`: Returns false on failure. For successful queries which produce a result set, such as SELECT, SHOW, DESCRIBE or EXPLAIN, mysqli_query() will return a mysqli_result object. For other successful queries, mysqli_query() will return true.


## Errors
```php
$query = "INSERT INTO Person (ID, FirstName, LastName) 
  VALUES 
  (12, 'test2', 'test2'), 
  (44, 'test3', 'test3'), 
  (86, 'test4', 'test4'); 
";

$result = mysqli_query($connection, $query);

if (!$result) {
  echo 'ERROR: ' . mysqli_error($connection);
  // ERROR: Duplicate entry '12' for key 'PRIMARY'
}
else {
  echo 'OK: ' . mysqli_info($connection);
  // OK: Records: 3 Duplicates: 0 Warnings: 0
}
```
