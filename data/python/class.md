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


## class representation
repr() built-in function to compute the “official” string representation
[Data model](https://docs.python.org/3/reference/datamodel.html#object.__repr__)
```python
class MyClass1:
    name = "asim"

    def __repr__(self):
        # return self.__str__()
        return '__repr__: my name is %s' % self.name
        
    def __str__(self):
        # import pprint
        # return pprint.pformat(self.to_dict())
        return '__str__: my name is %s' % self.name

    def to_dict(self):
        return {'to_dict': self.name}

class MyClass2:
    name = "asim"
    
    def __repr__(self):
        return '__repr__: my name is %s' % self.name

# {'class': {'to_dict': 'asim'}}


print(MyClass1())
# __str__: my name is asim
print(MyClass2())
# __repr__: my name is asim

my_class = MyClass1()

print(my_class) 
# __str__: my name is asim

print({'class': MyClass1()})
# {'class': __repr__: my name is asim}
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


## class return after init
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


## TypeError
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
