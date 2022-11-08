```php
<?php

  $my_array_1 = [1, 2, 3];

  $my_array_2 = array(1, 2, 3);

  print_r($my_array_2);
  // Array ( [0] => 1 [1] => 2 [2] => 3 ) 

  var_dump($my_array_2);
  // array(3) { [0]=> int(1) [1]=> int(2) [2]=> int(3) }

  echo $my_array_1[1];
  // 2

  echo count($my_array_1);
  // 3

  echo in_array(2, $my_array_1);
  // bool(true)
```


## map
```php
$arr1 = range(1, 3);

print_r($arr1);
// Array ( [0] => 1 [1] => 2 [2] => 3 ) 


$arr2 = array_map(function($x) {
  return $x + 5;
}, $arr1);

print_r($arr2);
// Array ( [0] => 6 [1] => 7 [2] => 8 ) 
```


## filter
```php
$arr1 = range(1, 5);

print_r($arr1);
// Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 )

$arr2 = array_filter($arr1, function($x) {
  return $x <= 3;
});

print_r($arr2);
// Array ( [0] => 1 [1] => 2 [2] => 3 ) 
```


## reduce
```php
$arr1 = range(1, 4);

print_r($arr1);
// Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 ) 

$arr2 = array_reduce($arr1, function($carry, $x) {
  return $carry + $x;
});

print_r($arr2);
// 10
```


## add to an array
```php
$my_array_1 = [1, 2, 3];

$my_array_1[] = 5;

print_r($my_array_1);
// Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 5 ) 

array_push($my_array_1, 7);

print_r($my_array_1);
// Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 5 [4] => 7 ) 

array_unshift($my_array_1, 9);

print_r($my_array_1);
// Array ( [0] => 9 [1] => 1 [2] => 2 [3] => 3 [4] => 5 [5] => 7 ) 


# Remove
array_pop($my_array_1);
print_r($my_array_1);
// Array ( [0] => 9 [1] => 1 [2] => 2 [3] => 3 [4] => 5 ) 

array_shift($my_array_1);
print_r($my_array_1);
// Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 5 ) 


unset($my_array_1[2]);
print_r($my_array_1);
// Array ( [0] => 1 [1] => 2 [3] => 5 ) 
// Array (          [1]      [3]      ) 
```


## merge array
```php
$arr1 = [1, 2, 3];
$arr2 = [4, 5, 6];

$arr3 = array_merge($arr1, $arr2);
$arr4 = [...$arr1, ...$arr2];

print_r($arr3);
// Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 [5] => 6 ) 

print_r($arr3);
// Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 [5] => 6 ) 
```


## Associative Array
```php
$hex = [
  'red' => '#ff0000',
  'green' => '#00ff00',
  'blue' => '#0000ff',
];


echo $hex['green'];
// #00ff00
```


## loops
```php
for($i=0; $i<10; $i++) {
    echo $i . '<br />';
}


$x = 1;
while($x < 10) {
    echo $x . '<br />';
    $x++;
}
```


## foreach
```php
$my_array_1 = [1, 2, 3, 4, 5];


foreach($my_array_1 as $my_value){
  echo $my_value . "<br />";
}


foreach($my_array_1 as $i => $my_value){
  echo $i . '- ' . $my_value . "<br />";
}


$hex = [
  'red' => '#ff0000',
  'green' => '#00ff00',
  'blue' => '#0000ff',
];


foreach($hex as $key => $value){
  echo $key . '- ' . $value . "<br />";
}
```


## keys
```php
$arr1 = ['red', 'green', 'blue'];

$arr2 = ['#ff0000', '#00ff00', '#0000ff'];


$arr3 = array_combine($arr1, $arr2);
print_r($arr3);
// Array ( [red] => #ff0000 [green] => #00ff00 [blue] => #0000ff ) 


$arr4 = array_keys($arr3);
print_r($arr4);
// Array ( [0] => red [1] => green [2] => blue ) 


$arr5 = array_flip($arr3);
print_r($arr5);
// Array ( [#ff0000] => red [#00ff00] => green [#0000ff] => blue ) 
```
