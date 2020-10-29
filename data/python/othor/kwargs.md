```python
def test(*args, **kwargs):
    print(args)
    print(kwargs)

test()
# {}

data = {"A":'one', "B":'two'}
test(*data)
# ('A', 'B')
# {}

test(*data.values())
# ('one', 'two')
# {}

test(**data)
# ()
# {'A': 'one', 'B': 'two'}

test(C="3", D=4)
# ()
# {'C': '3', 'D': 4}

test(6, 7, 8)
# (6, 7, 8)
# {}

test(6, data, 8)
# (6, {'A': 'one', 'B': 'two'}, 8)
# {}

test(data)
# ({'A': 'one', 'B': 'two'},)
# {}

test(6, *data, 8)
# (6, 'A', 'B', 8)
# {}
test(6, {**data}, 8)
# (6, {'A': 'one', 'B': 'two'}, 8)
# {}
```



# !!
```python
def some_args(arg_1, arg_2, arg_3):
    print("arg_1:", arg_1)
    print("arg_2:", arg_2)
    print("arg_3:", arg_3)

args = ("Sammy", "Casey", "Alex")
some_args(*args)

my_list = [2, 3]
some_args(1, *my_list)
```


```python
def some_kwargs(kwarg_1, kwarg_2, kwarg_3):
    print("kwarg_1:", kwarg_1)
    print("kwarg_2:", kwarg_2)
    print("kwarg_3:", kwarg_3)

kwargs = {"kwarg_1": "Val", "kwarg_2": "Harper", "kwarg_3": "Remy"}
some_kwargs(**kwargs)
```


```python
# It is important to keep the order of arguments
def example2(arg_1, arg_2, *args, kw_1="shark", kw_2="blobfish", **kwargs):
  ...
```
