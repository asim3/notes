## string format

## `%` formatting 
> “Old-school”
```python
name = "Aaaa"
age = 74
"Hello, %s. You are %s." % (name, age)
```



## f-Strings 
> `>= python 3.6`
```python
name = "Aaaa"
age = 74

f"Hello, {name}. You are {age}."
f"{2 * 37}"
```



```python
message = (
    f"3 * 6 = {3 * 6}. "
    f"3 * 7 = {3 * 7}. "
    f"3 * 8 = {3 * 8}. "
)
# or
message = f"5 * 6 = {5 * 6}" \
    f"5 * 5 = {5 * 5}. " \
    f"5 * 7 = {5 * 7}."

print(message)
# 3 * 6 = 18. 3 * 7 = 21. 3 * 8 = 24. 
```



## str.format() "slow"
```python
print("{} - {}".format(123, 444)) 
print("{0} - {1}".format("Aaa", "Bbbb")) 
print("{0} - {gfg} - {1}".format("Aaa", "Bbb", gfg ="Ccc"))
```


> To limit the precision 
```python
print ("my {0} is {1:.2f}%".format("GPA", 78.234876)) 
```


```python
for i in range(1, 60, 10): 
    print("{:6d} {:6d} {:6d} {:6d}".format(i, i * 2, i ** 3, i ** 4))
#     1      2      1      1
#    11     22   1331  14641
#    21     42   9261 194481
```
