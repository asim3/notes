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
