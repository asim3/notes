## echo
```php

  <?= "One Line"; ?>

  <br />

  $my_name = "Asim";

  echo 'Hello ' . $my_name;
  // Hello Asim

  echo "Hello ${my_name}";
  // Hello Asim
    
  echo 123, 54.321, 'Hello';
  // 12354.321Hello
  
  print 'Hello Asim';
  // Hello Asim
  
  print_r('Hello Asim');
  // Hello Asim
  
  print_r([1, 2, 3]);
  // Array ( [0] => 1 [1] => 2 [2] => 3 )
```


## echo type
```php
<?php
  $my_name = "Asim";

  var_dump('Hello $my_name');
  // string(14) "Hello $my_name" 

  var_dump("Hello $my_name");
  // string(10) "Hello Asim" 
  
  var_dump(true);
  // bool(true)
  
  var_dump([1, 2, 3]);
  // array(3) { [0]=> int(1) [1]=> int(2) [2]=> int(3) }
  
  var_export('Hello');
  // 'Hello'
  
  var_export("Hello");
  // 'Hello'
  
  var_export(true);
  // true
  
  var_export([1, 2, 3]);
  // array ( 0 => 1, 1 => 2, 2 => 3, )
```


## string functions
```php
$my_name = "Asim Mohammed";

echo strlen($my_name);
// 13

echo strpos($my_name, 'm');
// 3

echo strrpos($my_name, 'm');
// 10

echo strrev($my_name);
// demmahoM misA

echo strtolower($my_name);
// asim mohammed

echo strtoupper($my_name);
// ASIM MOHAMMED

echo ucwords($my_name);
// Asim Mohammed

echo str_replace('Asim', 'Bader', $my_name);
// Bader Mohammed

echo substr($my_name, 0, 7);
// Asim Mo

echo substr($my_name, 7);
// hammed
```


## %s
```php
printf('%s is a %s', 'Asim', 'nice guy');
// Asim is a nice guy

printf('1 + 1 = %d', 1 + 1);
// 1 + 1 = 2

printf('1 + 1 = %f', 1 + 1);
// 1 + 1 = 2.000000
```


## html entities
```php
$my_html = '<script>alert(1)</script>';
var_dump($my_html);
// string(25) "" 

$my_html_as_string = htmlentities($my_html);
var_dump($my_html_as_string);
// string(37) "<script>alert(1)</script>" 
```
