# Temporary File
> `NamedTemporaryFile()`, `mkstemp()`, and `mkdtemp()`, which should 
  eliminate all remaining need to use the **insecure** `mktemp()` function.

## temp file without directory
```py
from tempfile import TemporaryFile


file = TemporaryFile(mode='w+b', suffix='', prefix='tmp')

file.write(b'Hello world!\n\n') 
file.mode
# 'rb+'

# set the "file pointer" to the first letter in the file
# The file pointer is placed at the beginning of the file
file.seek(0)
# read next 3 letters, then set "cursor position" after 3 letters
file.read(3) 
# read all, then set "cursor position" to the end of the file
file.read()

file.close()
file.read()
# ValueError: read of closed file
```

> On POSIX systems `os.name`, you can unlink a file while you still 
  have a file handle. Your process can read and write to the file, 
  but no other process can access it because the directory entry has 
  already been removed. 

## OR using with
```py
import tempfile

with tempfile.TemporaryFile() as file:
    file.write(b'Hello world!')
    file.seek(0)
    file.read(4)
    file.read()

file.read()
# ValueError: read of closed file
file.mode
# 'rb+'
```


## file mode
```py
r   for reading
w   for writing
a   for appending
r+  for both reading and writing
```


