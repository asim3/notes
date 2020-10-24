## Named Temporary File
```py
import os, tempfile


file = tempfile.NamedTemporaryFile(delete=False)
file.name
# '/tmp/tmptez_t4u0'
file.write(b'NamedTemporaryFile: delete=False \n\n')
file.mode
# 'rb+'
file.seek(0)
file.read(3)
# b'Nam'
file.read()
# b'edTemporaryFile: delete=False \n\n'

file.delete
# False
file.close()
file.read()
# ValueError: read of closed file

file.name
# '/tmp/tmptez_t4u0'
# file still exist, because (delete=False)

# delete file using os
os.unlink(file.name)
os.path.exists(file.name)
# False
```


## OR using with
```py
import os, 
from tempfile import NamedTemporaryFile

with NamedTemporaryFile(suffix=".yaml") as file:
    print("Name:", file.name)
    print("Mode:", file.mode)
    file.write(b'\nNamedTemporaryFile: delete=False \n\n') 


```


## Temporary Directory
```py
import os, tempfile


mydir =  tempfile.TemporaryDirectory()
mydir.name
# '/tmp/tmp1ann640p'
os.path.exists(mydir.name)
# True

mydir.cleanup()
os.path.exists(mydir.name)
# False
```


## OR using with
```py
import os, tempfile


with tempfile.TemporaryDirectory() as mydir:
    print(mydir)
    # /tmp/tmphxdnu672
    print('os.path.exists:', os.path.exists(mydir))
    # os.path.exists: True

os.path.exists(mydir)
# False
```


# Temporary File
```py
import tempfile


file = tempfile.TemporaryFile()

file.write(b'Hello world!\n\n') 
file.mode
# 'rb+'

# set "cursor position" to the first letter in the file
file.seek(0)
# read next 3 letters, then set "cursor position" after 3 letters
file.read(3) 
# read all, then set "cursor position" to the end of the file
file.read()

file.close()
file.read()
# ValueError: read of closed file
```


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


## aaa
```py

```


