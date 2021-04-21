[Built-in Functions](https://docs.python.org/3/library/functions.html)

## print __dir__
```py
aa = []

dd = [name for name in aa.__dir__() if not name.startswith('_')]

print(dd)
```


## read from command line
`echo -e 'asim \nmypass' > /tmp/data.txt; python3 /tmp/my_file.py < /tmp/data.txt`
```py
username = input('Enter your name: ')
password = input('Enter your pass: ')

print()
print(username, password)
# asim 
```


## command line args
`python3 /tmp/my_file.py  aa bb cc dd ee 11 22 33`
```py
import sys

print( sys.argv )

['/tmp/aaa.py', 'aa', 'bb', 'cc', 'dd', 'ee', '11', '22', '33']


sys.exit()
sys.exit(1)
sys.exit(255)
```


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
