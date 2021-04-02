## raise Error
```py
# when an operation or function receives an argument that has the right type
# but an inappropriate value
raise ValueError("passing arguments with the wrong value.")

# when an operation or function is applied to an object of inappropriate type.
raise TypeError("My error notes.")

# If an object is meant to support a given operation but has not yet provided.
raise NotImplementedError("My error notes.")
```

## raise My Error
```py
class My_Error(Exception):
    pass

class BadHeaderError(ValueError):
    pass

class Http404(Exception):
    pass

raise My_Error("My error notes.")
raise BadHeaderError("My error notes.")
raise Http404("My error notes.")
```


## TypeError
```py
my_data = "123"

if my_data and not isinstance(my_data, dict):
    raise TypeError('my_data is not dict.')
```



## try: except:
```py
class ValueTooSmallError(Exception):
    pass

class ValueTooLargeError(Exception):
    pass

# Enter a number: 
while True:
    try:
        i = int(input("Enter a number: "))
        if i < 5:
            raise ValueTooSmallError
        elif i > 5:
            raise ValueTooLargeError
        print("Congratulations! You guessed it correctly.")
        break
    except ValueTooSmallError:
        print("This value is too small")
    except (ValueTooLargeError):
        print("This value is too large")
    except ValueError:
        print("not a number!")
    except (KeyboardInterrupt, EOFError):
        print("\ndon't run!!! >>> hint 5 ;)")
    print("try again!")
```