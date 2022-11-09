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


## global variable
```php
<?php

  define('MY_VALUE', 'my global variable');
  
  echo MY_VALUE;
  // my global variable
  
  var_dump(MY_VALUE);
  // string(18) "my global variable"
```


## cookie
> Warning: Cannot modify header information - headers already sent
```php
<?php
setcookie('name', 'Asim', time() + 86400 * 30); // 86400 = 1 day

// delete
setcookie('name', ''    , time() - 86400);


if (isset($_COOKIE['name'])) {
  echo $_COOKIE['name'];
}
```


## 
```php

```
