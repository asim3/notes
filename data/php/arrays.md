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
