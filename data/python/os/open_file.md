
## Read file
```python
import os

print("asim".encode())
# b'asim'

os.chdir("/tmp/")
print(os.getcwd())

# not os.open
my_file = open('my_new_file.txt', 'rb+')
my_file.writable()
# True
my_file.writ("AsIm".encode())


print(my_file.read())

# set the "file pointer" to the first letter in the file
my_file.seek(0)
# The file pointer is placed at the beginning of the file

os.rename( "my_new_file.txt", "my_old_file.txt" )

os.remove("my_old_file.txt")
```


## OR using with
```py
import os

os.chdir("/tmp/")

# not os.open
with open('my_new_file.txt', 'rb+') as my_file:
    my_file.writable()
    # True
    my_file.writ("AsIm".encode())
    print(my_file.read())
```


## !!
```py
with open('my_new_file.txt') as my_file:
    my_list = list(my_file)
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
