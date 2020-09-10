```python
import os

dir = os.getcwd()
dir_list = os.listdir(dir)
print(dir_list)

my_new_dirname = 'my_new_dirname'
new_dir = os.path.join(dir, my_new_dirname)
if not my_new_dirname in dir_list:
  os.mkdir(new_dir)
os.chdir(new_dir)

dir = os.getcwd()
dir_list = os.listdir(dir)
print(dir_list)
```


is file exists
```python
from pathlib import Path

my_file = Path("/path/to/file")
my_file.is_file()
my_file.is_dir()
my_file.exists()

if os.path.isfile('test.txt'):
```


Read file
```python
with open('test.txt', 'r') as fff:
    file_contents = fff.read()
```