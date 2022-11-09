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


## Submit
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


## Sanitize data
`<script>alert(1)</script>`
```php
if (isset($_POST['submit'])) {

    $name = filter_var($_POST['name'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    $password = filter_var($_POST['password'], FILTER_SANITIZE_STRING);

    echo '<h3>Username: ' . $name . '</h3>';
    echo '<h3>Password: ' . $password . '</h3>';
}
```


## Sanitize inputs
`<script>alert(1)</script>`
```php
if (isset($_POST['submit'])) {
    
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    
    $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);

    echo '<h3>Username: ' . $name . '</h3>';
    echo '<h3>Password: ' . $password . '</h3>';
}
```


### FILTER_SANITIZE_STRING
Convert string to string with only alphanumeric, whitespace, and the following characters - _.:/


### FILTER_SANITIZE_EMAIL
Convert string to a valid email address


### FILTER_SANITIZE_URL
Convert string to a valid URL


### FILTER_SANITIZE_NUMBER_INT
Convert string to an integer


### FILTER_SANITIZE_NUMBER_FLOAT
Convert string to a float


### FILTER_SANITIZE_FULL_SPECIAL_CHARS
HTML-encodes special characters, keeps spaces and most other characters
