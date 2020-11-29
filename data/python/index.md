## Virtual Environments
```txt
sudo apt-get install -y python3-venv
python3 -m venv venv
source venv/bin/activate
deactivate
```


## packages
```txt
pip install -r requirements.txt
pip freeze > requirements.txt
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

date = datetime.now()
date.strftime("%d/%m/%Y %H:%M:%S")
date.strftime("%d/%m/%Y %I:%M:%S %p")
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
