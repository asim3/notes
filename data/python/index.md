## Virtual Environments
```txt
sudo apt-get install -y python3-venv
python3 -m venv venv
source venv/bin/activate
deactivate
```


## packages
```txt
pip install django gunicorn

pip install -r requirements.txt

pip freeze > requirements.txt
```

## IF Else
```py
if force_insert and (force_update or update_fields):
    raise ValueError("Cannot force both insert and updating in model saving.")
elif i > 5:
    print("2")
else:
    print("3")
```


## return if
```py
def aaa():
   return True if 1 else False
 
def bbb():
   return True if 0 else False
 
aaa()
# True

bbb()
# False
```


## loop
```python
my_list = [1, 3, 5, 7, 9]


for i, val in enumerate(my_list):
    print (i, ",",val)
# 0 , 1
# 1 , 3
# 2 , 5
# 3 , 7
# 4 , 9


[print(i) for i in my_list]
# 1
# 3
# 5
# 7
# 9
# [None, None, None, None, None]
```


## Closure 1
```py
my_global = 1
if True:
  my_local = 2

print(my_global)
# 1
print(my_local)
# 2
```


## Closure 2
```py
my_global = 1
def my_func():
  my_local = 2

my_func()
print(my_global)
# 1

print(my_local)
# not defined
```


## convert to X
```py
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
```py
from datetime import datetime


now = datetime.now().strftime("%d/%m/%Y %H:%M:%S")


date = datetime.now()
date.strftime("%d/%m/%Y %H:%M:%S")
date.strftime("%d/%m/%Y %I:%M:%S %p")
```



## convert string to datetime
```py
from datetime import datetime


date_string_1 = "21 June, 2018"

datetime.strptime(date_string_1, "%d %B, %Y")
# datetime.datetime(2018, 6, 21, 0, 0)


date_string_2 = "27-01-2021 11:00:00 PM"

datetime.strptime(date_string_2, "%d-%m-%Y %I:%M:%S %p")
# datetime.datetime(2021, 1, 27, 23, 0)
```



## range
```py
list(range(10))   # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
set(range(10))    # {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
tuple(range(10))  # (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
len(range(10))    # 10
```


```py
try:
    # ...

except OSError as err:
    print("OS error: %s" % err)

except ValueError:
    print("Could not convert data to an integer.")

except:
    print("Unexpected error:", sys.exc_info()[0])
    raise
```
