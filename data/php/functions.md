```php
$x = 123;

function my_function() {
    echo $x; // undefined
    
    $y = 456;

    global $z;
    $z = 789;
    
    echo "my func <br>";
}


my_function();

echo $y; // undefined

echo $z; // 789
```


## argument list
```php
function my_sum($a=4, $b=5) {
    return $a + $b;
}


echo my_sum(5, 2); // 7
echo my_sum(); // 9


$my_sub = function ($a=8, $b=3) {
    return $a - $b;
};


echo $my_sub(5, 2); // 3
echo $my_sub(); // 5
```


## arrow functions 
```php
$my_multi = fn($a=8, $b=3) => $a * $b;

echo $my_multi(5, 2); // 10
echo $my_multi(); // 24
```
