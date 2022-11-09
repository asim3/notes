## GET
```php
<a href="<?php echo $_SERVER['PHP_SELF']; ?>?username=Asim">Link</a>
```


## POST
```php
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
    <div>
        <label>Name: </label>
        <input type="text" name="name">
    </div>

    <br>
    
    <div>
        <label>Password: </label>
        <input type="password" name="password">
    </div>
    
    <br>
    
    <input type="submit" name="submit" value="Submit">
</form>
```


## submit
```php
<?php

    if (isset($_GET['username'])) {
        echo '<h3>' . $_GET['username'] . '</h3>';
    }
    
    
    if (isset($_POST['submit'])) {
        echo '<h3>Username: ' . $_POST['name'] . '</h3>';
        echo '<h3>Password: ' . $_POST['password'] . '</h3>';
    }
?>
```
