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
