```python
number = 10_000_000 # is 10000000

print(f'{number:,}') # 10,000,000
```


```python
names = ['aaa', 'bbb', 'ccc']

for index, name in enumerate(names, start=1):
  print(index, name)
```


```python
names = ['aaa', 'bbb', 'ccc']
phones = ['005', '004', '009']
emails = ['a@a', 'b@a', 'c@a']

for name, phone, email in zip(names, phones, emails):
  print(f'{name} {email} {phone}')
```


```python
a, _, *c, d = (1, 2, 3, 4, 5, 6)

print(a) # 1
print(c) # [3, 4, 5]
print(d) # 6
```


```python
class Person:
  pass

person = Person()
person.first = 'Ahmed'
print(person.first) # Ahmed

other_name = 'Nasser'
setattr(person, 'first', other_name)
print(person.first) # Nasser
```


```python
import smtpd
help(smtpd)

from datetime import datetime
help(datetime)
dir(datetime)
```


## Yield
```python
from time import sleep

def func():
    for i in range(10):
        sleep(.5)
        yield i

type(func)    # <class 'function'>
type(func())   # <class 'generator'>

for i in func():
     print(i)
```
