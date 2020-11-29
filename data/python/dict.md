## Dictionary

```py
data = {'a':1,'b':2,'c':3}

data['a'] = 10
data.update(a = 11)

data.update({'c': 33, 'd': 44})

del data['b']
# Removes the key & returns the value
data.pop('c')
# Clears entire dictionary
data.clear()
```


## for
```py
for key in data: 
    # Iterates just through the keys, ignoring the values

for key, value in d.items(): 
    # Iterates through the pairs

for key in d.keys(): 
    # Iterates just through key, ignoring the values

for value in d.values(): 
    # Iterates just through value, ignoring the keys
```


## for in
```py
data = {k: v for k, v in (('a', 1),('b',2),('c',3))}
```


```python
person = {'name': 'Phill', 'age': 22}

person.values() 
# 'Phill',  22

for key, val in person.items():
    print (key, ">>>", val)

person.get('name')          # 'Phill'
person.get('salary')        # None
person.get('x', 'default')  # 'default'
```


```py
person = {'name': 'Phill', 'age': 22}
print({"new":33,**person})
# {'new': 33, 'name': 'Phill', 'age': 22}
```


## not using copy
```python
original = {1:'one', 2:'two'}

new = original
new[1] = 'AAA'

print(original)   
# {1: 'AAA', 2: 'two'}
```


## using copy
```py
original = {1:'one', 2:'two'}
new = original.copy()
new[1] = 'AAA'

print(original)   
# {1: 'one', 2: 'two'}
```


# add to dictionary
```py
original = {1:'one', 2:'two'}
mod = {2:'mod2', 3:'mod3'}
original.update(mod)   

print(original)   
# {1: 'one', 2: 'mod2', 3: 'mod3'}
```


> returns the value of a key (if the key is in dictionary). If not, it inserts key with a value to the dictionary.

```python
setdefault() 
```
