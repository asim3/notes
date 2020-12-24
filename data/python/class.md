## Object
```python
getattr(person, "age") # getattr(person, "age") === person.age
getattr(person, 'age', '21') # get 'age' or return the default <21>
hasattr()       # returns true if an object has the given named attribute and false if it does not.

setattr(object, name, value) # sets the value of given attribute of an object
```


## Class
```python
class Person:
    name = 'Adam'

p = Person()
print('Before modification:', p.name)

# setting name to 'John'
setattr(p, 'name', 'John')

print('After modification:', p.name)
```


[Data model](https://docs.python.org/3/reference/datamodel.html#object.__repr__)


```python
class Car:
    def __init__(self, *cccc):
        self.car_name = cccc[0]

    def __repr__(self):
        return f'this car name is {self.car_name}'


my_car = Car('impala')
print(my_car) # this car name is impala
```


## object TypeError
```py
class My_Class:
    def get_items(self):
        print(self.__dir__(), "\nok")

ee = My_Class()
ee.get_items()
# ['__module__', ...] 
# ok
xx = My_Class(name_0="11")
# TypeError: object() takes no parameters
```


## class init
```py
class My_Class:
    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)

my_cls = My_Class(name_1="aaa",name_2="bbb",name_3="ccc")

my_cls.name_1
# aaa
my_cls.name_3
# ccc
```


## class return init
```python
class MyClass1:
    name = "asim"
    
class MyClass2:
    name = "asim"

    def __new__(cls):
        return "My name is %s" % cls.name

MyClass1()
# <__main__.MyClass1 object at 0x7f89f4374430>

MyClass2()
# 'My name is asim'
```


## init_subclass !!!
```python
class MyClass1:
    name = "asim"
    
class MyClass2:
    name = "asim"

    def __init_subclass__(cls, **kwargs):
        return "My name is %s" % cls.name

MyClass1()
# <__main__.MyClass1 object at 0x7f89f4374430>

MyClass2()
# <__main__.MyClass2 object at 0x7f89f42369d0>
```
