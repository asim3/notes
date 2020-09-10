## Object
```python
getattr(person, "age") # getattr(person, "age") === person.age
getattr(person, 'age', '21') # get 'age' or return the default <21>
hasattr()       # returns true if an object has the given named attribute and false if it does not.

setattr(object, name, value) # sets the value of given attribute of an object
```


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



> Meta Class >> dont use `__new__` replaels with `__init_subclass__`
```python
class BaseMeta(type):
    def __new__(cls, name, bases, body):
        print('new\n\n\n')
        if not 'bar' in body:
            # check if this function exist before returning the class
            raise TypeError(f'bar function is not in {name}')
        return super().__new__(cls, name, bases, body)


class Base(metaclass=BaseMeta):
    def foo(self):
        return self.bar()

    # write a function named 'bar' to remove the error
    # def bar(self):
    #     print('done')
```


> `__init_subclass__` !!! not working
```python
class BaseMeta(type):
    def __init_subclass__(cls, **kwargs):
        print(dir(cls), '\n\n')
        assert hasattr(dir(cls), 'bar') , f'bar function is not in {cls.__name__}'
        super().__init_subclass__(**kwargs)


class Base(BaseMeta):
    def foo(self):
        return self.bar()

    # write a function named 'bar' to remove the error
    def bar(self):
        print('done')
```
