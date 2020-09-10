## Dictionary
```python
person = {'name': 'Phill', 'age': 22}

person.values() # 'Phill',  22

for key, val in person.items():
    print (key, "=>", val)

person.get('name')          # 'Phill'
person.get('salary')        # None
person.get('x', 'default')  # 'default'
```


```python
original = {1:'one', 2:'two'}
mod = {2:'mod2', 3:'mod3'}
new = original
new[1] = 'x'
print(original)   # {1: 'x', 2: 'two'}

new.update(mod)   # adds elements to the dictionary
print(original)   # {1: 'x', 2: 'mod2', 3: 'mod3'}
```


> returns the value of a key (if the key is in dictionary). If not, it inserts key with a value to the dictionary.
```python
setdefault() 
```