```php
$age = 20;
$date = '20';

if ($age < 20) {
    echo 'Not enough';
}
elseif ($age == 20) {
    echo 'age is 20';
}
else {
    echo 'OK';
}
```


## or
```php
if(empty($posts)) {
    echo 'It is empty';
}


echo true ? '111' : '222';
// 111

echo false ? '111' : '222';
// 222

echo $aaa ?? '333';
// 333
```


## switch
```php
$color = '123';

switch($color) {
    case '111': echo '999'; 
    break;
    case '222': echo '888'; 
    break;
    default: echo '777';
}
```
