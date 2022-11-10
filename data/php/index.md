## PHP

[docs](https://www.php.net/manual/en/)

```php
<?php
  echo 'Hello Asim';
?>

<br />

<?php echo 'one line' ?>

<br />

<?php
  // echo 'Hello 123';
  echo 'Hello End';
```


## Data Types
```php
<?php
  
  var_dump('Hello');
  // string(5) "Hello"

  var_dump("Hello");
  // string(5) "Hello"
  
  var_dump(123);
  // int(123)
  
  var_dump(12.3);
  // float(12.3) 

  var_dump(true);
  // bool(true)

  var_dump(NULL);
  // NULL
  
  var_dump([1, 2, 3]);
  // array(3) { [0]=> int(1) [1]=> int(2) [2]=> int(3) }
  
  var_dump($my_value);
```


## math
```php
<?php

  echo 5 + 5;
  // 10

  echo '5' + '5';
  // 10

  echo 10 - 5;
  // 5

  echo 5 * 6;
  // 30

  echo 10 / 2;
  // 5

  echo 10 % 3;
  // 1
```


## Redirect to another page
```php
header('Location: /home.php');
```


## include
```php
<?php include 'my/dir/header.php'; ?> // Warning if no such file

<?php require 'my/dir/header.php'; ?> // Error   if no such file

<?php require_once 'my/dir/header.php'; ?> // Error   if no such file
```
