
## Write file
```py
import os

os.chdir("/tmp/")
print(os.getcwd())

# not os.open
my_file = open('my_new_file.txt', 'rb+')
# FileNotFoundError: No such file or directory: 'my_new_file.txt'

my_file = open('my_new_file.txt', 'w+')
my_file.writable()
# True
my_file.write("Asim")
```


## write using bytes
```py
import os

os.chdir("/tmp/")
print("Asim".encode())
# b'Asim'

my_bytes = open('my_bytes_file.txt', 'wb+')
my_bytes.write("Asim".encode())
```


## rename and delete
```py
os.rename( "my_new_file.txt", "my_old_file.txt" )

os.remove("my_old_file.txt")
```

## read a file
```py
import os

os.chdir("/tmp/")

my_file = open('my_file_file.txt', 'w+')
my_file.write("123456789\nMy Name: Asim")

# The file pointer is placed at the beginning of the file
my_file.seek(0)

# read first 5 letters
print(my_file.read(5))
# 12345

# read the next 6 letters
print(my_file.read(6))
# 6789
# M

# read until the end
print(my_file.read())
# y Name: Asim


# set the pointer at the beginning 
my_file.seek(0)
print(list(my_file))
# ['123456789\n', 'My Name: Asim']
```

## read multiple lines
```py
try:
    my_file = open('example.txt', 'r')
    print(my_file.readline())  # Read first line
    print(my_file.readline())  # Read second line
    print(my_file.readline())  # Read third line

    # OR

    lines = my_file.readlines()
    print(lines)
    
    # OR 

    lines = my_file.read().splitlines()
    print(lines)

except IOError:
    print('There was an error opening the file!')
    return
```



## OR using with
```py
import os

os.chdir("/tmp/")

with open('my_new_file.txt', 'wb+') as my_file:
    my_file.write("Asim".encode())
    my_file.seek(0)
    print(my_file.read())
```


## Access Mode:
```text
r      reading only
rb     reading only in binary format
r+     reading and writing.
rb+    reading and writing in binary format.
```


##### Overwrites the file if the file exists
```text
w      writing only
wb     writing only in binary format
w+     writing and reading
wb+    writing and reading in binary format
```


##### The file pointer is at the end of the file if the file exists
```text
a      appending
ab     appending in binary format
a+     appending and reading
ab+    appending and reading in binary format
```
