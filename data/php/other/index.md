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
    }
?>
<!DOCTYPE html>
<html lang="en">
```
