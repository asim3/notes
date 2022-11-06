## echo
```php

  <?= "One Line"; ?>

  <br />

<?php

  echo 'Hello Asim';
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
  var_dump('Hello');
  // string(5) "Hello"
  
  var_dump("Hello");
  // string(5) "Hello"
  
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
