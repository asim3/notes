## with

```py
class MyObject:
    def __enter__(self):
        print("enter")
        return "My name is Asim"
        
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("exit")


with MyObject() as my_obj:
    my_value = "My Other value"


print(my_obj)
# My name is Asim
print(my_value)
# My Other value
```
