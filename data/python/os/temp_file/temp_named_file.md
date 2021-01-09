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
os.path.exists(file.name)
# True

file.close()
os.path.exists(file.name)
# True
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
import os
from tempfile import NamedTemporaryFile


with NamedTemporaryFile(prefix="my-", suffix=".yaml") as file:
    print("Name:", file.name)
    # Name: /tmp/my-v047zhe8.yaml
    print("Mode:", file.mode)
    # Mode: rb+
    file.write(b'my name is asim')
    file.seek(0)
    file.read()
    # b'my name is asim'
    os.path.exists(file.name)
    # True

file.name
# '/tmp/my-v047zhe8.yaml'
file.read()
# ValueError: read of closed file

os.path.exists(file.name)
# False
```


## delete
```py
import os, tempfile

file = tempfile.NamedTemporaryFile()
os.path.exists(file.name)
# True

file.delete
# True
os.path.exists(file.name)
# True

file.close()
os.path.exists(file.name)
# False
```
