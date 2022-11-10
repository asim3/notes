## global variable
```php
define('MY_VALUE', 'my global variable');

echo MY_VALUE;
// my global variable

var_dump(MY_VALUE);
// string(18) "my global variable"
```


## cookie
Must be called before accessing any cookie data
> Warning: Cannot modify header information - headers already sent
```php
<?php
  setcookie('name', 'Asim', time() + 86400 * 30); // 86400 = 1 day

  // delete
  setcookie('name', ''    , time() - 86400);


  if (isset($_COOKIE['name'])) {
    echo $_COOKIE['name'];
  }
?>
<!DOCTYPE html>
<html lang="en">
```


## sessions
Must be called before accessing any session data
```php
<?php
    session_start();

    $_SESSION['username'] = "Asim";

    if (isset($_SESSION['username'])) {
        echo $_SESSION['username'];

        // delete all _SESSION
        session_destroy();
    }
?>
<!DOCTYPE html>
<html lang="en">
```


## exception
```php
<?php
  function my_function($x) {
    if (!$x) {
      throw new Exception('Division by zero.');
    }

    return 1/$x;
  }

  echo my_function(0);
  // Fatal error: Uncaught Exception: Division by zero. 
  // in /var/www/html/index.php:7 
  // Stack trace: 
  //   #0 /var/www/html/index.php(13): my_function(0) 
  //   #1 {main} thrown in /var/www/html/index.php on line 7
```


## try catch
```php
try {
  echo my_function(5); // 0.2
  echo my_function(0); // Caught exception: Division by zero. 
  echo my_function(2); // [skip]
} 
catch (Exception $e) {
  echo '<br>Caught exception: ',  $e->getMessage(), ' ';
}
```


## Finally
Finally block is executed regardless of whether an exception is thrown or not
```php
try {
  echo my_function(0);
  // Caught exception: Division by zero. 
  // finally 
} 
catch (Exception $e) {
  echo '<br>Caught exception: ',  $e->getMessage(), ' ';
} 
finally {
  echo 'finally ';
}
```
