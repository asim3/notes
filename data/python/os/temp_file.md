# tempfile
```py
import tempfile


file = tempfile.TemporaryFile()

file.write(b'\nHello world!\n\n') 
file.mode
# 'rb+'

# set "cursor position" to the first letter in the file
file.seek(0) 
# read next 5 letters, then set "cursor position" after 5 letters
file.read(5) 
# read all, then set "cursor position" to the end of the file
file.read()

file.close()
```



## Named Temporary File
```py
import os, tempfile


file = tempfile.NamedTemporaryFile(delete=False)
file.name
# '/tmp/tmptez_t4u0'
file.write(b'\nNamedTemporaryFile: delete=False \n\n') 
file.delete
# False
file.close()

# file still exist, because (delete=False)
file.name
# '/tmp/tmptez_t4u0'

# delete by os
os.unlink(file.name)
os.path.exists(file.name)
# False
```



## aaa
```py

```



## aaa
```py

```


