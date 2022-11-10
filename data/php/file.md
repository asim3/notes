## add new file
```php
$file_path = 'my_file.txt';

$handle = fopen($file_path, 'w');

$contents = 'Asim' .  PHP_EOL . 'Bader' .  PHP_EOL . 'Ahmed' .  PHP_EOL . 'Sami';
// PHP_EOL = end of line character

fwrite($handle, $contents);
// int(21)
// fwrite() writes the contents to the file and returns the number of bytes written on success, or FALSE on failure.

fclose($handle);
```


## read a file
```php
$file_path = 'my_file.txt';

if(file_exists($file_path)) {
    var_dump(readfile($file_path));
    // Asim Bader Ahmed Samiint(21)
    
    // OR

    $handle = fopen($file_path, 'r');
    $contents = fread($handle, filesize($file_path));
    fclose($handle);
    
    var_dump($contents);
    // string(21) "Asim Bader Ahmed Sami" 
}
else {
    echo "no file named: ${file_path}";
}
```


```text
r    - Open a file for read only. File pointer starts at the beginning of the file
w    - Open a file for write only. Erases the contents of the file or creates a new file if it doesn't exist. File pointer starts at the beginning of the file
a    - Open a file for write only. The existing data in file is preserved. File pointer starts at the end of the file. Creates a new file if the file doesn't exist
x    - Creates a new file for write only. Returns FALSE and an error if file already exists

r+   - Open a file for read/write. File pointer starts at the beginning of the file
w+   - Open a file for read/write. Erases the contents of the file or creates a new file if it doesn't exist. File pointer starts at the beginning of the file
a+   - Open a file for read/write. The existing data in file is preserved. File pointer starts at the end of the file. Creates a new file if the file doesn't exist
x+   - Creates a new file for read/write. Returns FALSE and an error if file already exists
```


## File upload
```php
<?php

    if(isset($_POST['submit'])) {
        if(!empty($_FILES['upload']['name'])) {
            $file_name = $_FILES['upload']['name'];
            $file_size = $_FILES['upload']['size'];
            $file_tmp = $_FILES['upload']['tmp_name'];
            
            $file_extension = explode('.', $file_name);
            $file_extension = strtolower(end($file_extension));
            echo "file_extension: ${file_extension} <br>"; 
            // file_extension: jpg 
            
            $target_dir = "/var/www/html/uploads/${file_name}";
            // mkdir /var/www/html/uploads/

            $allowed_extension = array('png', 'jpg', 'jpeg', 'gif');

            if(in_array($file_extension, $allowed_extension)) {
                if($file_size <= 1000000) { // 1000000 bytes = 1MB

                    move_uploaded_file($file_tmp, $target_dir);

                    echo '<p style="color: green;">File uploaded!</p>';
                } 
                else {
                    echo '<p style="color: red;">File too large!</p>';
                }
            } 
            else {
                $message = '<p style="color: red;">Invalid file type!</p>';
            }
        } 
        else {
            $message = '<p style="color: red;">Please choose a file</p>';
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>
</head>
<body>
    <?php echo $message ?? null; ?>
    <form 
        action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" 
        method="post" 
        enctype="multipart/form-data">
        
        Select image to upload:
        <input type="file" name="upload">
        <input type="submit" value="Submit" name="submit">
    </form>
</body>
</html>
```
