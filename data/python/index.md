## Virtual Environments
```
sudo apt-get install python3-venv
python3 -m venv venv
source venv/bin/activate
deactivate
```


## packages
```
pip install -r requirements.txt
pip freeze > requirements.txt
```



```
data = {'a':1,'b':2,'c':3}
data['a'] = 1
data.update(a = 1)
data.update({'c': 3, 'd': 4})  # Updates 'c' and adds 'd'
```


```
del data[key]  # Removes specific element in a dictionary
data.pop(key)  # Removes the key & returns the value
data.clear()  # Clears entire dictionary
```


```
for key in data: # Iterates just through the keys, ignoring the values
for key, value in d.items(): # Iterates through the pairs
for key in d.keys(): # Iterates just through key, ignoring the values
for value in d.values(): # Iterates just through value, ignoring the keys
```


```
data = {k: v for k, v in (('a', 1),('b',2),('c',3))}
```


##المصفوفات
```
len(range(10))    # 10
list(range(10))   # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
set(range(10))    # {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
tuple(range(10))  # (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
```


##المحولات
```
str(datetime)     # '123'
int(datetime)     # -123
float(datetime)   # -24.45
bool()					  # Converts a Value to Boolean

tuple(datetime)   # is an immutable sequence type; tuple('Pyt') = ('P', 'y', 't')
set(datetime)     # set('Python') = {'P', 'o', 't', 'n', 'y', 'h'}

list(datetime)    # list('Python') = ['P', 'y', 't', 'h', 'o', 'n']
dict(datetime)    # {'a':1,'b':2,'c':3}
```


## Date & Time
```
from datetime import datetime

date = datetime.now()
date.strftime("%d/%m/%Y %H:%M:%S")
date.strftime("%d/%m/%Y %I:%M:%S %p")
```


## cut
```
str(123456789)[1:3] 	# '23'
str(123456789)[2:] 		# '3456789'
str(123456789)[:2] 		# '12'
str(123456789)[:-3] 	# '123456'
str(123456789)[-3:] 	# '789'
```


```
try:
    # ...

except OSError as err:
    print("OS error: {0}".format(err))

except ValueError:
    print("Could not convert data to an integer.")

except:
    print("Unexpected error:", sys.exc_info()[0])
    raise
```
