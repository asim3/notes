## environment variables
```python
import os

os.environ.get('HOME')
```



```python
assert hasattr(request, 'user')

assert True # nothing happens
assert False # error: Traceback (most recent call last): AssertionError
```


## Read excel file
[excel](http://www.python-excel.org/)

`pip install openpyxl`
```python
from openpyxl import load_workbook


e_file = load_workbook(self.object.post_file.path) 
# OR
e_file = load_workbook("full_path") 

for sheet in e_file.sheetnames:
    print(sheet.lower(), '\n')
    print(sheet.title(), '\n')
    for row in e_file[sheet].rows:
        for cell in row:
            print('\n', cell.value)
```


## write an excel file
```py
from openpyxl.workbook import Workbook
from openpyxl.writer.excel import save_virtual_workbook


excel_file = Workbook()
sheet_1 = excel_file.active
sheet_1.title = "My Sheet Name"
sheet_1.column_dimensions['A'].width = 5
sheet_1.column_dimensions['B'].width = 15

data = range(1, 40)
for i, student in enumerate(data, start=2):
    print('A%d' % i, 'asim  %d' % student)
    print('B%d' % i, 'bader %d' % student)

sheet_2 = excel_file.create_sheet(title="Pi Sheet Name")
sheet_2['F5'] = 3.14

excel_bytes = save_virtual_workbook(excel_file)

filename = 'pledge-%s.xlsx' % datetime.now().strftime('%s')
content_type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
response = HttpResponse(excel_bytes, content_type=content_type)
response['Content-Disposition'] = 'attachment; filename="%s"' % filename
return response
```


## Status bar
```python
import progressbar
from time import sleep
bar = progressbar.ProgressBar(maxval=20, \
    widgets=[progressbar.Bar('=', '[', ']'), ' ', progressbar.Percentage()])
bar.start()
for i in xrange(20):
    bar.update(i+1)
    sleep(0.1)
bar.finish()
```



## عرض جمع اسماء الدوال
```python
"\n".join( dir(obj) )
```


```python
x = 12
isinstance(x, int) # True
y = 12.0
isinstance(y, float) # True
```


```python
len()						# returns Length of an Object
type()					# returns type of the given object.
```


```python
sorted()				# returns sorted list from a given iterable
reversed()			# returns reversed iterator of a sequence
all()						# returns true when all elements in iterable is true
iter()					# returns iterator for an object
max()						# returns largest element
min()						# returns smallest element
Tuple count()		# returns occurrences of element in a tuple
Tuple index()		# returns smallest index of element in tuple
enumerate()			# returns an Enumerate Object
zip()						# returns an Iterator of Tuples
```



```python
filter()				# constructs iterator from elements which are true
slice()					# creates a slice object specified by range()
map()						# Applies Function and Returns a List
setattr()				# sets the value of given attribute of an object
hasattr()       # returns true if an object has the given named attribute and false if it does not.
```


```python
any()						# Checks if any Element of an Iterable is True
sum()						# Add items of an Iterable
```



```python
dir()						# return a list of valid attributes of the object.
locals()				# returns a dictionary of the current local symbol table
globals()				# returns the dictionary of the current global symbol table
```


```python
from dis import dis
def _():
    class Base:
        pass

dis(_)
```


## compile python to binary
```txt
sudo pip3 install cython
cython test.py --embed
gcc -Os -I /usr/include/python3.6m -o test test.c -lpython3.6m -lpthread -lm -lutil -ldl
```
