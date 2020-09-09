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
```python
pip install xlrd
import xlrd 

file = xlrd.open_workbook("sample.xlsx") 
sheet = file.sheet_by_index(0) 

# return value of row 0 and column 1 
sheet.cell_value(0, 1) 

# number of rows 
print(sheet.nrows) 

# number of columns 
print(sheet.ncols) 

# all columns name
for i in range(sheet.ncols): 
    print(sheet.cell_value(0, i)) 

# all row values in a list 
print(sheet.row_values(1))
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
