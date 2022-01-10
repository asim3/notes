## current working dir
```py
import os

my_dir = os.getcwd()
os.listdir(my_dir)

# cd ./my_new_dirname
os.chdir("/tmp/")

# rm /tmp/test 
os.rmdir("/tmp/test")
# empty dir only
```


## mkdir
```py
import os

my_new_dirname = os.path.join(os.getcwd(), 'my_new_dirname')

os.mkdir(my_new_dirname)

# cd ./my_new_dirname
os.chdir(my_new_dirname)

# ls
print(os.listdir(os.getcwd()))
```


## is file exists
```python
from pathlib import Path

my_file = Path("/path/to/file")
my_file.is_file()
my_file.is_dir()
my_file.exists()

if os.path.isfile('test.txt'):
```


## make Bytes IO file
```py
from io import BytesIO

excel = BytesIO(b'mybinarydata')
excel.name = 'my-excel.xlsx'
```
